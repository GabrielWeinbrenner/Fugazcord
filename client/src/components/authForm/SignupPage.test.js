import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { render, screen, fireEvent } from "@testing-library/react";
import SignupPage from "./SignupPage";
import * as ReactRedux from "react-redux";
import '@testing-library/jest-dom'
const mockStore = configureMockStore();

const store = mockStore({
  chat: {
    messages: { byId: {}, allIds: [], loading: true },
    typingUser: null,
  },
  channels: {
    byId: {},
    allIds: [],
    loading: true,
    active: null,
  },
  session: {
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null,
  },
  sidebar: {
    isOpen: false,
  },
  memberList: {
    onlineUsers: [],
    isOpen: false,
  },
});

describe("SignupPage", () => {
  it("renders the form", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignupPage />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
  });

  it("dispatches signup when the form is submitted", () => {
    const dispatch = jest.fn();
    jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(dispatch);
  
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignupPage />
        </MemoryRouter>
      </Provider>
    );
  
    const usernameInput = screen.getByRole("textbox", { name: /username/i });
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    
    const passwordInput = screen.getByLabelText("Password");
    fireEvent.change(passwordInput, { target: { value: "password" } });
    
    fireEvent.submit(screen.getByRole("button", { name: "Register" }), { target: { username: { value: "testuser" }, password: { value: "password" } } });  
    expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});
