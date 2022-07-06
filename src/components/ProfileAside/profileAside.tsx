import { Box, Link, Typography } from "@mui/material";
import { Avatar } from "components";
import React from "react";
import { AsideRoot, Nickname, Title } from "./profileAside.styled";

const ProfileAside = () => {
  return (
    <AsideRoot component="aside">
      <Box marginBottom={2}>
        <Avatar src="https://i.ibb.co/GsMRb0Y/Hisoka.jpg" size="larger" />
      </Box>

      <Box marginBottom={2}>
        <Title>Nhân Phan</Title>
        <Nickname>@z31o_0</Nickname>
      </Box>

      <Typography fontSize={12} lineHeight={1.5} marginBottom={2}>
        A digital storyteller through the website and javascript is my favorite
        programming language
      </Typography>

      <Typography
        display="flex"
        alignItems="center"
        fontSize={14}
        component="div"
        marginBottom={1}
        lineHeight={1}
      >
        <Box marginRight={1} component="span">
          <img src="/icons/location.svg" />
        </Box>
        Ho Chi Minh, VietNam
      </Typography>

      <Typography
        display="flex"
        alignItems="center"
        fontSize={14}
        component="div"
        lineHeight={1}
      >
        <Box marginRight={1} component="span">
          <img src="/icons/site.svg" />
        </Box>
        <Link
          href="https://nhanphan.net"
          underline="hover"
          color="inherit"
          target="_blank"
        >
          https://nhanphan.net
        </Link>
      </Typography>
    </AsideRoot>
  );
};

export default ProfileAside;
