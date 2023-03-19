import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Doctorscard from "./Doctorscard";
const Patientrecords = ({ patients }) => {
  return (
    <Stack direction={"column"} gap={5} px={{ lg: 20, sm: 5, xs: 1 }}>
      {!patients.length ? (
        <Box display="flex" justifyContent="center" p={5}>
          <Typography variant="h5" >No Patients Requested for Review</Typography>
        </Box>
      ) : (
        patients.map((patient, index) => (
          <Doctorscard {...patient} key={`dotor_patient_card_${index}`} />
        ))
      )}
    </Stack>
  );
};

export default Patientrecords;
