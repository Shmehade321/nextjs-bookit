import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Grid,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const RoomItem = ({ room }) => {
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card sx={{ width: "100%" }}>
        <CardMedia>
          <Image
            src="https://via.placeholder.com/140"
            width={300}
            height={140}
            layout="responsive"
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h5" component="h5" sx={{ marginBottom: "10px" }}>
            Charming Studio 10 Miles to Wells Beaches!
          </Typography>
          <Typography variant="p" component="p" sx={{ marginBottom: "10px" }}>
            $12/night
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Box sx={{ display: "flex", marginRight: "5px" }}>
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
              <StarOutlineIcon />
            </Box>
            <Typography variant="caption" display="flex">
              (5 Reviews)
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" sx={{ width: "100%" }}>
            View Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RoomItem;
