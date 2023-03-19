import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";

export default function Cardcomp(props) {
  const navigate = useNavigate();
  const handleclick = () => {};
  return (
    <Card
      sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4)" }}
      onClick={props.onClick}
    >
      <CardActionArea>
        <CardContent>
          <Box display={"flex"}>
            <Box
              p={1}
              display="flex"
              justifyContent={"center"}
              width={{ lg: "30%", md: "20%", sm: "10%" }}
            >
              <Box borderRadius={"50%"} width={"80px"}>
                <PersonOutlinedIcon
                  p={1}
                  sx={{
                    color: "lightblue",
                    height: "80%",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Box>
            </Box>
            <Box width={{ lg: "50%", md: "40%", sm: "20%" }} p={2.3}>
              <Typography gutterBottom variant="h5" component="div">
                {props.name}
              </Typography>
              <Typography variant="body2">{props.email}</Typography>
              <Stack direction={"row"} gap={3}>
                <Typography variant="body2">{props.age}</Typography>
                <Typography variant="body2">{props.gender}</Typography>
              </Stack>
            </Box>
            <Box p={5}>
            <Button variant="contained" onClick= {() => navigate(`view/${props._id}`)}>
                View
              </Button>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
