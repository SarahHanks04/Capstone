import React from "react";
import { mount } from "cypress/react";
import CustomModal from "./CustomModal";


describe("CustomModal Component", () => {
  it("renders correctly when open", () => {
    // Mount the component with required props
    const title = "Test Modal";
    const onRequestClose = cy.stub();

    mount(
      <CustomModal isOpen={true} onRequestClose={onRequestClose} title={title}>
        <p>Modal content goes here</p>
      </CustomModal>
    );

    // Check if modal is visible
    cy.get(".ReactModal__Content").should("be.visible");
    cy.get("h2").contains(title).should("exist");
    cy.get("p").contains("Modal content goes here").should("exist");

    // Close modal by clicking the close button
    cy.get("button")
      .contains("X")
      .click()
      .then(() => {
        expect(onRequestClose).to.have.been.calledOnce;
      });
  });

  it("does not render when isOpen is false", () => {
    mount(
      <CustomModal
        isOpen={false}
        onRequestClose={() => {}}
        title="Hidden Modal"
      >
        <p>Hidden content</p>
      </CustomModal>
    );

    // Check if modal is not rendered when isOpen is false
    cy.get(".ReactModal__Content").should("not.exist");
  });
});
