import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        variant="p"
        component="p"
        align="center"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        Book It - 2019-2021, All Rights Reserved
      </Typography>
    </footer>
  );
};

export default Footer;
