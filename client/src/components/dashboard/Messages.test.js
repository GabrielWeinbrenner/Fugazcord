import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Messages from "./Messages";
import '@testing-library/jest-dom'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Messages", () => {
  const user = {
    id: 1,
    username: "testuser",
    avatarColor: "#ffffff",
  };

  const message1 = {
    id: 1,
    content: "test message 1",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: null,
    user,
  };

  const message2 = {
    id: 2,
    content: "test message 2",
    createdAt: "2022-01-01T00:00:00.000Z",
    updatedAt: null,
    user,
  };

  const activeChannel = {
    id: 1,
    name: "test channel",
  };

  const initialState = {
    session: {
      isAuthenticated: true,
      loading: false,
      user,
      error: null,
    },
    channels: {
      loading: false,
      active: activeChannel.id,
      byId: {
        [activeChannel.id]: activeChannel,
      },
    },
    chat: {
      messages: {
        byId: {
          [message1.id]: message1,
        },
        allIds: [message1.id],
      },
    },
  };

  it("renders without crashing", () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Messages />
      </Provider>
    );
    const primaryHeading = screen.getByText(`Welcome to #${activeChannel.name}!`);
    expect(primaryHeading).toBeInTheDocument();
  });

  it("displays the messages", () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Messages />
      </Provider>
    );
    const messageElement = screen.getByText(message1.content);
    expect(messageElement).toBeInTheDocument();
  });
});
