"use client";
import React, { createContext, useContext, useState } from "react";

interface InterviewSetting {
  interviewMode: String;
  interviewDuration: String;
  jobLocation: String;
}

interface JobDetail {
  jobTitle: String;
  jobDetail: String;
  jobLocation: String;
}

interface Requisition {
  RequisitionTitle: String;
  Opening: String;
  gender: String;
  urgency: String;
}

interface DraftDataContextType {
  interviewSetting: InterviewSetting;
  setInterviewSetting: React.Dispatch<React.SetStateAction<InterviewSetting>>;
  jobDetail: JobDetail;
  setJobDetail: React.Dispatch<React.SetStateAction<JobDetail>>;
  requisition: Requisition;
  setRequisition: React.Dispatch<React.SetStateAction<Requisition>>;
}

const DraftDataContext = createContext<DraftDataContextType | undefined>(
  undefined
);

export function useDraftDataContext() {
  const context = useContext(DraftDataContext);
  if (!context) {
    throw new Error(
      "useDraftDataContext must be used within a DraftDataProvider"
    );
  }
  return context;
}

export function DraftDataProvider({ children }: { children: React.ReactNode }) {
  const [interviewSetting, setInterviewSetting] = useState<InterviewSetting>({
    interviewMode: "",
    interviewDuration: "",
    jobLocation: "",
  });
  const [jobDetail, setJobDetail] = useState<JobDetail>({
    jobTitle: "",
    jobDetail: "",
    jobLocation: "",
  });
  const [requisition, setRequisition] = useState<Requisition>({
    RequisitionTitle: "",
    Opening: "",
    gender: "",
    urgency: "",
  });

  const value = {
    interviewSetting,
    setInterviewSetting,
    jobDetail,
    setJobDetail,
    requisition,
    setRequisition,
  };

  return (
    <DraftDataContext.Provider value={value}>
      {children}
    </DraftDataContext.Provider>
  );
}
