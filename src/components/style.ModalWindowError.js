import style from 'styled-components';

export default style.div`
  position: fixed;
  top: 35vh;
  left: 25vw;
  height: 30vh;
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9); 
  z-index: 10;
  border: black solid 3px;
  border-radius: 25px;
  padding: 5vh 0vh;

  p {
    width: 100%;
    text-align: center;
    margin-top: 0%;
    margin-bottom: 3%;
  }
`;
