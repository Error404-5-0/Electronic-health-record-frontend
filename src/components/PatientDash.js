import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import Cardcomp from "./Cardcomp";
import Doctorspage from "./Doctorspage";
import PatientDetails from "./PatientDetails";
import MedicalRecord from "./MedicalRecord";
import Addmedicalrec from "./Addmedicalrec";
import MedRecord from "./MedRecord";

const PatientDash = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const getTabs = () => {
    switch (value) {
      case 0:
        return <Doctorspage />;
      case 1:
        return <PatientDetails />;
      case 2:
        return <MedRecord />;
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
          <Tab label="Discover" />
          <Tab label="Profile" />
          <Tab label="Medical Record" />
          <Tab label="Add Record" />
        </Tabs>
      </Box>
      <Box>{getTabs()}</Box>
    </>
  );
};

export default PatientDash;
