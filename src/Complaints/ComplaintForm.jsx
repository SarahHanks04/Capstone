import React, { useContext } from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CapstoneContext } from "../Context/CapstoneContext";
import TextError from "../Component/TextError";
import {
  handleSubmit,
  initialValues,
  validationSchema,
} from "./ComplaintFormConfig";
import CustomModal from "../Component/CustomModal";

Modal.setAppElement("#root");

const ComplaintForm = () => {
  const { saveFormData, modalIsOpen, setModalIsOpen } =
    useContext(CapstoneContext);

  return (
    <main className="pt-[2.2rem] w-full">
      <section className="relative w-11/12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl z-10">
        <div>
          <hr className="mb-6" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) =>
              handleSubmit(values, actions, setModalIsOpen)
            }
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email" className="text-[18px] font-medium">
                    Email Address
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className={`w-full p-3 mt-2 border rounded-md focus:ring-0 focus:outline-none focus:border-[#FDBF17] ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  <ErrorMessage name="email" component={TextError} />
                </div>

                <div>
                  <label htmlFor="category" className="text-[18px] font-medium">
                    Complain Category
                  </label>
                  <Field
                    as="select"
                    name="category"
                    className={`w-full p-3 border mt-2 rounded-md ${
                      touched.category && errors.category
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="service">Service</option>
                    <option value="product">Product</option>
                    <option value="support">Support</option>
                  </Field>
                  <ErrorMessage name="category" component={TextError} />
                </div>

                <div>
                  <label htmlFor="service" className="text-[18px] font-medium">
                    Service Used
                  </label>
                  <Field
                    as="select"
                    name="service"
                    className={`w-full p-3 border mt-2 rounded-md ${
                      touched.service && errors.service
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="internet">Internet</option>
                    <option value="workspace">Workspace Rental</option>
                    <option value="meeting-room">Meeting Room Access</option>
                  </Field>
                  <ErrorMessage name="service" component={TextError} />
                </div>

                <div>
                  <label
                    htmlFor="complaint"
                    className="text-[18px] font-medium"
                  >
                    Your Complaint
                  </label>
                  <Field
                    as="textarea"
                    name="complaint"
                    placeholder="Please describe your complaint here..."
                    className={`w-full p-3 border mt-2 rounded-md focus:ring-0 focus:outline-none focus:border-[#FDBF17] ${
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
      </section>

      {/* Success Modal */}
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        title="Complaint Submitted"
      >
        <p>
          Your complaint has been successfully submitted! <br />
          We appreciate your concern and are committed to resolving any issues
          as quickly as possible.
        </p>
      </CustomModal>
    </main>
  );
};

export default ComplaintForm;
