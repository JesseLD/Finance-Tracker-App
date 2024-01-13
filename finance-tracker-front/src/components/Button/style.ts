import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: 2px solid #007aff;
  background-color: #007aff;
  color: white;
  padding: 12px 8px;
  border-radius: 4px;
  width: 80%;
  outline: none;
  transition: all ease 150ms 0s;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
    color: #007aff;
    border-color: #007aff;
    background-color: transparent;
  }
`;
