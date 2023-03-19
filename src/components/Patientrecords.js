import { Stack } from "@mui/material";
import React from "react";
import Doctorscard from "./Doctorscard";
const Patientrecords = () => {
  return (
    <Stack direction={"column"} gap={5} px={{ lg: 20, sm: 5, xs: 1 }}>
      <Doctorscard
        name="rohit"
        email="rohit@gmail.com"
        age="23"
        gender="male"
        _id="673t4236g3"
      />
    </Stack>
  );
};

export default Patientrecords;
