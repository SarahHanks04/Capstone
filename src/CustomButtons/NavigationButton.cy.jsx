import React from "react";
import { mount } from "cypress/react18";
import NavigationButton from "./NavigationButton";

describe("NavigationButton component", () => {
  it("should toggle between Feedback and Complaints forms on button click", () => {
    const setActiveForm = cy.stub();
    const activeForm = "feedback";
    mount(
      <NavigationButton activeForm={activeForm} setActiveForm={setActiveForm} />
    );
    // To Check For The Two Buttons
    cy.get("button").should("have.length", 2);
  });

  it("applies correct styles for active and inactive buttons", () => {
    cy.mount(
      <NavigationButton activeForm="feedback" setActiveForm={cy.stub()} />
    );

    // Check the "Feedback" button for active styles
    cy.get("button").first().should("have.class", "feedback");
    cy.get("button").first().should("not.have.class", "complaint");

    // Check The "Complaints" Button For Inactive Styles
    cy.get("button").last().should("have.class", "complaint");
  });

  it("updates active form and applies correct styles on button click", () => {
    const setActiveForm = cy.stub();
    cy.mount(
      <NavigationButton activeForm="feedback" setActiveForm={setActiveForm} />
    );

    // Click The Complaints button
    cy.get("button").last().click();
    cy.wrap(setActiveForm).should("have.been.calledOnceWith", "complaint");

    // Check That Styles Change After Clicking
    cy.mount(
      <NavigationButton activeForm="complaint" setActiveForm={setActiveForm} />
    );
    cy.get("button").first().should("have.class", "text-[#FDBF17] bg-white");
    cy.get("button").last().should("have.class", "text-white bg-[#FDBF17]");
  });

  it("calls setActiveForm with correct arguments when buttons are clicked", () => {
    const setActiveForm = cy.stub();
    cy.mount(
      <NavigationButton activeForm="feedback" setActiveForm={setActiveForm} />
    );

    // Click The "Feedback" Button
    cy.get("button").first().click();
    cy.wrap(setActiveForm).should("have.been.calledWith", "feedback");

    // Click The "Complaints" Button
    cy.get("button").last().click();
    cy.wrap(setActiveForm).should("have.been.calledWith", "complaint");
  });
});
