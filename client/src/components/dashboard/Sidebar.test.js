import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import Sidebar from "./Sidebar";
import { MemoryRouter, Route } from "react-router-dom";
import '@testing-library/jest-dom'
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Sidebar", () => {
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

  it("renders the ServerList and ChannelList components", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/channels/1"]}>
            <Sidebar />
        </MemoryRouter>
      </Provider>
    );
    const serverList = screen.getByTestId("server-list");
    const channelList = screen.getByTestId("channel-list");
    expect(serverList).toBeInTheDocument();
    expect(channelList).toBeInTheDocument();
  });
});
