"use client";
import React, { useEffect } from "react";
import { Formik, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import {
  Stack,
  FormControl,
  FormLabel,
  Button,
  Select,
  Box,
} from "@chakra-ui/react";
import { useTabContext } from "../../Context/TabContext";
import { useDraftDataContext } from "../../Context/Draftdatacontext";
import { useSuccessCardContext } from "../../Context/SuccessCardContext";

const ErrorStyle = {
  color: "red",
  paddingTop: "5px",
  fontSize: "12px",
};

const InterviewSettingsFrom = () => {
  const { setInterviewSetting } = useDraftDataContext();
  const { open } = useSuccessCardContext();
  const { setActiveId } = useTabContext();
  const initialValues = {
    interviewMode: "",
    interviewDuration: "",
    jobLocation: "",
  };

  const validationSchema = Yup.object({
    interviewMode: Yup.string().required("Interview mode is required"),
    interviewDuration: Yup.string().required("Interview duration is required"),
    jobLocation: Yup.string().required("Job location is required"),
  });

  const onSubmit = (values: typeof initialValues) => {
    localStorage.setItem("InterviewSettings", JSON.stringify(values));
    console.log(values);
    open();
  };

  const onPrevious = () => {
    setActiveId(1);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    setInterviewSetting(formik.values);
  });

  useEffect(() => {
    const storedValues = localStorage.getItem("InterviewSettings");
    if (storedValues) {
      const parsedValues: typeof initialValues = JSON.parse(storedValues);
      formik.setValues(parsedValues);
    }
  }, []);

  return (
    <Formik
      initialValues={formik.values}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Stack gap={6}>
          <FormControl>
            <FormLabel htmlFor="interviewMode">Interview Mode</FormLabel>
            <Select
              id="interviewMode"
              {...formik.getFieldProps("interviewMode")}
            >
              <option value="">Select Interview Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </Select>
            <ErrorMessage
              style={ErrorStyle}
              name="interviewMode"
              component="div"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="interviewDuration">
              Interview Duration
            </FormLabel>
            <Select
              id="interviewDuration"
              {...formik.getFieldProps("interviewDuration")}
            >
              <option value="">Select Interview Duration</option>
              <option value="Short">Short</option>
              <option value="Medium">Medium</option>
              <option value="Long">Long</option>
            </Select>
            <ErrorMessage
              style={ErrorStyle}
              name="interviewDuration"
              component="div"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="jobLocation">Job Location</FormLabel>
            <Select id="jobLocation" {...formik.getFieldProps("jobLocation")}>
              <option value="">Select Interview language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </Select>
            <ErrorMessage
              style={ErrorStyle}
              name="jobLocation"
              component="div"
            />
          </FormControl>
          <Stack direction={"row"} paddingTop={"20px"}>
            <Box flex={1} />
            <Button type="button" onClick={onPrevious}>
              previous
            </Button>
            <Button type="submit" colorScheme="teal">
              Submit
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Formik>
  );
};

export default InterviewSettingsFrom;
