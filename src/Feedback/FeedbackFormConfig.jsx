// ORIGINAL CODE

// import * as Yup from "yup";
// import axios from "axios";
// import { format } from "date-fns";

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

// export const handleSubmit = async (values, { resetForm }, setModalIsOpen) => {
//   try {
//     const currentDate = format(new Date(), "MMMM do, yyyy");
//     const data = { ...values, date: currentDate };
//     console.log("Submitting feedback:", data);

//     await axios.post("http://localhost:4000/feedback", data);
//     setModalIsOpen(true);
//     resetForm();
//   } catch (error) {
//     console.error("Error submitting feedback:", error);
//   }
// };

// REFACTORED CODE

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
    const currentDate = new Date().toISOString(); 
    const data = { ...values, date: currentDate };
    console.log("Submitting feedback:", data);

    await axios.post("http://localhost:4000/feedback", data);
    setModalIsOpen(true);
    resetForm();
  } catch (error) {
    console.error("Error submitting feedback:", error);
  }
};
