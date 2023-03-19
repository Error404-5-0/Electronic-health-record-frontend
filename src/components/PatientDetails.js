import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Patientcard from "./Patientcard";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import httprequest from "../utils/req";

const PatientDetails = ({
  name,
  email,
  profileImage,
  gender,
  bloodGroup,
  age,
  height,
  weight,
  recall,
  setRecall,
}) => {
  const [details, setDetails] = useState({
    gender,
    bloodGroup,
    age,
    height,
    weight,
  });

  const updateDetails = () => {
    httprequest(`/api/patient/editDetails`, "POST", details).then((res) => {
      if (res.success) {
        setRecall(!recall);
      } else {
        alert(res.messgae);
      }
    });
  };

  // const [gender, setgender] = React.useState("");
  // const [blood, setBlood] = React.useState("");
  // const [age, setage] = React.useState("");
  // const [height, setHeight] = React.useState("");
  // const [weight, setWeight] = React.useState("");

  // const handleChange = (event) => {
  //   setgender(event.target.value);
  // };
  // const handleblood = (event) => {
  //   setBlood(event.target.value);
  // };
  // const handleage = (event) => {
  //   setage(event.target.value);
  // };
  // const handleheight = (event) => {
  //   setHeight(event.target.value);
  // };
  // const handleweight = (event) => {
  //   setWeight(event.target.value);
  // };

  return (
    <Box sx={{ height: "100%", width: "100%" }} p={{ lg: 3, sm: 2 }}>
      <Stack direction={"column"} gap={5} px={{ lg: 5, md: 3, sm: 1 }}>
        <Box
          className=""
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
        >
          Patient Details
        </Box>
        <Patientcard
          name={name}
          email={email}
          profileImage={profileImage}
          {...details}
        />
        <Box
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
          className=""
        >
          Add More Details
        </Box>
        <Stack direction={"column"} px={{ lg: 45, sm: 0 }} gap={5}>
          <Stack direction={"row"} gap={5}>
            {" "}
            <TextField
              id="outlined-required"
              label="Age"
              value={details.age}
              onChange={(e) => {
                setDetails({ ...details, age: e.target.value });
              }}
            />
            <TextField
              id="outlined-required"
              label="Blood Group"
              value={details.bloodGroup}
              onChange={(e) => {
                setDetails({ ...details, bloodGroup: e.target.value });
              }}
            />
            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={details.gender}
                label="Gender"
                onChange={(e) => {
                  setDetails({ ...details, gender: e.target.value });
                }}
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
              value={details.height}
              onChange={(e) => {
                setDetails({ ...details, height: e.target.value });
              }}
            />
            <TextField
              id="outlined-required"
              label="Weight"
              value={weight}
              onChange={(e) => {
                setDetails({ ...details, weight: e.target.value });
              }}
            />
          </Stack>
          <Box alignItems={"center"} justifyContent={"center"} display={"flex"}>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              onClick={updateDetails}
            >
              Add
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PatientDetails;
