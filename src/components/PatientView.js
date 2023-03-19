import React, { useState } from 'react'
import { Box, Stack, } from "@mui/system";
import Patientcard from './Patientcard';
import Report from '../assets/report.png'
import { Button } from "@mui/material";

const PatientView = () => {
    const [title, setTitle] = useState("X-Ray")
    const [date, setDate] = useState("12/34/2424")
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
        <Patientcard />
        <Box
          width="100%"
          textAlign={"center"}
          fontSize={35}
          borderRadius={"10px"}
          className="bg-sky-200"
        >
          Add More Details
        </Box>
        <div class="flex justify-between p-8 mx-6 my-4 shadow-slate-200 shadow-2xl rounded-2xl">
      <div class="flex">
        <div class="mr-8">
          <img src={Report} alt="Doc Image" class="pt-6" />
        </div>
        <div flex>
          <p class="text-2xl font-bold p-1">{title}</p>
          <p class="text-xl p-1">{date}</p>
        </div>
      </div>
      <div className="py-10">
        <Button variant="contained">View</Button>
      </div>
    </div>
    </Stack>
  )
};

export default PatientView