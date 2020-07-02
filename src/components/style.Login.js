import style from 'styled-components';

export default style.div`
  height: calc(100vh - 30px);
  width: calc(100vw - 30px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-wrap: wrap;
    width: min-content;
    justify-content: center;
  }

  input {
    margin-bottom: 15%;
    transition: transform .25s ease-in-out;
  }

  input: focus {
    transform: scale(1.25) translateY(-15px);
    transition: transform .25s ease-in-out;
  }

  button {
    width: 50%;
    border-radius: 5px;
    border: black solid 1px;
    transition: transform .25s ease-in-out;
  }

  button: hover {
    cursor: pointer;
    transform: scale(1.25);
    transition: transform .25s ease-in-out;
    box-shadow: 4px 4px 5px 0px black;
  }

`;
