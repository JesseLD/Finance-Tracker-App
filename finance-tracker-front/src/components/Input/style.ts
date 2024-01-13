import styled from "styled-components";

export const InputStyle = styled.input`
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  width: 80%;
  outline: none;
  transition: all ease 150ms 0s;
  &:hover {
    border-color: #007aff;
    border-width: 2px;
    &::placeholder {
      color: #007aff;
    }
  }
  &:focus {
    border-color: #007aff;
  }
`;
