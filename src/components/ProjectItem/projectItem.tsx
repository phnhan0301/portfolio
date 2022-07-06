import { Box, Card, CardContent, Chip, Link, Typography } from "@mui/material";
import Router from "next/link";
import React from "react";
import {
  ProjectItemRoot,
  ProjectIcon,
  FeatureImage,
} from "./projectItem.styled";

const ProjectItem = () => {
  return (
    <ProjectItemRoot>
      <Card variant="outlined">
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            marginBottom={1.5}
            lineHeight={1}
          >
            <Box display="flex" gap={1}>
              <ProjectIcon>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/projects.svg" alt="project" />
              </ProjectIcon>

              <Router href="/projects/[slug]" passHref>
                <Link underline="hover" fontWeight={600}>
                  Project Title
                </Link>
              </Router>
            </Box>

            <Box marginLeft={1}>
              <Chip label="Private" variant="outlined" size="small" />
            </Box>
          </Box>

          <Box display="flex" gap={2} marginBottom={0.75}>
            <Typography fontSize={12}>
              Dolorem illum, suscipit ad dolores et inventore magni odio illo
              accusamus recusandae eum sunt adipisci!
            </Typography>

            <Link href="#">
              <FeatureImage>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.ibb.co/4th0kXv/image-2.png" alt="image-2" />
              </FeatureImage>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </ProjectItemRoot>
  );
};

export default ProjectItem;
