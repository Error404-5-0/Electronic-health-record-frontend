import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";

export default function Cardcomp(props) {
  return (
    <Card
      sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)" }}
      onClick={props.onClick}
    >
      <CardActionArea>
        <CardContent>
          <Box display={"flex"}>
            <Box p={1} display="flex" justifyContent={"center"} width="30%">
              <Box borderRadius={"50%"} width="80px">
                <PersonOutlinedIcon
                  p={1}
                  sx={{
                    color: "green",
                    height: "80%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Box>
            </Box>
            <Box p={2.3}>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.details}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
