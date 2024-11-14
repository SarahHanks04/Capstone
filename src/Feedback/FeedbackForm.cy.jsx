import React from "react";
import FeedbackForm from "./FeedbackForm";
import { CapstoneContext } from "../Context/CapstoneContext";

describe("Test FeedbackForm Component", () => {
  beforeEach(() => {
    const saveFormData = cy.stub();
    const setModalIsOpen = cy.stub();
    cy.mount(
      <CapstoneContext.Provider
        value={{ saveFormData, modalIsOpen: false, setModalIsOpen }}
      >
        <FeedbackForm />
      </CapstoneContext.Provider>
    );
  });

  it("renders the form", () => {
    cy.get("main").should("exist");
    cy.get('button[type="submit"]').should("contain.text", "Submit Feedback");
  });

  it("displays validation errors when required fields are empty and form is submitted", () => {
    cy.get('button[type="submit"]').click();

    // Check if each error message is displayed
    cy.get('[data-testid="error"]').should(
      "contain.text",
      "This field is required"
    );
  });

  it("allows selection of satisfaction rating in Question 1", () => {
    cy.get('input[name="satisfaction"][value="3"]').check({ force: true });
    cy.get('input[name="satisfaction"][value="3"]').should("be.checked");
    cy.get("span")
      .contains("3")
      .should("have.class", "bg-orange-500 text-white");
  });

  it("allows single selection of emoji in Question 2", () => {
    cy.get('input[name="emojis"][value="2"]').check({ force: true });
    cy.get('input[name="emojis"][value="2"]').should("be.checked");
    cy.get("span").contains("😐").should("have.class", "transform scale-150");

    // Ensure only one emoji is selected at a time
    cy.get('input[name="emojis"][value="4"]').check({ force: true });
    cy.get('input[name="emojis"][value="4"]').should("be.checked");
    cy.get("span").contains("😄").should("have.class", "transform scale-150");
    cy.get("span")
      .contains("😐")
      .should("not.have.class", "transform scale-150");
  });

  it("allows multiple selections in Question 3", () => {
    cy.get('input[name="reasons"][value="Wi-Fi connectivity issues"]').check({
      force: true,
    });
    cy.get('input[name="reasons"][value="High cost"]').check({ force: true });

    cy.get('input[name="reasons"][value="Wi-Fi connectivity issues"]').should(
      "be.checked"
    );
    cy.get('input[name="reasons"][value="High cost"]').should("be.checked");
  });

  it("calls handleSubmit on form submission with valid data", () => {
    // Fill out the form with valid data
    cy.get('input[name="satisfaction"][value="5"]').check({ force: true });
    cy.get('input[name="emojis"][value="3"]').check({ force: true });
    cy.get('input[name="reasons"][value="High cost"]').check({ force: true });

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Check if saveFormData and setModalIsOpen functions are called
    cy.wrap(saveFormData).should("have.been.calledOnce");
    cy.wrap(setModalIsOpen).should("have.been.calledOnce");
  });
});
