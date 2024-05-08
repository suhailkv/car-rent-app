import React, { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField, Box } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function CustomDateTimePicker(props) {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ marginBottom: 3 }}>
        <DateTimePicker
          label={
            props.type === "start" ? "Select Start Time" : "Select End Time"
          }
          value={selectedDate}
          onChange={(newValue) => {
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
