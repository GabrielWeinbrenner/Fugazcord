import styled from "styled-components";

const Input = styled.input`
  background-color: var(--background-primary);
  font-size: 16px;
  padding: 12px;
  margin-bottom: 20px;
  height: 40px;
  width: 100%;
  border-radius: 0;
  border: none;
  border-bottom: 2px solid var(--brand);
  outline: none;
  color: var(--text-normal);
  transition: border-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-color: var(--interactive-active);
  }

  &::placeholder {
    color: var(--text-muted);
  }
`;

export default Input;
