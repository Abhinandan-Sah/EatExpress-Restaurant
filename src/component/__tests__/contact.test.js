import { render, screen } from "@testing-library/react";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", ()=>{
    test("Should load contact us component", () => {
        // Every test case contains 3 things
        // 1. Render something
        render(<Contact />);
    
        // 2. Query 
        const heading =screen.getByRole("heading");
    
        // 3. Assertion
        expect(heading).toBeInTheDocument();
    });
    test("Should load button inside Contact component", () => {
        // Every test case contains 3 things
        // 1. Render something
        render(<Contact />);
    
        // 2. Query 
        const button =screen.getByRole("button");
    
        // 3. Assertion
        expect(button).toBeInTheDocument("button");
    });
    it("Should load input name inside Contact component", () => {
        // Every test case contains 3 things
        // 1. Render something
        render(<Contact />);
    
        // 2. Query 
        const inputName =screen.getByPlaceholderText("Name");
    
        // 3. Assertion
        expect(inputName).toBeInTheDocument();
    });
    // testing multiple input Boxes
    it("Should load 2 input boxes inside Contact component", () => {
        // Every test case contains 3 things
        // 1. Render something
        render(<Contact />);
    
        // 2. Query 
        const inputBoxes =screen.getAllByRole("textbox");
        // console.log(inputBoxes.length);
        // 3. Assertion
        // expect(inputBoxes).toBeInTheDocument();
    });
});

