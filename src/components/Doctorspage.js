import { Stack } from "@mui/material";
import React from "react";
import Cardcomp from "./Cardcomp";

const Doctorspage = () => {
  return (
    <Stack direction={"column"} px={{ lg: 9, md: 4, sm: 2 }} py={2} gap={2}>
      <Cardcomp
        name="Nadeem Khan"
        exp="4 years"
        gender="Male"
        qualification="M.B.B.S"
      />
      <Cardcomp
        name="Zaid Mujahid"
        exp="4 years"
        gender="Male"
        qualification="M.B.B.S"
      />
    </Stack>
  );
};

export default Doctorspage;
