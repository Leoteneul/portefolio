import styled from "styled-components"
import { colors } from "../../style/utils"
import ProjectTwo from "./ProjectTwo"
import { useState } from "react"
import ProjectOne from "./ProjectOne"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownLong, faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import ProjectThree from "./ProjectThree"
import ProjectFour from "./ProjectFour"
import ProjectFive from "./ProjectFive"
import ProjectSix from "./ProjectSix"



function Project ({animThree}){
    const [count, setCount] = useState(1)

    if(count === 0){

        setCount(1)
    }

    if(count > 6 ){

        setCount(6)
    }





    return (
        <ProjectContenor>
            <ChoiceContainer>

            <Icon icon={faArrowUpLong} onClick={() => setCount(count - 1)}/>
            <Icon icon={faArrowDownLong} onClick={() => setCount(count + 1)}/>
            
            </ChoiceContainer>
            {count === 1 ? (<ProjectOne animThree={animThree}/>) : null }
            {count === 2 ? (<ProjectTwo animThree={animThree}/>) : null }
            {count === 3 ? (<ProjectThree animThree={animThree}/>) : null }
            {count === 4 ? (<ProjectFour animThree={animThree}/>) : null }
            {count === 5 ? (<ProjectFive animThree={animThree}/>) : null }
            {count === 6 ? (<ProjectSix animThree={animThree}/>) : null }
        </ProjectContenor>
    )
  

}


const ProjectContenor = styled.div`

height: 100vh;
background-color: ${colors.primary};
scroll-snap-align: center;
display: flex;
justify-content: flex-end;
align-items: center;
overflow: hidden;
`
const ChoiceContainer = styled.div`

    height: 30%;
    width: 5%;
    color: white;
    font-size: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: aliceblue; */

`

const Icon = styled(FontAwesomeIcon)`


cursor: pointer;
color: ${colors.quaternary};

:hover{
    transform: scale(1.2);
}



`


export default Project