import styled from "styled-components";
import { motion } from "framer-motion"


const StyledContainer = styled(motion.div)`

    margin: 3rem auto;
    width: 60%;
    min-height: 450px;
    background-color: #FFE6C7;
    text-align: center;
    
`;

const StyledTitle = styled(motion.h2)`

    padding: 3rem ;

`;

const StyledContainerQuestion = styled(motion.div)`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5rem;
    
`;

const StyledQuestion = styled(motion.button)`

    margin: auto;
    width: 70%;
    padding: 2rem 4rem ;
    border: none;
    border-radius: 3%;
    border: 2px solid black;
    background: #FFA559;

    cursor: pointer;


`




export {StyledContainer, StyledTitle, StyledContainerQuestion, StyledQuestion };