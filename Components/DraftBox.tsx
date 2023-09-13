import React from "react";
import { Box, Text, Stack, SimpleGrid } from "@chakra-ui/react";
import { useDraftDataContext } from "../Context/Draftdatacontext";

interface DataBoxProps {
  data: string;
  title: string;
}

const DataBox = ({ data, title }: DataBoxProps) => {
  return (
    <Box
      padding={"10px 0px"}
      width={"100%"}
      display={"flex"}
      gap={1}
      flexDirection={"column"}
    >
      <Text fontSize={"14px"} fontWeight={"300"}>
        {title}
      </Text>
      <Text fontSize={"14px"} fontWeight={"500"}>
        {data && data.length > 0 ? data : "-"}
      </Text>
    </Box>
  );
};

function DraftBox() {
  const { interviewSetting, jobDetail, requisition } = useDraftDataContext();

  
  return (
    <Box
      position={"relative"}
      bg={"gray.200"}
      padding={"10px"}
      borderRadius={"10px"}
    >
      <Stack gap={3}>
        <Box>
          <Text fontWeight={"700"}>Draft</Text>
        </Box>
        <Box
          position={"absolute"}
          top={0}
          right={0}
          bg={"tomato"}
          padding={"2px 10px"}
          color={"white"}
          rounded={"5px"}
        >
          Preview
        </Box>
        <Box
          bg={"purple.800"}
          color={"white"}
          gap={2}
          display={"flex"}
          flexDirection={"row"}
          rounded={"5px"}
          alignItems={"center"}
          padding={"10px 8px"}
        >
          <Text fontWeight={"500"}>
            {requisition ? requisition.RequisitionTitle : "-"}
          </Text>
          <span style={{ flex: 1 }} />
          <Text fontWeight={"300"} fontSize={"13px"}>
            OPENING
          </Text>
          <Text fontWeight={"800"}>
            {requisition.Opening && !isNaN(Number(requisition.Opening))
              ? requisition.Opening
              : "0"}
          </Text>
        </Box>
        <Box bg={"white"} padding={"20px"} rounded={"10px"}>
          <Text fontWeight={"700"}>Requisition Details</Text>
          <Stack direction={"row"} gap={5} alignItems={"center"}>
            <DataBox
              title={"Urgency"}
              data={`${requisition ? requisition.urgency : "-"}`}
            />
            <DataBox
              title={"Gender"}
              data={`${requisition ? requisition.gender : "-"}`}
            />
          </Stack>
        </Box>
        <Box bg={"white"} padding={"20px"} rounded={"10px"}>
          <Text fontWeight={"700"}>Job Details</Text>
          <Stack direction={"row"} gap={5} alignItems={"center"}>
            <DataBox
              title={"Job Title"}
              data={`${jobDetail ? jobDetail.jobTitle : "-"}`}
            />
            <DataBox
              title={"Job Detail"}
              data={`${jobDetail ? jobDetail.jobDetail : "-"}`}
            />
          </Stack>
          <Stack direction={"row"} gap={5} alignItems={"center"}>
            <DataBox
              title={"Job Location"}
              data={`${jobDetail ? jobDetail.jobLocation : "-"}`}
            />
            {/* <DataBox title={"Job Detail"}  data={""}/> */}
          </Stack>
        </Box>
        <Box bg={"white"} padding={"20px"} rounded={"10px"}>
          <Text fontWeight={"700"}>Job Details</Text>
          <Stack direction={"row"} gap={5} alignItems={"center"}>
            <DataBox
              title={"Interview Duration"}
              data={`${
                interviewSetting ? interviewSetting.interviewDuration : "-"
              }`}
            />
            <DataBox
              title={"Interview Language"}
              data={`${interviewSetting ? interviewSetting.jobLocation : "-"}`}
            />
          </Stack>
          <Stack direction={"row"} gap={5} alignItems={"center"}>
            <DataBox
              title={"Interview Mode"}
              data={`${
                interviewSetting ? interviewSetting.interviewMode : "-"
              }`}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default DraftBox;
