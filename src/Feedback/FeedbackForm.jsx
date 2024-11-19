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
    <main className="pt-[2.5rem] w-full">
      <div className="relative w-11/12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl z-10">
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              handleSubmit(values, actions, setModalIsOpen)
            }
          >
            {({ values, touched, errors, isSubmitting }) => (
              <Form className="space-y-6">
                {/* Question 1 */}
                <section>
                  <label htmlFor="question1" className="font-semibold text-xl">
                    Question 1
                  </label>
                  <p className="text-gray-600 pt-2">
                    How satisfied are you after using our services?
                  </p>
                  <div className="flex justify-between mt-4">
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
                        <span className="mt-1 text-[12px] text-gray-700">
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
                </section>

                {/* Question 2 */}
                <section>
                  <label htmlFor="question2" className="font-semibold text-xl">
                    Question 2
                  </label>
                  <p className="text-gray-600 pt-2">
                    How would you rate our service?
                  </p>
                  <div className="flex justify-between mt-2">
                    {["😞", "😐", "😊", "😄", "😍"].map((emoji, index) => (
                      <label key={index} className="flex flex-col items-center">
                        <Field
                          type="radio"
                          name="emojis"
                          value={`${index + 1}`}
                          className="hidden"
                        />
                        <span
                          className={`text-[32px] flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300 ${
                            touched.emojis && errors.emojis ? "" : ""
                          } ${
                            values.emojis === `${index + 1}`
                              ? "transform scale-150"
                              : ""
                          }`}
                        >
                          {emoji}
                        </span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="emojis" component={TextError} />
                </section>

                {/* Question 3 */}
                <section>
                  <label htmlFor="question3" className="font-semibold text-xl">
                    Question 3
                  </label>
                  <p className="text-gray-600 pt-3">
                    What are your reasons for not wanting to use our services?
                  </p>
                  <div className="space-y-4 pt-5">
                    {[
                      "Lack of quiet workspaces",
                      "Wi-Fi connectivity issues",
                      "Limited networking opportunities",
                      "High cost",
                      "Insufficient amenities",
                    ].map((option, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <Field
                          type="checkbox"
                          name="reasons"
                          value={option}
                          className="form-checkbox"
                        />
                        <span>{option}</span>
                      </div>
                    ))}
                  </div>
                  <ErrorMessage name="reasons" component={TextError} />
                </section>

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
        <p>
          Thank you for your feedback! <br /> We value your input and will use
          it to help improve our services.
        </p>
      </CustomModal>
    </main>
  );
};

export default FeedbackForm;
