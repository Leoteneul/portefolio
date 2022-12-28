import styled from "styled-components"
import { colors, screenSize } from "../../style/utils"
import '../../anims/animation.css'
import TagCloud from './TagCloud';



function Qualities ({ animFour }){

  let className = 'neonFlashOff'
  let className2 = 'neonFlash2Off'
  let className3 = 'neonFlash3Off'
  
  if(animFour){
      className = 'neonFlashOn'
      className2 = 'neonFlash2On'
      className3 = 'neonFlash3On'
  }
  
    return (
        <QualitiesContenor id='softskills'>
          <BackLight className={className3}/>
          <NeonWrapper>
            <Neon className={className} />
            <Neon className={className} center />
            <Neon className={className} />

          </NeonWrapper>

            <ContentWrapper>
              <TagCloudWrapper>
                <AbsoluteCircle className={className2}/>
                <TagCloud />
             </TagCloudWrapper>
             <TextContenor>
              <h2>A propos de moi</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Autem amet beatae harum dignissimos fuga natus in facere vel veniam! Voluptas, 
                mollitia corrupti reprehenderit error tempora odit deserunt sapiente harum iure!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Autem amet beatae harum dignissimos fuga natus in facere vel veniam! Voluptas, 
                mollitia corrupti reprehenderit error tempora odit deserunt sapiente harum iure!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Autem amet beatae harum dignissimos fuga natus in facere vel veniam! Voluptas, 
                mollitia corrupti reprehenderit error tempora odit deserunt sapiente harum iure!
               
                
                 <br />
                <span>La Réalité tu la crées en partie</span>
                </p>
             </TextContenor>
             </ContentWrapper>

        </QualitiesContenor>
    )
  

}

const QualitiesContenor = styled.div`

height: 100vh;
background-color: ${colors.primary};
scroll-snap-align: center;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;

@media (max-width: ${screenSize.mobile}) {
	
  height: fit-content;
}



`
const BackLight = styled.div`

position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: rgba(230, 121, 32);
opacity: 0.05;
`
const NeonWrapper = styled.div`

width: 80%;
height: 3%;
z-index: 90;
display: flex;
justify-content: space-around;

@media (max-width: ${screenSize.mobile}) {
	
 height: 20px;
}
`

const Neon = styled.div`

width: 15%;
height: 100%;
border-radius: 0 0 10px 10px;
border: 2px solid white;
border-top: none;
background-color: ${colors.secondary};
box-shadow: inset 0px -5px 15px 2px rgba(255,255,255,0.7), 0px 5px 0px 5px #E67920, 0px -5px 40px 23px rgba(230,121,32,0.7);


${props => props.center && `
	width: 60%;
  `}


`

const ContentWrapper = styled.div`

display: flex;
align-items: center;
justify-content: space-around;
height: 95%;
/* background-color: red; */

@media (max-width: ${screenSize.tablet}) {
	
    flex-direction: column;
}

`

const TagCloudWrapper = styled.div`

  background-color: rgba(55, 137, 160, 0.1);
  box-shadow: inset 25px 25px 19px 10px rgba(255, 255, 255, 0.041), inset 0px 0px 24px 19px rgba(0, 0, 0, 0.1), inset 25px 25px 22px -11px rgba(255, 255, 255, 0.1), 0px 0px 30px 19px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  border-radius: 50%;
  transform: rotate3d(1, 1, 1, 5deg);
  font-size: 25px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.887);
  overflow: hidden;
  height: 700px;
  width: 700px;

  @media (max-width: ${screenSize.tablet}) {
    margin-top: 30px;
  height: 500px;
  width: 500px;
}
@media (max-width: ${screenSize.mobile}) {
	margin-top: 50px;
  height: 300px;
  width: 300px;
}


`

const AbsoluteCircle = styled.div`

height: 60%;
width: 80%;
border-radius: 50%;
position: absolute;
top: 60px;
left: 0;
opacity: 0.1;
z-index: -2;
transform: rotate(-40deg);
border-top: 15px solid ${colors.secondary};

@media (max-width: ${screenSize.mobile}) {
	top: 20px;
}
`

const TextContenor = styled.div`

width: 30%;
height: 80%;
z-index: 40;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: ${screenSize.tablet}) {
	
  height: 30%;
  width: 80%;
}
@media (max-width: ${screenSize.tablet}) {
	
  margin: 50px 0 50px 0;
}
`



export default Qualities