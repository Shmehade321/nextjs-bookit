import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RoomItem from "./room/RoomItem";
import { useSelector } from "react-redux";

const Home = () => {

  const {rooms} = useSelector(state => state.allRooms)
  console.log(rooms)

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container>
          <Typography variant="h4" component="h4">
            All Rooms
          </Typography>

          <Button
            variant="text"
            startIcon={<ArrowBackIcon />}
            sx={{ marginBottom: "20px", marginTop: "20px" }}
          >
            Back to search
          </Button>

          <Grid container spacing={2}>
            <RoomItem key={1} />
            <RoomItem key={2} />
            <RoomItem key={3} />
            <RoomItem key={4} />
            <RoomItem key={5} />
            <RoomItem key={6} />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
