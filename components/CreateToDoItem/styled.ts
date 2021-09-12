import styled from "styled-components";

export const CreateToDoItemStyle = styled.div`
  text-align: right;
  margin: 0 0 2em;

  .input {
    min-width: 50%;
  }

  button {
    margin: 0 0 0 .5em !important;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      flex: 1 1 35%;
      text-align: left;
    }

    .right {
      flex: 1 1 65%;
      text-align: right
    }
  }
`;
