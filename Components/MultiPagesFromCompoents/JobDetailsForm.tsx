"use client";
import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Box,
} from "@chakra-ui/react";
import { useTabContext } from "../../Context/TabContext";
import { useDraftDataContext } from "../../Context/Draftdatacontext";

const ErrorStyle = {
  color: "red",
  paddingTop: "5px",
  fontSize: "12px",
};

const JobDetailsForm = () => {
  const { setJobDetail } = useDraftDataContext();
  const { setActiveId } = useTabContext();

  const validationSchema = Yup.object({
    jobTitle: Yup.string().required("Job title is required"),
    jobDetail: Yup.string().required("Job detail is required"),
    jobLocation: Yup.string().required("Job location is required"),
  });

  const initialValues = {
    jobTitle: "",
    jobDetail: "",
    jobLocation: "",
  };

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
    localStorage.setItem("JobDetails", JSON.stringify(values));
    setActiveId(2);
  };

  const onPrevious = () => {
    setActiveId(0);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    setJobDetail(formik.values);
  });
  useEffect(() => {
    const storedValues = localStorage.getItem("JobDetails");
    if (storedValues) {
      const parsedValues: typeof initialValues = JSON.parse(storedValues);
      console.log("Fetched values from localStorage:", parsedValues);

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
            <FormLabel htmlFor="jobTitle">Job Title</FormLabel>
            <Input
              type="text"
              id="jobTitle"
              placeholder={"Enter the job title"}
              {...formik.getFieldProps("jobTitle")}
            />
            <ErrorMessage style={ErrorStyle} name="jobTitle" component="div" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="jobDetail">job Detail</FormLabel>
            <Input
              type="text"
              id="jobDetail"
              placeholder={"Enter the job detail"}
              {...formik.getFieldProps("jobDetail")}
            />
            <ErrorMessage style={ErrorStyle} name="jobDetail" component="div" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="jobLocation">job Location</FormLabel>
            <Input
              type="text"
              id="jobLocation"
              placeholder={"Enter the job location"}
              {...formik.getFieldProps("jobLocation")}
            />
            <ErrorMessage
              style={ErrorStyle}
              name="jobLocation"
              component="div"
            />
          </FormControl>

          <Stack direction={"row"} paddingTop={"20px"}>
            <span style={{ flex: 1 }} />
            <Button type="button" onClick={onPrevious}>
              previous
            </Button>
            <Button type="submit" colorScheme="teal">
              next
            </Button>
          </Stack>
        </Stack>
      </Form>
    </Formik>
  );
};

export default JobDetailsForm;
