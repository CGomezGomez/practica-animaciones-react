import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCorrect = styled.span`
	color: green;
`;

const StyledIncorrect = styled.span`
	color: red;
`;

const FinalScoreContainer = styled.div`
	margin-bottom: 2rem;
`;

const QuestionContainer = styled(motion.div)`

	text-align: center;
`;

const StyledH2 = styled.h2`
	
	text-align: center;
	margin-bottom: 1rem;
	
`;

const QuestionText = styled(motion.p)`
    font-weight: 800;
`;

const AnswerText = styled(motion.p)`
   margin-bottom: 0.8rem;
`;


export { StyledCorrect, StyledIncorrect, FinalScoreContainer , QuestionContainer , QuestionText , AnswerText , StyledH2 };