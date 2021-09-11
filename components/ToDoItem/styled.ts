import styled from "styled-components";

export const ToDoItemStyle = styled.div`
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .text {
      flex: 1 1 auto;
      margin: 0 1em 0 0;

      .input {
        width: 100%;
      }
    }
  }

  span {
    display: inline-block;

    &.complete {
      text-decoration: line-through;
    }
  }

  .button {
    display: flex;
  }
`;
