import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import WriteArea from "./WriteArea";
import * as ReactRedux from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({
  chat: {
    messages: {
      byId: {},
      allIds: [],
      loading: false,
    },
    typingUser: null,
  },
  channels: {
    byId: {
      1: { id: 1, name: "general" },
      2: { id: 2, name: "random" },
    },
    allIds: [1, 2],
    loading: false,
    active: 1,
  },
  session: {
    isAuthenticated: true,
    loading: false,
    user: {
      id: 1,
      username: "testuser",
      email: "testuser@example.com",
    },
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

describe("WriteArea", () => {
  it("renders the form", () => {
    render(
      <Provider store={store}>
        <WriteArea />
      </Provider>
    );
    expect(screen.getByPlaceholderText("Message #general")).toBeInTheDocument();
  });

  it("dispatches sendMessage when enter is pressed in the textarea", () => {
    const sendMessage = jest.fn();
    const stopTyping = jest.fn();
    const typing = jest.fn();
    const dispatch = jest.fn();
    jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(dispatch);
  
    render(
      <Provider store={store}>
        <WriteArea sendMessage={sendMessage} stopTyping={stopTyping} typing={typing} />
      </Provider>
    );
  
    fireEvent.keyUp(screen.getByRole("textbox"), {
      key: "Enter",
      code: 13,
      charCode: 13,
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: "chat/typing",
      payload: {
        id: 1,
        username: "testuser",
        email: 'testuser@example.com'
      },
    });
  });
});
