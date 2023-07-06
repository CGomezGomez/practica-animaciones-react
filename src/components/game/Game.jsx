import { v4 } from "uuid";
import { QUESTIONS } from "../../constants/questions";
import {  StyledContainer, StyledTitle, StyledQuestion, StyledContainerQuestion  } from "./styles";
import { useState } from "react";


const Game = () => {

   const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerClick = () => {

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

	return (
	<>
        
	
            <StyledContainer 
                initial={{ opacity: 0, scale: 0 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.5}}>
          
                <StyledTitle 
                 initial={{ opacity: 0, scale: 0 }} 
                 animate={{ opacity: 1, scale: 1 }} 
                 transition={{ duration: 1.5, delay : 1 }}
                >{QUESTIONS[currentQuestion].question}</StyledTitle>

                <StyledContainerQuestion>
                {QUESTIONS[currentQuestion].options.map((option, index) => (
                  <StyledQuestion 
                  initial={{ opacity: 0, scale: 0 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 1.5 , delay : index*0.3}}
                  key={v4()}
                  onClick={() => handleAnswerClick(index)}
                  >{option}</StyledQuestion>

                ))}
              </StyledContainerQuestion>
         
              
               
            </StyledContainer>
       
	</>
	);
};





export default Game;