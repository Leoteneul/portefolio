import styled from "styled-components"
import { colors } from "../../style/utils"
import waveDrop from '../../asset/waveDrop.png'
import '../../anims/animation.css'

function Technologies ({animOne}){
    
    
    let className2 = 'anim2'
    if(animOne){
        className2 = 'anim2-active'
    }

    let className3 = 'anim3'
    if(animOne){
        className3 = 'anim3-active'
    }

    return (
        <TechnologiesContenor>
            <TransiDiv className={className2}>
                <TransiDivContent className={className3}>

                    <Carre>a</Carre>
                </TransiDivContent>
            </TransiDiv>
            
            <h2>Toujours pareil</h2>
        </TechnologiesContenor>
    )
  

}

const Carre = styled.div`


height: 100%;
width: 100%;

background-color: ${colors.secondary};


`

const TechnologiesContenor = styled.div`

height: 100vh;
background-color: ${colors.primary};
overflow: hidden;
position: relative;

`

const TransiDiv = styled.div` 
    
    
    
    height: 40%;
    width: 100%;
    overflow: hidden;
    display: flex;
    
    


`

const TransiDivContent = styled.div`

height: 4000px;

width: 100%;
display: flex;
justify-content: flex-end;
align-items: flex-end;

`

export default Technologies
