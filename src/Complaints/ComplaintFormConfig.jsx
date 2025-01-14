// ORIGINAL CODE

// import * as Yup from "yup";
// import axios from "axios";
// import { format } from "date-fns";

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

// export const handleSubmit = async (values, { resetForm }, setModalIsOpen) => {
//   try {
//     const currentDate = format(new Date(), "MMMM do, yyyy");
//     const data = { ...values, date: currentDate };
//     console.log("Submitting complaint:", data);

//     await axios.post("http://localhost:4000/complaint", data);
//     setModalIsOpen(true);
//     resetForm();
//   } catch (error) {
//     console.error("Error submitting complaint:", error);
//   }
// };

// REFACTORED CODE

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
    const currentDate = new Date().toISOString(); 
    const data = { ...values, date: currentDate };
    console.log("Submitting complaint:", data);

    await axios.post("http://localhost:4000/complaint", data);
    setModalIsOpen(true);
    resetForm();
  } catch (error) {
    console.error("Error submitting complaint:", error);
  }
};
