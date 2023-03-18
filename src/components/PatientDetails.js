import { Box, Stack } from "@mui/material";
import React from "react";
import Patientcard from "./Patientcard";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const PatientDetails = () => {
  const [gender, setgender] = React.useState("");
  const [blood, setBlood] = React.useState("");
  const [age, setage] = React.useState("");

  const handleChange = (event) => {
    setgender(event.target.value);
  };
  const handleblood = (event) => {
    setBlood(event.target.value);
  };
  const handleage = (event) => {
    setage(event.target.value);
  };
  console.log(age);
  console.log(blood);
  return (
    <Box sx={{ height: "100%", width: "100%" }} p={3}>
      <Stack direction={"column"} gap={5} px={5}>
        <Box
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
          sx={{ backgroundColor: "lightblue" }}
        >
          Patient Details
        </Box>
        <Patientcard />
        <Box
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
          sx={{ backgroundColor: "lightblue" }}
        >
          Add More Details
        </Box>
        <Stack direction={"column"} px={{ lg: 45, sm: 0 }}>
          <Stack direction={"row"} gap={5}>
            {" "}
            <TextField
              id="outlined-required"
              label="Age"
              onChange={handleage}
            />
            <TextField
              id="outlined-required"
              label="Blood Group"
              onChange={handleblood}
            />
            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Transgender">Transgender</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction={"row"} gap={5}></Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PatientDetails;
