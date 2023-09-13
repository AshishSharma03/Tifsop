"use client";
import React, { useState } from "react";
import RequisitionDetailsFrom from "./MultiPagesFromCompoents/RequisitionDetailsFrom";
import JobDetailsForm from "./MultiPagesFromCompoents/JobDetailsForm";
import InterviewSettingsFrom from "./MultiPagesFromCompoents/InterviewSettingsFrom";
import AppBar from "./AppBar";
import {
  Tabs,
  Tab,
  TabList,
  Box,
  Button,
  Stack,
  TabPanels,
  TabPanel,
  SimpleGrid,
  GridItem,
  Container,
} from "@chakra-ui/react";
import DraftBox from "./DraftBox";
import { useTabContext } from "../Context/TabContext";
import SuccessCard from "./SuccessCard";

const tabs = [
  { id: 0, label: "Requisition Details" },
  { id: 1, label: "Job Details" },
  { id: 2, label: "Interview Settings" },
];

function MainPage() {
  const { ActiveId } = useTabContext();
  return (
    <div>
      <Container maxW="1000px">
        <AppBar />
        <Tabs index={ActiveId}>
          <TabList>
            {tabs.map((a, i) => (
              <Tab  key={i}>{a.label}</Tab>
            ))}
          </TabList>
          <SimpleGrid
            columns={[2, null, 3]}
            spacing={"20px"}
            gridTemplateColumns={{lg:"2fr 1.5fr",md:"2fr 1fr"}}
          >
            <Box>
              <TabPanels>
                <TabPanel>
                  <RequisitionDetailsFrom />
                </TabPanel>
                <TabPanel>
                  <JobDetailsForm />
                </TabPanel>
                <TabPanel>
                  <InterviewSettingsFrom />
                </TabPanel>
              </TabPanels>
            </Box>
            <Box padding={"20px 0px"}>
              <DraftBox />
            </Box>
          </SimpleGrid>
        </Tabs>
      </Container>
      <SuccessCard />
    </div>
  );
}

export default MainPage;
