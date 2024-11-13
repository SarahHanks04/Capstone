import * as Yup from "yup";

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

export const handleSubmit = (
  values,
  { resetForm },
  saveFormData,
  setModalIsOpen
) => {
  saveFormData(values);
  setModalIsOpen(true);
  resetForm();
};
