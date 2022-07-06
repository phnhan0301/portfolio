import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Breadcrumbs, Blockquote, ProjectItem } from "components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio | Z31o_0 Phan</title>
      </Head>

      <Box component="section" marginBottom={3}>
        <Card variant="outlined">
          <CardContent>
            <Breadcrumbs links={[{ title: "Profile.md" }]} />
            <Typography component="h1" fontWeight={600} marginBottom={1}>
              About Me
            </Typography>

            <Typography fontSize={14} marginBottom={0.5}>
              I am a multifaceted innovator working in areas of both design and
              development (but development is more because I'm not really good
              at design but I like it). I love to bring experiences to the world
              and solve problems in the process. Good isn't enough for me but
              must be efficient.
            </Typography>

            <Blockquote>
              Just because a little secret: "I'm lazy boy ʕ•́ᴥ•̀ʔっ"
            </Blockquote>
          </CardContent>
        </Card>
      </Box>

      <Box component="section">
        <Typography component="h2" fontWeight={600} marginBottom={1.5}>
          Recent Projects
        </Typography>

        <Grid spacing={3} container>
          <Grid md={6} item>
            <ProjectItem />
          </Grid>
          <Grid md={6} item>
            <ProjectItem />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
