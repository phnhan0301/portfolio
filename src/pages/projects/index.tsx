import {
  Box,
  CardContent,
  Grid,
  ListItemButton,
  Typography,
} from "@mui/material";
import {
  PageBanner,
  ReleaseYearFilter,
  ListItem,
  ListItemText,
  TopicFilter,
  Tab,
} from "assets/styles/projects.styled";
import { Breadcrumbs, ProjectItem } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import { SyntheticEvent, useState } from "react";

const Projects: NextPage = () => {
  const [filterYear] = useState(new Date().getFullYear());
  const [topic, setTopic] = useState("all");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTopic(newValue);
  };

  const topicTabProps = (value: string) => {
    return {
      value,
      id: `topic-tab-${value}`,
      "aria-controls": `topic-tabpanel-${value}`,
    };
  };

  return (
    <>
      <Head>
        <title>Projects - My Portfolio | Z31o_0 Phan</title>
      </Head>

      <Box component="section" marginBottom={3}>
        <PageBanner variant="outlined">
          <CardContent>
            <Breadcrumbs links={[{ title: "Projects.md" }]} />
            <Typography component="h1" fontWeight={600} marginBottom={1}>
              Welcome to my projects
            </Typography>

            <Typography>
              You can find projects that I have participated in
              <br /> and completed, maybe it will make you know more about me
            </Typography>
          </CardContent>
        </PageBanner>
      </Box>

      <Box component="section">
        <Grid spacing={3} container>
          <Grid md={10} item>
            <Box marginBottom={1.5}>
              <TopicFilter
                value={topic}
                onChange={handleChange}
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="basic tabs topic"
              >
                <Tab label="All" {...topicTabProps("all")} />
                <Tab label="Landing page" {...topicTabProps("landing-page")} />
                <Tab label="Wordpress" {...topicTabProps("wordpress")} />
                <Tab label="E-Commerce" {...topicTabProps("e-commerce")} />
              </TopicFilter>
            </Box>

            <Grid spacing={3} container>
              <Grid md={12} item>
                <ProjectItem />
              </Grid>
              <Grid md={12} item>
                <ProjectItem />
              </Grid>
            </Grid>
          </Grid>

          <Grid md={2} item>
            <ReleaseYearFilter>
              <ListItem activated={filterYear == 2022}>
                <ListItemButton>
                  <ListItemText primary="2022" />
                </ListItemButton>
              </ListItem>

              <ListItem activated={filterYear == 2021}>
                <ListItemButton>
                  <ListItemText primary="2021" />
                </ListItemButton>
              </ListItem>

              <ListItem activated={filterYear == 2020}>
                <ListItemButton>
                  <ListItemText primary="2020" />
                </ListItemButton>
              </ListItem>

              <ListItem activated={filterYear == 2019}>
                <ListItemButton>
                  <ListItemText primary="2019" />
                </ListItemButton>
              </ListItem>
            </ReleaseYearFilter>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
