import React, { useContext } from "react";
import Modal from "react-modal";
import DeskAtTheBulb from "../assets/DeskAtTheBulb.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CapstoneContext } from "../Context/CapstoneContext";
import TextError from "../Component/TextError";
import {
  handleSubmit,
  initialValues,
  validationSchema,
} from "../Complaints/ComplaintFormConfig";
import CustomModal from "../Component/CustomModal";

Modal.setAppElement("#root");

const ComplaintForm = () => {
  const { saveFormData, modalIsOpen, setModalIsOpen } =
    useContext(CapstoneContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden relative pt-[2rem] pb-[2rem]">
      <div className="relative w-11/12 max-w-md z-10">
        {/* Rotating Background Div */}
        <div
          className="absolute inset-0 transform rotate-[-4deg] bg-[#FDBF17] rounded-xl z-10 h-[100%] w-[100%]"
        ></div>

        {/* Form Container */}
        <div className="relative bg-white rotate-[2deg] p-8 rounded-xl shadow-lg z-20">
          <img src={DeskAtTheBulb} alt="Logo" className="w-[120px] mb-6" />
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Feedback & Complaints
            </h2>
          </div>

          <hr className="mb-10" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              handleSubmit(values, actions, saveFormData, setModalIsOpen)
            }
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email">Email Address</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className={`w-full p-3 border rounded-md ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>

                <div>
                  <label htmlFor="category">Complain Category</label>
                  <Field
                    as="select"
                    name="category"
                    className={`w-full p-3 border rounded-md ${
                      touched.category && errors.category
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a category</option>
                    <option value="service">Service</option>
                    <option value="product">Product</option>
                    <option value="support">Support</option>
                  </Field>
                  <ErrorMessage name="category" component={TextError} />
                </div>

                <div>
                  <label htmlFor="service">Service Used</label>
                  <Field
                    as="select"
                    name="service"
                    className={`w-full p-3 border rounded-md ${
                      touched.service && errors.service
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="internet">Internet</option>
                    <option value="mobile">Mobile</option>
                    <option value="tv">TV</option>
                  </Field>
                  <ErrorMessage name="service" component={TextError} />
                </div>

                <div>
                  <label htmlFor="complaint">Your Complaint</label>
                  <Field
                    as="textarea"
                    name="complaint"
                    placeholder="Please describe your complaint here..."
                    className={`w-full p-3 border rounded-md ${
                      touched.complaint && errors.complaint
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage name="complaint" component={TextError} />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-white bg-[#13162D] rounded-lg hover:bg-orange-600 focus:outline-none"
                >
                  Submit Complaint
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
        title="Complaint Submitted"
      >
        <p>Your complaint has been submitted successfully!</p>
      </CustomModal>
    </div>
  );
};

export default ComplaintForm;
