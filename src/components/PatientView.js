import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/system";
import Patientcard from "./Patientcard";
import Report from "../assets/report.png";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import httprequest from "../utils/req";

const PatientView = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    httprequest("/api/doctor/getPatientDetails", "GET", { patientId: id }).then(
      (res) => {
        if (res.success) {
          setDetails(res.data);
        } else {
          navigate("/doctor");
        }
      }
    );
  }, []);

  if (details)
    return (
      <Stack direction={"column"} gap={5} px={{ lg: 5, md: 3, sm: 1 }}>
        <Box
          className="bg-sky-200"
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
        >
          Patient Details
        </Box>
        <Patientcard {...details} />
        <Box
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
          className="bg-sky-200"
        >
          Medical Records
        </Box>
        {details.medicalRecords.map(({ title, date, symptoms }, index) => (
          <div class="flex justify-between p-8 mx-6 my-4 shadow-slate-200 shadow-2xl rounded-2xl">
            <div class="flex">
              <div class="mr-8">
                <img src={Report} alt="Doc Image" class="pt-6" />
              </div>
              <div flex>
                <p class="text-2xl font-bold p-1">{title}</p>
                <p class="text-xl p-1">{new Date(date).toDateString()}</p>
                <p class="text-xl p-1">{symptoms}</p>
              </div>
            </div>
            <Stack direction="row" py={5} gap={2}>
              <Button variant="contained" onClick={() => {}}>
                View
              </Button>
            </Stack>
          </div>
        ))}
      </Stack>
    );
  return <></>;
};

export default PatientView;
