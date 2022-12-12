import styled from "styled-components"
import Technologies from "../components/Technologies"
import Title from "../components/Title"
import GlobalStyle, { colors } from "../style/utils"
import { useEffect, useState } from "react"
import { handleScroll } from "../anims/animation"
import Slides from "../components/Slides"
import Project from "../components/Project"
import ProjectTwo from "../components/Project/ProjectTwo"

function Home (){

    const [animOne, setAnimOne] = useState(false)
    const [animTwo, setAnimTwo] = useState(false)
    const [animThree, setAnimThree] = useState(false)
    

    useEffect(() => {

        handleScroll(setAnimOne, setAnimTwo, setAnimThree)
    }, [])
    
    return(
        <HomeContenor>
            <GlobalStyle />

            <SlideContainer id="slideContainer">
            <Title animOne={animOne}/>
            <Technologies animOne={animOne} animTwo={animTwo}/>
            <Project animThree={animThree}/>
            <Slides />
            <Slides />
            </SlideContainer>
            
            
            
        </HomeContenor>
    )
}

export default Home

const HomeContenor = styled.div`


background-color: ${colors.primary};

`

const SlideContainer = styled.div`

height: 100vh;
overflow-y: scroll;
scroll-snap-type: y proximity;


`

