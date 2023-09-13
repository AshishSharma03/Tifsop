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

interface FormValues {
  RequisitionTitle: string;
  Opening: string;
  gender: string;
  urgency: string;
}

const ErrorStyle = {
  color: "red",
  paddingTop: "5px",
  fontSize: "12px",
};
const RequisitionDetailsForm = () => {
  const { setRequisition } = useDraftDataContext();
  const { setActiveId } = useTabContext();
  const validationSchema = Yup.object({
    RequisitionTitle: Yup.string().required("Requisition title is required"),
    Opening: Yup.number()
      .typeError("Opening must be a valid number")
      .required("Enter a valid number"),
    gender: Yup.string().required("Gender is required"),
    urgency: Yup.string().required("Urgency is required"),
  });

  const initialValues: FormValues = {
    RequisitionTitle: "",
    Opening: "",
    gender: "",
    urgency: "",
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
    localStorage.setItem("RequisitionDetailsValue", JSON.stringify(values));
    setActiveId(1);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    setRequisition(formik.values);
  });

  useEffect(() => {
    const storedValues = localStorage.getItem("RequisitionDetailsValue");
    if (storedValues) {
      const parsedValues: FormValues = JSON.parse(storedValues);
      formik.setValues(parsedValues);
    }
  }, []);

  return (
    <div>
      <Formik
        initialValues={formik.values}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="RequisitionTitle">
                Requisition Title
              </FormLabel>
              <Input
                type="text"
                id="RequisitionTitle"
                placeholder="Enter Requisition Title"
                {...formik.getFieldProps("RequisitionTitle")}
              />
              <ErrorMessage
                style={ErrorStyle}
                name="RequisitionTitle"
                component="div"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="Opening">Number of Opening</FormLabel>
              <Input
                type="text"
                id="Opening"
                placeholder="Enter Number of Opening"
                {...formik.getFieldProps("Opening")}
              />
              <ErrorMessage style={ErrorStyle} name="Opening" component="div" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <Select id="gender" {...formik.getFieldProps("gender")}>
                <option value="" style={{ color: "gray" }}>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Non Binary">Non Binary</option>
              </Select>
              <ErrorMessage style={ErrorStyle} name="gender" component="div" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="urgency">Urgency</FormLabel>
              <Select id="urgency" {...formik.getFieldProps("urgency")}>
                <option value="">Select urgency</option>
                <option value="Urgent">Urgent</option>
                <option value="Immediate joining">Immediate joining</option>
                <option value="Relaxed">Relaxed</option>
              </Select>
              <ErrorMessage style={ErrorStyle} name="urgency" component="div" />
            </FormControl>
            <Stack direction={"row"} paddingTop={"20px"}>
              <Box flex={1} />

              <Button type="submit" colorScheme="teal">
                Next
              </Button>
            </Stack>
          </Stack>
        </Form>
      </Formik>
    </div>
  );
};

export default RequisitionDetailsForm;
