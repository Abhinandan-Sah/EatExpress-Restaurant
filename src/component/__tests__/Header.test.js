import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import Header from "../Header.js"
import appStore from "../../utils/appStore.js"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should render Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument(); 
});

it("Should render Header Component with 0 Cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText(/0 items/);

    expect(cartItem).toBeInTheDocument();
});

it("Should render Header Component with a Cart item", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/items/);

    expect(cartItems).toBeInTheDocument();
});

it("Should Change Login button to Logout button on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});
// it("Should Change Logout button to Login button on click", () => {
//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//             <Header />
//         </Provider>
//         </BrowserRouter>
//     );

//     const logoutButton = screen.getByRole("button", {name: "Logout"});
//     fireEvent.click(logoutButton);

//     const loginButton = screen.getByRole("button", {name: "Login"});

//     expect(loginButton).toBeInTheDocument();
// });
