import styled from 'styled-components';

export const Container = styled.div`
  svg {
    width: 40px;
    height: 40px;
    margin: 20px 5px;
    cursor: pointer;
    transition: background 1s;
    transition: color 1s;
  }

  svg:hover {
    background: white;
    color: black;
    border-radius: 50px;
  }
`;

export const Hours = styled.div`
  border: dashed 2.5px white;
  width: 60vw;
  display: flex;
  justify-content: center;
  font-size: 10rem;
  border-radius: 15px;
`;

export const BoxAlarms = styled.div`
  display: flex;
  margin: 20px 5px;

  div div {
    font-size: 1.7rem;
    margin: 0 10px;
    letter-spacing: 2.5px;
  }

  span {
    font-size: 14px;
    margin: 0 10px;
  }
`;

export const Hour = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 17px;
  outline: none;
  margin: 0 5px 15px 0;
`;

export const Minute = styled.input`
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 17px;
  outline: none;
  margin: 0 0 15px 5px;
`;

export const TitleAlarm = styled.input`
  width: 114px;
  height: 40px;
  text-align: center;
  font-size: 17px;
  outline: none;
  margin: 0 5px 15px 0;
`;

export const BodyAlarm = styled.input`
  width: 114px;
  height: 40px;
  text-align: center;
  font-size: 17px;
  outline: none;
  margin: 0 5px 15px 0;
`;