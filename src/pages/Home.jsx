import styled from "styled-components"
import Technologies from "../components/Technologies"
import Title from "../components/Title"
import GlobalStyle, { colors } from "../style/utils"
import { useEffect, useState } from "react"
import { handleScroll } from "../anims/animation"
import Project from "../components/Project"
import Qualities from "../components/Qualities"
import Contact from "../components/Contact"

function Home (){

    const [animOne, setAnimOne] = useState(true)
    const [animTwo, setAnimTwo] = useState(false)
    const [animThree, setAnimThree] = useState(false)
    const [animFour, setAnimFour] = useState(false)
    const [animFive, setAnimFive] = useState(false)
    

    useEffect(() => {

        handleScroll(setAnimOne, setAnimTwo, setAnimThree, setAnimFour, setAnimFive)
    }, [])
    
    return(
        <HomeContenor>
            <GlobalStyle />

            <SlideContainer id="slideContainer">

            <Title animOne={animOne}/>
            <Technologies animOne={animOne} animTwo={animTwo}/>
            <Project animThree={animThree}/>
            <Qualities animFour={animFour}/>
            <Contact animFive={animFive}/>

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

