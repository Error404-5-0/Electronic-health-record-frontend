import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import downloadimg from "../assets/download.jpg";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Button, Grid } from "@mui/material";
import profile from "../assets/profile.png";
import httprequest from "../utils/req";

const DoctorCard = ({
  name,
  email,
  profileImage,
  age,
  experience,
  degree,
  gender,
  recall, setRecall
}) => {
  const uploadProfilePic = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    httprequest("/api/doctor/editDetails", "POST", formData, true).then(
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
    <div class="flex flex-row p-6 mx-4 my-2 shadow-slate-200 shadow-2xl rounded-2xl">
      <Grid item lg={2} xs={3} justifyContent="center">
        <Button
          variant="text"
          component="label"
          size="large"
          sx={{
            borderRadius: "70%",
            width: 150,
            height: 150,
            padding: 3,
            marginX: 5,
            border: 0.0001,
            borderColor: "  #32414a",
          }}
        >
          {profileImage === "" && <img src={profile} />}

          {profileImage !== "" && (
            <img src={profileImage} style={{ objectFit: "cover" }} />
          )}
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              uploadProfilePic(e.target.files[0]);
            }}
          />
        </Button>
      </Grid>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Stack direction={"column"} gap={2}>
          <Typography variant="h5" component="div">
            Name : {name}
          </Typography>
          <Typography variant="h5" component="div">
            Email : {email}
          </Typography>
          <Typography variant="h5" component="div">
            Age : {age}
          </Typography>
          <Typography variant="h5" component="div">
            Experience : {experience}
          </Typography>
          <Typography variant="h5" component="div">
            Degree : {degree}
          </Typography>
          <Typography variant="h5" component="div">
            Gender : {gender}
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default DoctorCard;
