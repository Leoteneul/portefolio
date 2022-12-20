import styled from "styled-components"
import { colors } from "../../style/utils"
import { useEffect } from "react";
import '../../anims/animation.css'
const TagCloud = require('TagCloud');



function Qualities ({ animFour }){

  let className = 'neonFlashOff'
  let className2 = 'neonFlash2Off'
  let className3 = 'neonFlash3Off'
  
  if(animFour){
      className = 'neonFlashOn'
      className2 = 'neonFlash2On'
      className3 = 'neonFlash3On'
  }

    
        // Animation settings for Text Cloud
        useEffect(() => {
          return () => {
            
            const container = ".tagcloud";
            const texts = [
              "HTML",
              ".",
              "CSS",
              ".",
              "SASS",
              ".",
              "JavaScript",
              ".",
              "React",
              ".",
              "NodeJS",
              ".",
              "Babel",
              ".",
              "Jquery",
              ".",
              "ES6",
              ".",
              "GIT",
              ".",
              "GITHUB",
              ".",
             


              
            ];
      
            const options = {
              radius: 350,
              maxSpeed: "fast",
              initSpeed: "normal",
              keep: true,
            };
      
            TagCloud(container, texts, options);
          };
        }, []);

    
    return (
        <QualitiesContenor>
          <Test className={className3}/>
          <NeonWrapper>
            <Neon className={className} />
            <Neon className={className} center />
            <Neon className={className} />

          </NeonWrapper>

            <ContentWrapper>
                <div className="text-shpere">
                <span className="tagcloud"></span>
                {/* <AbsoluteCircle className={className2}/> */}
                
             </div>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Autem amet beatae harum dignissimos fuga natus in facere vel veniam! Voluptas, 
                mollitia corrupti reprehenderit error tempora odit deserunt sapiente harum iure! <br />
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


`
const Test = styled.div`

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
z-index:90;
display: flex;
justify-content: space-around;
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

`
const AbsoluteCircle = styled.div`

height: 60%;
width: 80%;
border-radius: 50%;
position: absolute;
top: 60px;
left: 0;
opacity: 0.1;
z-index: 90;
transform: rotate(-40deg);
border-top: 15px solid ${colors.secondary};
`

const TextContenor = styled.div`

width: 30%;
height: 80%;
z-index: 40;
display: flex;
flex-direction: column;
justify-content: center;
`




export default Qualities