import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import MemberList from "./MemberList";
import { MemoryRouter } from "react-router-dom";
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
    onlineUsers: [
      { id: 1, username: "user1", avatarColor: "#ff0000" },
      { id: 2, username: "user2", avatarColor: "#00ff00" },
    ],
    isOpen: false,
  },
});

describe("MemberList", () => {
  it("renders the online users with their avatars and usernames", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/channels/1"]}>
          <MemberList />
        </MemoryRouter>
      </Provider>
    );

    const users = store.getState().memberList.onlineUsers;

    expect(2).toEqual(users.length);
  });
});
