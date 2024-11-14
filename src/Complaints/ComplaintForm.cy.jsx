// import React from "react";
// import ComplaintForm from "./ComplaintForm";
// import { CapstoneContext } from "../Context/CapstoneContext";

// describe("Test ComplaintForm Component", () => {
//   const saveFormData = cy.stub();
//   const setModalIsOpen = cy.stub();

//   beforeEach(() => {
//     cy.mount(
//       <CapstoneContext.Provider
//         value={{ saveFormData, modalIsOpen: false, setModalIsOpen }}
//       >
//         <ComplaintForm />
//       </CapstoneContext.Provider>
//     );
//   });

//   it("renders the form correctly", () => {
//     cy.get("main").should("exist");
//     cy.get('button[type="submit"]').should("contain.text", "Submit Complaint");
//   });

//   it("displays validation errors when required fields are empty and form is submitted", () => {
//     cy.get('button[type="submit"]').click();

//     // Assert each error message is displayed
//     cy.get('[data-testid="email-error"]').should(
//       "contain.text",
//       "This field is required"
//     );
//     cy.get('[data-testid="category-error"]').should(
//       "contain.text",
//       "This field is required"
//     );
//     cy.get('[data-testid="service-error"]').should(
//       "contain.text",
//       "This field is required"
//     );
//     cy.get('[data-testid="complaint-error"]').should(
//       "contain.text",
//       "This field is required"
//     );
//   });
// });

import React from "react";
import ComplaintForm from "./ComplaintForm";
import { CapstoneContext } from "../Context/CapstoneContext";

// Mock the Modal component for testing
// jest.mock("react-modal", () => (props) => <div>{props.children}</div>);

describe("Test ComplaintForm Component", () => {
  const saveFormData = cy.stub();
  const setModalIsOpen = cy.stub();

  beforeEach(() => {
    cy.mount(
      <CapstoneContext.Provider
        value={{ saveFormData, modalIsOpen: false, setModalIsOpen }}
      >
        <ComplaintForm />
      </CapstoneContext.Provider>
    );
  });

  it("renders the form correctly", () => {
    cy.get("main").should("exist");
    cy.get('button[type="submit"]').should("contain.text", "Submit Complaint");
  });

  it("displays validation errors when required fields are empty and form is submitted", () => {
    cy.get('button[type="submit"]').click();

    // Assert each error message is displayed
    cy.get('[data-testid="email-error"]').should(
      "contain.text",
      "This field is required"
    );
    cy.get('[data-testid="category-error"]').should(
      "contain.text",
      "This field is required"
    );
    cy.get('[data-testid="service-error"]').should(
      "contain.text",
      "This field is required"
    );
    cy.get('[data-testid="complaint-error"]').should(
      "contain.text",
      "This field is required"
    );
  });
});
