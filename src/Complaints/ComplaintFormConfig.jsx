// import * as Yup from "yup";

// export const initialValues = {
//   email: "",
//   category: "",
//   service: "",
//   complaint: "",
// };

// export const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid email address").required("Required"),
//   category: Yup.string().required("Please select a category"),
//   service: Yup.string().required("Please select a service"),
//   complaint: Yup.string().required("Complaint description is required"),
// });

// export const handleSubmit = (
//   values,
//   { resetForm },
//   saveFormData,
//   setModalIsOpen
// ) => {
//   saveFormData("complaints", values);
//   setModalIsOpen(true);
//   resetForm();
// };

// SECOND TRY WITH API

import * as Yup from "yup";
import axios from "axios";

export const initialValues = {
  email: "",
  category: "",
  service: "",
  complaint: "",
};

export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  category: Yup.string().required("Please select a category"),
  service: Yup.string().required("Please select a service"),
  complaint: Yup.string().required("Complaint description is required"),
});

export const handleSubmit = async (values, { resetForm }, setModalIsOpen) => {
  try {
    console.log("Submitting complaint:", values);
    await axios.post("http://localhost:4000/complaint", values);
    setModalIsOpen(true);
    resetForm();
  } catch (error) {
    console.error("Error submitting complaint:", error);
  }
};
