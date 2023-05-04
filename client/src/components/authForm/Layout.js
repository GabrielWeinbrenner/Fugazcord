import React from "react";

import styled from "styled-components";
import { FaAddressBook } from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #292929;
  min-height: 100vh;
  width: 100%;
  color: #fff;
  justify-content: center;

  a {
    color: #fff;
    font-size: 13px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Container = styled.div`
  padding: 28px;
  background-color: #212121;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 550px) {
    padding: 16px;
    min-height: 100vh;
    min-width: 100vw;
    border-radius: 0;
    justify-content: flex-start;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  color: #fff;
  margin-bottom: 20px;

  svg {
    color: #fff;
  }
`;

const Heading = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
`;

const Layout = ({ heading, children }) => {
  return (
    <Wrapper className="disable-select">
      <Container>
        <Header>
          < FaAddressBook />
        </Header>
        <Heading>{heading}</Heading>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
