import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import downloadimg from "../assets/download.jpg";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

const Patientcard = () => {
  return (
    <div class="flex flex-row p-6 mx-4 my-2 shadow-slate-200 shadow-2xl rounded-2xl">
      <img
        src={downloadimg}
        alt="image"
        style={{ width: "40%", height: "170px", objectFit: "contain" }}
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Stack direction={"column"} gap={2} p={5}>
          <Typography variant="h5" component="div">
            Name : Dawood Khatri
          </Typography>
          <Typography variant="h5" component="div">
            Email : Rojidhusd@gmail.com
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default Patientcard;
