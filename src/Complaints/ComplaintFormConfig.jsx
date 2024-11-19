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
//   console.log(values);
//   saveFormData(values);
//   setModalIsOpen(true);
//   resetForm();
// };




// SECOND TRY


import * as Yup from "yup";

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

export const handleSubmit = (
  values,
  { resetForm },
  saveFormData,
  setModalIsOpen
) => {
  saveFormData("complaints", values);
  setModalIsOpen(true);
  resetForm();
};




// THIRD TRY

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
//   actions,
//   saveFormData,
//   setModalIsOpen
// ) => {
//   saveFormData("complaints", values);
//   actions.setSubmitting(false)
//   setModalIsOpen(true);
//   resetForm();
// };