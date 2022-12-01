import styled from "styled-components"
import Technologies from "../components/Technologies"
import Title from "../components/Title"
import GlobalStyle, { colors } from "../style/utils"

function Home (){

    return(
        <HomeContenor>
            <GlobalStyle />
            <Title />
            <Technologies />
        </HomeContenor>
    )
}

export default Home

const HomeContenor = styled.div`


background-color: ${colors.primary};

`