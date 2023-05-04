import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import Message from "./Message";
import '@testing-library/jest-dom'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Message", () => {
    const user = {
      id: 1,
      username: "testuser",
      avatarColor: "#ffffff",
    };
  
    const message = {
      id: 1,
      content: "test message",
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
    };
  
    it("renders without crashing", () => {
      const store = mockStore(initialState);
      render(
        <Provider store={store}>
          <Message message={message} />
        </Provider>
      );
      const messageElement = screen.getByText(message.content);
      expect(messageElement).toBeInTheDocument();
    });
  
    it("displays the username of the message sender", () => {
      const store = mockStore(initialState);
      render(
        <Provider store={store}>
          <Message message={message} />
        </Provider>
      );
      const usernameElement = screen.getByText(user.username);
      expect(usernameElement).toBeInTheDocument();
    });
  
    it("displays the timestamp of the message", () => {
        const store = mockStore(initialState);
        render(
          <Provider store={store}>
            <Message message={message} />
          </Provider>
        );
        const timestampElement = screen.getByText("1 year ago"); 
        expect(timestampElement).toBeInTheDocument();
    });
      
    it("displays the content of the message", () => {
      const store = mockStore(initialState);
      render(
        <Provider store={store}>
          <Message message={message} />
        </Provider>
      );
      const contentElement = screen.getByText(message.content);
      expect(contentElement).toBeInTheDocument();
    });
    it("displays the delete button for the message sender and displays the edit button for the message sender when hovered over", () => {
        const store = mockStore(initialState);
        render(
          <Provider store={store}>
            <Message message={message} data-testid="message" />
          </Provider>
        );
      
        const messageContainer = screen.getByTestId("message");
        fireEvent.mouseEnter(messageContainer);
      
        const deleteButton = screen.getByLabelText("Delete");
        const editButton = screen.getByLabelText("Edit");
      
        expect(deleteButton).toBeInTheDocument();
        expect(editButton).toBeInTheDocument();
      
    });
      
});