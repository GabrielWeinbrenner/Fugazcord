import styled from "styled-components";

const Select = styled.select`
  margin-top: 6px;
  margin-bottom: 12px;
  padding: 10px 8px 8px 12px;
  background-color: var(--background-secondary);
  border: 1px solid var(--background-secondary-alt);
  color: var(--text-normal);
  font-size: 14px;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:focus {
    outline: none;
  }
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`;

export default Select;
