import { Box, Container } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const ProjectsDetails: NextPage = () => {
  return (
    <>
      <Head>
        <title>[Project name] - My Portfolio | Z31o_0 Phan</title>
      </Head>

      <Box component="main">
        <Container>
          <h1>[Project name]</h1>
        </Container>
      </Box>
    </>
  );
};

export default ProjectsDetails;
