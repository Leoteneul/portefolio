import styled from "styled-components"
import { colors } from "../../style/utils"

function Slides (){


    return (
        <SlidesContenor>
            <h1>Slides</h1>
            <h2>DefaultSlides</h2>
        </SlidesContenor>
    )
  

}


const SlidesContenor = styled.div`

height: 100vh;
background-color: ${colors.primary};

`

export default Slides