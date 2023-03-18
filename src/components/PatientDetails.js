import { Box, Stack } from "@mui/material";
import React from "react";
import Patientcard from "./Patientcard";

const PatientDetails = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }} p={3}>
      <Stack direction={"column"}>
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
      </Stack>
    </Box>
  );
};

export default PatientDetails;
