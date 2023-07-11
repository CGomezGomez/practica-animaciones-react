
import { QUESTIONS } from '../../constants/questions';
import { AnswerText, FinalScoreContainer, QuestionContainer, QuestionText, StyledCorrect, StyledIncorrect , StyledH2} from './styles';

const FinalScore = ({ userAnswers }) => {
	return (

	  <FinalScoreContainer>
		<StyledH2>FINAL RESULT</StyledH2>
  
		<div>
		  {QUESTIONS.map((question, index) => (
			<QuestionContainer key={question.id}>
			  <QuestionText
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: (index + 3) * 0.1 }}
			  >
				{question.question}
			  </QuestionText>
			  <AnswerText
				layout
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: (index + 5) * 0.3 }}
			  >
				{compareAnswers(question.correctAnswer, userAnswers[index])}
			  </AnswerText>
			</QuestionContainer>
		  ))}
		</div>
	  </FinalScoreContainer>
	);
  };

const compareAnswers = (correctAnswer, userAnswer) => {
	if (correctAnswer === userAnswer) {
		return (
			<span>
				<span>{correctAnswer}</span> -
				<StyledCorrect> {userAnswer}</StyledCorrect>
			</span>
		);
	} else {
		return (
			<span>
				<span>{correctAnswer}</span> -
				<StyledIncorrect> {userAnswer}</StyledIncorrect>
			</span>
		);
	}
};

export default FinalScore;