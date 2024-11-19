// import * as Yup from "yup";

// export const initialValues = {
//   satisfaction: "",
//   emojis: "",
//   reasons: [],
// };

// export const validationSchema = Yup.object({
//   satisfaction: Yup.string().required("This field is required"),
//   emojis: Yup.string().required("This field is required"),
//   reasons: Yup.array().min(1, "At least one reason is required"),
// });

// export const handleSubmit = (
//   values,
//   { resetForm },
//   saveFormData,
//   setModalIsOpen
// ) => {
//   saveFormData("feedback", values);
//   setModalIsOpen(true);
//   resetForm();
// };

// SECOND TRY WITH API

import * as Yup from "yup";
import axios from "axios";

export const initialValues = {
  satisfaction: "",
  emojis: "",
  reasons: [],
};

export const validationSchema = Yup.object({
  satisfaction: Yup.string().required("This field is required"),
  emojis: Yup.string().required("This field is required"),
  reasons: Yup.array().min(1, "At least one reason is required"),
});

export const handleSubmit = async (values, { resetForm }, setModalIsOpen) => {
  try {
    await axios.post("http://localhost:3000/feedback", values); // Post to JSON Server
    setModalIsOpen(true);
    resetForm();
  } catch (error) {
    console.error("Error submitting feedback:", error);
  }
};
 // Log any errors here
//  export const handleFormSubmit = async (values, actions) => {
//     try {
//       await handleSubmit(values, actions, setModalIsOpen);
//     } catch (error) {
//       console.error("Error in form submission:", error);
//     }
//   };