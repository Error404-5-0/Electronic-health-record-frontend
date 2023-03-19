import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import httprequest from "../utils/req";

const Addmedicalrec = ({ recall, setRecall }) => {
  const [details, setDetails] = useState({});

  const addRecord = () => {
    let formData = new FormData();
    formData.append("title", details.title);
    formData.append("symptoms", details.symptoms);
    formData.append("date", details.date);
    formData.append("file", details.file);

    httprequest(`/api/patient/addMedicalRecord`, "POST", formData, true).then(
      (res) => {
        if (res.success) {
          setRecall(!recall);
        } else {
          alert(res.message);
        }
      }
    );
  };
  return (
    <div>
      <h1 className="text-center pt-4 text-4xl font">Record Form</h1>
      <div className="px-10 sm:px-20 lg:px-60 py-6">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font text-xl my-auto">Test Report Title</h1>
            <div>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                onChange={(e) => {
                  setDetails({ ...details, title: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font text-xl my-auto">Test Report</h1>
            <div>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button variant="contained" component="label">
                  Upload
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      setDetails({ ...details, file: e.target.files[0] });
                    }}
                  />
                </Button>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={(e) => {
                      setDetails({ ...details, file: e.target.files[0] });
                    }}
                  />
                  <PhotoCamera />
                </IconButton>
              </Stack>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font text-xl my-auto">Symptoms</h1>
            <div>
              <TextField
                fullWidth
                id="filled-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                variant="outlined"
                onChange={(e) => {
                  setDetails({ ...details, symptoms: e.target.value });
                }}
              />{" "}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font text-xl my-auto">Date and Time</h1>
            <div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  onChange={(e) => {
                    setDetails({ ...details, date: new Date(e) });
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
          <Button variant="contained" onClick={addRecord}>
            Submit Record
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Addmedicalrec;
