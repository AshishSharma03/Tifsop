"use Client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { TabProvider } from "../../Context/TabContext";
import MainPage from "../../Components/MainPage";
import { DraftDataProvider } from "../../Context/Draftdatacontext";
import { SuccessCardProvider } from "../../Context/SuccessCardContext";
function Home() {
  return (
    <main>
      <ChakraProvider>
       <SuccessCardProvider>
        <DraftDataProvider>
          <TabProvider>
            <MainPage />
          </TabProvider>
        </DraftDataProvider>
       </SuccessCardProvider>
      </ChakraProvider>
    </main>
  );
}

export default Home;
