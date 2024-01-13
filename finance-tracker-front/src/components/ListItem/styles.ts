import styled from "styled-components";
export const CategoryListItemStyle = styled.li`

  box-shadow:4px 4px 4px #00000011;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  transition: all ease 150ms;
  &:hover{
    cursor: pointer;
    transform: translateY(-4px);
  }
  .income{
    background-color: #1BDA45;
    color: white;
    font-size: 0.8em;
    padding: 4px 8px;
    border-radius: 16px;
    
  }
  .expense{
    background-color: #FA4141;
    color: white;
    font-size: 0.8em;
    padding: 4px 8px;
    border-radius: 16px;
    
  }
`