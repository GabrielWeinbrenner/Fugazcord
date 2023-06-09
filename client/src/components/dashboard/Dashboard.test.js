import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import Dashboard from "./Dashboard";
import { MemoryRouter, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe("Dashboard", () => {
  it("renders the Sidebar, Header, ChatArea and MemberList components", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/channels/1"]}>
            <Dashboard />
        </MemoryRouter>
      </Provider>
    );

    const sidebar = screen.getByTestId("sidebar");
    const header = screen.getByTestId("header");
    const chatArea = screen.getByTestId("chat-area");
    const memberList = screen.getByTestId("member-list");

    expect(sidebar).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(chatArea).toBeInTheDocument();
    expect(memberList).toBeInTheDocument();
  });
});
