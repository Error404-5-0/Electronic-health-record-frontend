import React from "react";
import {TextField} from '@mui/material'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Addmedicalrec = () => {
  return <div>
    <h1 className="text-center pt-4 text-4xl font">Record Form</h1>
    <div className="px-10 sm:px-20 lg:px-60 py-6">
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="font text-xl my-auto">Test Report Title</h1>
        <div>
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />   
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font text-xl my-auto">Test Report</h1>
        <div>
          <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
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
          />        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font text-xl my-auto">Date and Time</h1>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker />
        </LocalizationProvider>
      </div>
      </div>
      <Button variant="contained">Submit Record</Button>
    </form>
    </div>
  </div>;
};

export default Addmedicalrec;
