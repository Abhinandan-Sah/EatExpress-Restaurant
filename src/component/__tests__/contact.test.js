import { render } from "@testing-library/react";
import Contact from "../Contact.js";

test("Should load contact us component", () => {
    render(<Contact />);

    const heading =screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});