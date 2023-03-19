import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import Cardcomp from "./Cardcomp";
import Doctorspage from "./Doctorspage";
import PatientDetails from "./PatientDetails";
import Addmedicalrec from "./Addmedicalrec";
import MedRecord from "./MedRecord";
import httprequest from "../utils/req";
import { useNavigate } from "react-router-dom";

const PatientDash = () => {
  const [value, setValue] = React.useState(1);
  const [details, setDetals] = useState();

  const [recall, setRecall] = useState(false);
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const getTabs = () => {
    switch (value) {
      case 0:
        return <Doctorspage />;
      case 1:
        return (
          <PatientDetails {...details} recall={recall} setRecall={setRecall} />
        );
      case 2:
        return <MedRecord medicalRecords={details.medicalRecords} recall={recall} setRecall={setRecall} />;
      case 3:
        return <Addmedicalrec />;
    }
  };
  useEffect(() => {
    httprequest(`/api/patient/getDetails`, "GET").then((res) => {
      if (res.success) {
        setDetals(res.data);
      } else {
        navigate("/login")
      }
    });
  }, [recall]);
  if (details)
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
  return <></>;
};

export default PatientDash;
