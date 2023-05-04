import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter, Route } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import Dashboard from "./Dashboard";
import { setActiveChannel } from "../../reducers/channelsReducer";
import { loadMessages } from "../../reducers/chatReducer";
import '@testing-library/jest-dom'
import thunk from "redux-thunk";
import * as ReactRedux from "react-redux";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("Dashboard", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
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
  });

  it("renders the Sidebar, Header, ChatArea and MemberList components", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/channels/1"]}>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("complementary")).toBeInTheDocument();
  });

  it("dispatches setActiveChannel and loadMessages when mounted", () => {
    const channelId = 1;
    const expectedActions = [setActiveChannel(channelId), loadMessages(channelId)];

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/channels/1"]}>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    );

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("shows the MemberList when the toggle button is clicked", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/channels/1"]}>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    );

    const toggleButton = screen.getByLabelText("Toggle member list");
    fireEvent.click(toggleButton);

    expect(screen.getByRole("complementary")).toHaveClass("isOpen");
  });

  it("shows the MemberList when the window is resized to desktop", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/channels/1"]}>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    );

    const memberList = screen.getByRole("complementary");
    expect(memberList).toHaveClass("isClosed");

    // change the window width to desktop size
    global.innerWidth = 1024;
    fireEvent(window, new Event("resize"));

    expect(memberList).not.toHaveClass("isClosed");
  });
});
