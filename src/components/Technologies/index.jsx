import styled from "styled-components"
import { colors } from "../../style/utils"
import wave from '../../asset/wave.png'
import '../../anims/animation.css'
import TabContainer from "./TabContainer"

function Technologies ({animOne, animTwo}){
    
    
    let className2 = 'waveFlowOn'
    if(animOne){
        className2 = 'waveFlowOff'
    }


    return (
        <TechnologiesContenor>
            
            <TransiAbso>
                <TransiImg src={wave}></TransiImg>
                <MidleDiv />
                <TransiImg right src={wave}></TransiImg>
            </TransiAbso>

            <TransiDiv className={className2}/>
            
            <TabContainer animTwo={animTwo}></TabContainer>
        </TechnologiesContenor>
    )
  

}

const TechnologiesContenor = styled.div`

height: 100vh;

overflow: hidden;
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
scroll-snap-align: center;

`

const TransiImg = styled.img` 
    
    height: 100%;
    width: 30%;
    object-fit: cover;

    ${props => props.right && `
	transform: scaleX(-1);
  `}
`
const MidleDiv = styled.div`

    width: 100%;
    background-color: ${colors.primary};
    



`
const TransiAbso = styled.div`
    width: 100%;
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    display: flex;
    
    
`

const TransiDiv = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: ${colors.secondary};


`



export default Technologies
