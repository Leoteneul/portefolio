import styled from "styled-components"
import { colors } from "../../style/utils"
import TagCloud from "TagCloud";
import { useEffect } from "react";
import '../../anims/animation.css'



function Qualities (){

    
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
            {/* <AbsoluteCircle></AbsoluteCircle> */}
            <div className="text-shpere">
                <span className="tagcloud"></span>
                
             </div>
             <TextContenor>

             </TextContenor>

        </QualitiesContenor>
    )
  

}

const QualitiesContenor = styled.div`

height: 100vh;
background-color: ${colors.primary};
scroll-snap-align: center;
position: relative;
display: flex;
align-items: flex-end;
justify-content: space-around;
overflow: hidden;
padding-bottom: 50px;

`

// const AbsoluteCircle = styled.div`

// height: 4%;
// width: 100%;
// background-color: ${colors.secondary};
// position: absolute;
// top: 0;
// left: 0;
// z-index: 90;
// box-shadow: 0px 29px 50px 13px rgba(230, 120, 30, 0.5);



// `

const TextContenor = styled.div`

width: 30%;
height: 80%;
background-color: ${colors.primary};
/* box-shadow:  0px 0px 30px 19px rgba(0, 0, 0, 0.2); */
background-color: rgba(55, 137, 160, 0.1);



`




export default Qualities