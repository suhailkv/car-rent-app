import React, { useState } from "react";
import { Button, Box, Fade } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import RadioInputComp from "./RadioInputComp";
import DateRangePicker from "./datePicker";
import TextFieldComp from "./textFieldComp";
import CONSTANTS from "../constants";
const FormComp = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    wheels: "",
    vehicleType: "",
    vehicleModel: "",
    start: "",
    end: "",
  });

  const handleNext = () => {
    if (isValid(step)) {
      if (step === 4) submitData();
      setStep(step + 1);
    } else {
      alert("Please answer the current question before proceeding.");
    }
  };
  const submitData = async () => {
    try {
      const resp = await (
        await fetch(`${CONSTANTS.BACKEND_URL}/${CONSTANTS.BOOKING_API}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      ).json();
      if (resp.error) alert(resp.error);
    } catch (error) {
      alert(`Error : ${error.message}`);
    }
  };
  const isValid = (currentStep) => {
    switch (currentStep) {
      case 0:
        return formData.firstName && formData.lastName;
      case 1:
        return formData.firstName && formData.lastName && formData.wheels;
      case 2:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.wheels &&
          formData.vehicleType
        );
      case 3:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.wheels &&
          formData.vehicleType &&
          formData.vehicleModel
        );
      case 4:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.wheels &&
          formData.vehicleType &&
          formData.vehicleModel &&
          formData.start &&
          formData.end
        );
      default:
        return true;
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => {
      if (field === "start" || field === "end")
        return { ...prev, [field]: value.toISOString() };
      return { ...prev, [field]: value };
    });
  };

  return (
    <Box>
      {step === 5 && <h2>Thank you for using our app</h2>}{" "}
      <TransitionGroup>
        <Fade key={step}>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            {step === 0 && (
              <div>
                <TextFieldComp
                  label="First Name"
                  type="firstName"
                  value={formData.firstName}
                  inputModifier={handleChange}
                />
                <TextFieldComp
                  label="Last Name"
                  type="lastName"
                  value={formData.lastName}
                  inputModifier={handleChange}
                />
              </div>
            )}
            {step === 1 && (
              <RadioInputComp
                url={`${CONSTANTS.BACKEND_URL}/${CONSTANTS.GET_WHEEL_TYPE_API}`}
                inputModifier={handleChange}
                type="wheels"
              />
            )}
            {step === 2 && (
              <RadioInputComp
                url={`${CONSTANTS.BACKEND_URL}/${CONSTANTS.VEHICLE_TYPE_API}/${formData.wheels}`}
                inputModifier={handleChange}
                type="vehicleType"
              />
            )}
            {step === 3 && (
              <RadioInputComp
                url={`${CONSTANTS.BACKEND_URL}/${CONSTANTS.VEHICLE_API}/${formData.vehicleType}`}
                inputModifier={handleChange}
                type="vehicleModel"
                modifyStep={setStep}
              />
            )}
            {step === 4 && (
              <>
                <DateRangePicker type="start" setDateTime={handleChange} />
                <DateRangePicker type="end" setDateTime={handleChange} />
              </>
            )}
            {step !== 5 && (
              <Button onClick={handleNext} variant="contained">
                {step === 4 ? "Submit" : "Next"}
              </Button>
            )}
          </Box>
        </Fade>
      </TransitionGroup>
    </Box>
  );
};

export default FormComp;
