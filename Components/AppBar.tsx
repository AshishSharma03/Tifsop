import React from "react";
import { Box, Text } from "@chakra-ui/react";
function AppBar() {
  return (
    <Box padding={"20px 0px"} position={"static"}>
      <Text as={"b"} fontSize={"18px"}>
        {" "}
        Create Candidate Requistion
      </Text>
    </Box>
  );
}

export default AppBar;
