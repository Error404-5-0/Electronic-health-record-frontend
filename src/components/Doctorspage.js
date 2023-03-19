import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import httprequest from "../utils/req";
import Cardcomp from "./Cardcomp";

const Doctorspage = () => {
  const [doctors, setDoctors] = useState();
  const [patient, setPatient] = useState();

  const [recall, setRecall] = useState();
  useEffect(() => {
    httprequest("/api/patient/doctors", "GET").then(
      (res) => {
        if (res.success) {
          setDoctors(res.data);
        } else {
          alert(res.message);
        }
      },
      [recall]
    );
    httprequest("/api/patient/getDetails", "GET").then(
      (res) => {
        if (res.success) {
          setPatient(res.data);
        } else {
          alert(res.message);
        }
      },
      [recall]
    );
  });
  if (doctors && patient)
    return (
      <Stack direction={"column"} px={{ lg: 9, md: 4, sm: 2 }} py={2} gap={2}>
        {doctors.map((doctor, index) => (
          <Cardcomp
            {...doctor}
            patientId={patient._id}
            recall={recall}
            setRecall={setRecall}
          />
        ))}
      </Stack>
    );
  return <></>;
};

export default Doctorspage;
