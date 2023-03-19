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
import AddIcon from '@mui/icons-material/Add';

const Doctorprofile = () => {
  const [gender, setgender] = React.useState("");

  const [age, setage] = React.useState("");
  const [exp, setExp] = React.useState("");
  const [degree, setDegree] = React.useState("");

  const handleChange = (event) => {
    setgender(event.target.value);
  };

  const handleage = (event) => {
    setage(event.target.value);
  };
  const handleheight = (event) => {
    setExp(event.target.value);
  };
  const handleweight = (event) => {
    setDegree(event.target.value);
  };

  return (
    <Box sx={{ height: "100%", width: "100%" }} p={3}>
      <Stack direction={"column"} gap={5} px={{ lg: 5, md: 2, sm: 0 }}>
        <Box
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
        >
          Doctor Details
        </Box>
        <Patientcard />
        <Box
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
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
              label="Experience"
              onChange={handleheight}
            />
            <TextField
              id="outlined-required"
              label="Degree"
              onChange={handleweight}
            />
          </Stack>
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <Button variant="contained" endIcon={<AddIcon />}>
              Add
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Doctorprofile;
