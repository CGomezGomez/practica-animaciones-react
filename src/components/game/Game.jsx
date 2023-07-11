import { v4 } from "uuid";
import { QUESTIONS } from "../../constants/questions";
import {  StyledContainer, StyledTitle, StyledContainerQuestion, StyledCard  } from "./styles";
import { useState } from "react";
import Answer from '../answer/Answer';
import FinalScore from '../final-score/FinalScore';

const Game = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);

	const isLastQuestion = currentQuestion === QUESTIONS.length;

	if (isLastQuestion) {
  
		return (

			<StyledCard
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
			>
				    <FinalScore userAnswers={userAnswers} />;
        
			</StyledCard>
		);
	}


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

                  {QUESTIONS[currentQuestion].options.map((answer, index) => (
                    <Answer
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1.5 , delay : index*0.3}}
                    key={v4()}
                    index={index}
                    saveUserAnswer={() =>
                      saveUserAnswer(
                        answer,
                        currentQuestion,
                        setCurrentQuestion,
                        userAnswers,
                        setUserAnswers
                      )
                    }
                
                    >{answer}</Answer>

                  ))}

              </StyledContainerQuestion>

            </StyledContainer>
       
	</>
	);
};

const saveUserAnswer = (
	answer,
	currentQuestion,
	setCurrentQuestion,
	userAnswers,
	setUserAnswers
) => {
	setUserAnswers([...userAnswers, answer]);

	setCurrentQuestion(currentQuestion + 1);
};


export default Game;