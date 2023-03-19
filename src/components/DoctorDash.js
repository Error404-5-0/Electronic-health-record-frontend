import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import Doctorprofile from "./Doctorprofile";
import Patientrecords from "./Patientrecords";
import httprequest from "../utils/req";
import { useNavigate } from "react-router-dom";

const DoctorDash = () => {
  const [value, setValue] = React.useState(0);
  const [details, setDetails] = useState();

  const [recall, setRecall] = useState(false);

  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabs = () => {
    switch (value) {
      case 0:
        return <Patientrecords patients={details.patients} />;
      case 1:
        return (
          <Doctorprofile {...details} recall={recall} setRecall={setRecall} />
        );
    }
  };

  useEffect(() => {
    httprequest(`/api/doctor/getDetails`, "GET").then((res) => {
      if (res.success) {
        setDetails(res.data);
      } else {
        navigate("/login");
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
            <Tab label="My Patients" />
            <Tab label="Profile" />
          </Tabs>
        </Box>
        <Box>{getTabs()}</Box>
      </>
    );
  return <></>;
};

export default DoctorDash;
