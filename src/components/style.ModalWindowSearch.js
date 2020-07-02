import style from 'styled-components';

export default style.div`
  position: fixed;
  top: 25vh;
  left: 25vw;
  height: 50vh;
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9); 
  z-index: 10;
  border: black solid 3px;
  border-radius: 25px;
  padding-top: 5vh;

  p {
    width: 100%;
    display: flex;
    text-align: center;
    margin: 0%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p:nth-child(2n+1) {
    background: darkcyan;
  }

  p:nth-child(2n+2) {
    background: darksalmon;
  }

  p .name{
    width: 40%;
  }

  p .value{
    width: 60%;
  }

  button {
    margin-bottom: 5%;
    width: 35%;
  }

`;
