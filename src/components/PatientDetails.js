import { Box, Stack } from "@mui/material";
import React from "react";
import Patientcard from "./Patientcard";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const PatientDetails = () => {
  const [gender, setgender] = React.useState("");
  const [blood, setBlood] = React.useState("");
  const [age, setage] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");

  const handleChange = (event) => {
    setgender(event.target.value);
  };
  const handleblood = (event) => {
    setBlood(event.target.value);
  };
  const handleage = (event) => {
    setage(event.target.value);
  };
  const handleheight = (event) => {
    setHeight(event.target.value);
  };
  const handleweight = (event) => {
    setWeight(event.target.value);
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }} p={{ lg: 3, sm: 2 }}>
      <Stack direction={"column"} gap={5} px={{ lg: 5, md: 3, sm: 1 }}>
        <Box
          className="bg-sky-200"
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
        >
          Patient Details
        </Box>
        <Patientcard />
        <Box
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
          className="bg-sky-200"
        >
          Add More Details
        </Box>
        <Stack direction={"column"} px={{ lg: 45, sm: 0 }} gap={5}>
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
          <Stack direction={"row"} gap={5}>
            <TextField
              id="outlined-required"
              label="Height"
              onChange={handleheight}
            />
            <TextField
              id="outlined-required"
              label="Weight"
              onChange={handleweight}
            />
          </Stack>
          <Box alignItems={"center"}>
            <Button variant="contained" endIcon={<SendIcon />}>
              Upload
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PatientDetails;
