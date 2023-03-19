import React from "react";
import { Button } from "@mui/material";
import Report from "../assets/report.png";

const Medreccard = (props) => {
  return (
    <div class="flex justify-between p-8 mx-6 my-4 shadow-slate-200 shadow-2xl rounded-2xl">
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
      <div className="py-10">
        <Button variant="contained">Delete</Button>
      </div>
    </div>
  );
};

export default Medreccard;
