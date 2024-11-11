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
  console.log("Form submitted", values);
  saveFormData(values);
  setModalIsOpen(true);
  resetForm();
};
