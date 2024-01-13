import styled from "styled-components";
export const Container = styled.div`
  width: 80%;
  height: 100vh;
  padding: 24px 0;
  margin: auto;
  display: flex;
  flex-direction: column;

  form{
    margin: 32px 0;
    display: flex;
    gap: 24px;
  }
  .empty{
    color: #aaa;
  }

  .incomes-wrapper,.expenses-wrapper{
    border: 1px solid #eee;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 4px 4px 4px #00000011;
  }
  .category-list{
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

`