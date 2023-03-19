import React from "react";
import { Button, Stack } from "@mui/material";
import Report from "../assets/report.png";
import httprequest from "../utils/req";

const Medreccard = (props) => {
  const download = (id) => {
    httprequest("/api/patient/previewMedicalRecord", "GET", { id }).then(
      (res) => {
        if (res.success) {
          window.open(res.data, { target: "_blank" });
        } else {
          alert(res.message);
        }
      }
    );
  };

  return (
    <div class="flex justify-between p-8 mx-6 my-4 shadow-slate-200 shadow-2xl rounded-2xl">
      <div class="flex">
        <div class="mr-8">
          <img src={Report} alt="Doc Image" class="pt-6" />
        </div>
        <div flex>
          <p class="text-2xl font-bold p-1">{props.title}</p>
          <p class="text-xl p-1">{new Date(props.date).toDateString()}</p>
          <p class="text-xl p-1">{props.symptoms}</p>
        </div>
      </div>
      <Stack direction="row" py={5} gap={2}>
        <Button
          variant="contained"
          onClick={() => {
            download(props._id);
          }}
        >
          Download
        </Button>
      </Stack>
    </div>
  );
};

export default Medreccard;
