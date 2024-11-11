import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CapstoneContext } from "../Context/CapstoneContext";
import TextError from "../Component/TextError";
import CustomModal from "../Component/CustomModal";
import {
  handleSubmit,
  initialValues,
  validationSchema,
} from "./FeedbackFormConfig";

const FeedbackForm = () => {
  const { saveFormData, modalIsOpen, setModalIsOpen } =
    useContext(CapstoneContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden relative pt-[2rem] pb-[2rem]">
      <div className="relative w-11/12 max-w-md z-10">
        {/* Rotating Background Div */}
        <div className="absolute inset-0 transform rotate-[-4deg] bg-[#FDBF17] rounded-xl z-10 h-[100%] w-[100%]" />

        {/* Form Container */}
        <div className="relative bg-white rotate-[2deg] p-8 rounded-xl shadow-lg z-20">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            The Bulb Africa Feedback
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              handleSubmit(values, actions, saveFormData, setModalIsOpen)
            }
          >
            {({ values, touched, errors, isSubmitting }) => (
              <Form className="space-y-6">
                {/* Question 1 */}
                <div>
                  <label className="font-semibold">Question 1</label>
                  <p className="text-gray-600">
                    How satisfied are you after using our services?
                  </p>
                  <div className="flex justify-between mt-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <label key={value} className="flex flex-col items-center">
                        <Field
                          type="radio"
                          name="satisfaction"
                          value={`${value}`}
                          className="hidden"
                        />
                        <span
                          className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer ${
                            errors.satisfaction && touched.satisfaction
                              ? "border-red-500"
                              : "border-gray-300"
                          } ${
                            values.satisfaction === `${value}`
                              ? "bg-orange-500 text-white"
                              : "bg-gray-200 text-gray-800"
                          }`}
                        >
                          {value}
                        </span>
                        <span className="mt-1 text-sm text-gray-700">
                          {value === 1
                            ? "Not satisfied"
                            : value === 5
                            ? "Very satisfied"
                            : ""}
                        </span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="satisfaction" component={TextError} />
                </div>

                {/* Question 2 */}
                <div>
                  <label className="font-semibold">Question 2</label>
                  <p className="text-gray-600">
                    How would you rate our service?
                  </p>
                  <div className="flex justify-between mt-2">
                    {["😞", "😐", "😊", "😄", "😍"].map((emoji, index) => (
                      <label key={index} className="flex flex-col items-center">
                        <Field
                          type="radio"
                          name="rating"
                          value={`${index + 1}`}
                          className="hidden"
                        />
                        <span
                          className={`text-[32px] flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 ${
                            touched.rating && errors.rating ? "" : ""
                          } ${
                            values.rating === `${index + 1}`
                              ? "transform scale-150"
                              : ""
                          }`}
                        >
                          {emoji}
                        </span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="rating" component={TextError} />
                </div>

                {/* Question 3 */}
                <div>
                  <label className="font-semibold">Question 3</label>
                  <p className="text-gray-600">
                    What are your reasons for not wanting to use our services?
                  </p>
                  <div className="space-y-2">
                    {[
                      "Don’t need it right now",
                      "Wasn't useful to me",
                      "Too expensive",
                    ].map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <Field
                          type="checkbox"
                          name={`reason${index}`}
                          value={option}
                          className="form-checkbox"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="reason" component={TextError} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-white bg-[#13162D] rounded-lg hover:bg-orange-600 focus:outline-none"
                >
                  Submit Feedback
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Success Modal */}
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        title="Feedback Submitted"
      >
        <p>Your feedback has been submitted successfully!</p>
      </CustomModal>
    </div>
  );
};

export default FeedbackForm;
