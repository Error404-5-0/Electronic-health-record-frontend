import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import Doctorprofile from "./Doctorprofile";
import Patientrecords from "./Patientrecords";

const DoctorDash = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const getTabs = () => {
    switch (value) {
      case 0:
        return <Patientrecords />;
      case 1:
        return <Doctorprofile />;
    }
  };

  return (
    <>
      <Box p={3} display="flex" justifyContent="center" alignItems={"center"}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="My Patients" />
          <Tab label="Profile" />
        </Tabs>
      </Box>
      <Box>{getTabs()}</Box>
    </>
  );
};

export default DoctorDash;
