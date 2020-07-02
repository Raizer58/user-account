import style from 'styled-components';

export default style.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw - 30px);
  margin: auto;
  max-width: 1024px;

  .user-info {
    display: flex;
    width: 100%;
    height: 50px;
    padding: 0% 3%;
    justify-content: space-between;
    background: darkcyan;
    align-items: center;
  }

  button {
    width: 10%;
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

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 3%;
  }

  .contact-from {
    margin-bottom: 0%;
  }

  .search-form p {
    width: 50%;
  }

  .search-form input {
    width: 45%;
  }

  .search-form button {
    margin: 0%;
    margin-left: 5%;
  }

  form p {
    display: flex;
    width: 50%;
    margin: 1.5%;
    text-align: center;
  }

  form p span {
    width: 25%;
    margin-right: 5%;
  }

  form p input {
    width: 70%;
  }

  form p input {
    transition: transform .25s ease-in-out;
    background: azure;
  }

  form p input: focus {
    transform: scale(1.1) translateY(-5px);
    transition: transform .25s ease-in-out;
    background: aquamarine;
  }

  form button {
    width: 20%;
    margin: 1.5%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
    margin: 0%;
    padding: 0%;
    border-radius: 10px;
  }

  ul li {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: black solid 1px;
    border-radius: 10px;
    box-sizing: border-box;
  }

  ul li:nth-child(4n+1) {
    background: darkcyan;
  }

  ul li:nth-child(4n+4) {
    background: darkcyan;
  }

  ul li:nth-child(4n+2) {
    background: darksalmon;
  }

  ul li:nth-child(4n+3) {
    background: darksalmon;
  }

  ul li p {
    width: 70%;
    display: flex;
    text-align: center;
    margin: 2% 0%;
  }

  ul li p .name{
    width: 40%;
  }

  ul li p .value{
    width: 60%;
  }

  ul button {
    margin-right: 7.5%;
    margin-bottom: 4%;
    width: 35%;
  }
`;
