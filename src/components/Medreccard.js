import React from "react";
import { Button } from "@mui/material";
import Report from "../assets/report.png";
import { Stack } from "@mui/material";
const Medreccard = (props) => {
  return (
    <div class="flex justify-between p-8 mx-20 my-4  shadow-xl rounded-2xl">
      <div class="flex">
        <div class="mr-8">
          <img src={Report} alt="Doc Image" class="pt-6" />
        </div>
        <div flex>
          <p class="text-2xl font-bold p-1">{props.title}</p>
          <p class="text-xl p-1">{props.date}</p>
          <p class="text-xl p-1">{props.conclusion}</p>
        </div>
      </div>
      <Stack direction="row" py={5} gap={2}>
        <Button variant="contained" onClick={props.onClick}>
          View
        </Button>
        <Button variant="contained">Delete</Button>
      </Stack>
    </div>
  );
};

export default Medreccard;
