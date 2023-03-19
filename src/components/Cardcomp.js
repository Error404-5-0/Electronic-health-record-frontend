import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
export default function Cardcomp(props) {
  const handleclick = () => {};
  return (
    <Card
      sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", borderRadius: "23px" }}
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
                    color: "border-sky-600",
                    height: "80%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Box>
            </Box>
            <Box width="50%" p={2.3}>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.exp}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.gender}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.qualification}
              </Typography>
            </Box>
            <Box p={5}>
              <Button variant="contained" onClick={handleclick}>
                Grant Permission
              </Button>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
