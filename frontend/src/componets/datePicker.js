import React, { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function CustomDateTimePicker(props) {
  const [selectedDate, setSelectedDate] = useState(null);

  const disablePastDates = (date) => {
    // Check if the date is earlier than the current date
    return date.isBefore(dayjs(), "day");
  };
  const disablePastTimes = (value, clockType) => {
    const now = dayjs();
    // If it's the same day, disable hours/minutes earlier than now
    if (clockType === "hours") {
      return value.isBefore(now, "hour");
    }
    if (clockType === "minutes") {
      return value.isBefore(now, "minute");
    }
    return false;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ marginBottom: 3 }}>
        <DateTimePicker
          shouldDisableDate={disablePastDates} // Disable past dates
          shouldDisableTime={(time, type) => disablePastTimes(time, type)}
          label={
            props.type === "start" ? "Select Start Time" : "Select End Time"
          }
          value={selectedDate}
          onChange={(newValue) => {
            if (!newValue) return dayjs();
            setSelectedDate(newValue);
            props.setDateTime(
              props.type === "start" ? "start" : "end",
              selectedDate
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              InputLabelProps={{
                shrink: true,
              }}
            />
          )}
        />
      </Box>
    </LocalizationProvider>
  );
}
