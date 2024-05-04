import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ rollDice, currentDice }) => {
  //   const [currentDice, setCurrentDice] = useState(1);

  //   const generateRandomNumber = (min, max) => {
  //     console.log(Math.floor(Math.random() * (max - min) + min));
  //     return Math.floor(Math.random() * (max - min) + min);
  //   };

  //   const rollDice = () => {
  //     const randomNumber = generateRandomNumber(1, 7);
  //     setCurrentDice((prev) => randomNumber);
  //   };
  return (
    <DiceContainer>
      <div className="Dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .Dice {
    cursor: pointer;
  }

  p {
    font-size: 23px;
  }
`;
