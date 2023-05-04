import styled from "styled-components";

const SubmitButton = styled.button.attrs(() => ({ type: "submit" }))`
  background-color: var(--background-secondary);
  border: none;
  border-radius: 0;
  padding: 16px;
  margin: 16px 0 12px 0;
  color: var(--text-normal);
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.2em;

  &:hover {
    background-color: var(--brand);
    cursor: pointer;
  }
`;

export default SubmitButton;
