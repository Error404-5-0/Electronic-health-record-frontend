import { Stack } from "@mui/material";
import React from "react";
import Doctorscard from "./Doctorscard";
const Patientrecords = ({ patients }) => {
  return (
    <Stack direction={"column"} gap={5} px={{ lg: 20, sm: 5, xs: 1 }}>
      {patients.map((patient, index) => (
        <Doctorscard {...patient} key={`dotor_patient_card_${index}`} />
      ))}
    </Stack>
  );
};

export default Patientrecords;
