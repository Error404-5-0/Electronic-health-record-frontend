import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import downloadimg from "../assets/download.jpg";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";

const Patientcard = () => {
  return (
    <Card sx={{ display: "flex", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)" }}>
      <img
        src={downloadimg}
        alt="image"
        style={{ width: "40%", height: "200px", objectFit: "contain" }}
      />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Stack direction={"column"} gap={2} p={5}>
          <Typography component="div" variant="h5">
            Name : Dawood Khatri
          </Typography>
          <Typography variant="subtitle1" component="div">
            Email : Rojidhusd@gmail.com
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default Patientcard;
