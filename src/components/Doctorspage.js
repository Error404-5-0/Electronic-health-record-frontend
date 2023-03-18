import { Stack } from "@mui/material";
import React from "react";
import Cardcomp from "./Cardcomp";

const Doctorspage = () => {
  return (
    <Stack direction={"column"} px={9} py={2} gap={2}>
      <Cardcomp
        name="Nadeem Khan"
        details="M.B.B.S. having 3 years of experience "
      />
      <Cardcomp
        name="Zaid Mujahid"
        details="M.B.B.S. having 3 years of experience "
      />
    </Stack>
  );
};

export default Doctorspage;
