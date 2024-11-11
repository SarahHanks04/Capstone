import * as Yup from "yup";

export const initialValues = {
  satisfaction: "",
  rating: "",
  reasons: [],
};

export const validationSchema = Yup.object({
  satisfaction: Yup.string().required("Required"),
  rating: Yup.string().required("Required"),
  reasons: Yup.array().min(1, "At least one reason is required"),
});

export const handleSubmit = (
  values,
  { resetForm },
  saveFormData,
  setModalIsOpen
) => {
  console.log("Feedback submitted", values);
  saveFormData(values);
  setModalIsOpen(true);
  resetForm();
};
