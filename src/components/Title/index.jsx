import styled from "styled-components"
import GlobalStyle from "../../style/utils"
import  '../../anims/animation.css'
// import { useState } from "react"

import Wave from 'react-wavify'
import ppcv from '../../asset/ppcv.jpg'
import Links from "../Links"


function Title ({ animOne }){

    let className = 'displayWaveOn'
    if(animOne){
        className = 'displayWaveOff'
    }

    return (
        <TitleContenor>
            <GlobalStyle />
            <Links />
            {/* <Logo /> */}
            <TitleWrapper>
            <ProfilImg src={ppcv} alt="" />
                <Test>
                    <h1>LÉO TENEUL</h1>
                    <h2>Développeur Web</h2>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quam asperiores, perferendis culpa tenetur quo quia, laudantium recusandae obcaecati molestias 
                        dignissimos in, consectetur pariatur sit  quos  necessitatibus quibusdam optio aut.<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe quia atque rerum aliquam
                        ducimus quae amet blanditiis tenetur dolorum ad, laborum quam debitis distinctio quisquam, eum excepturi eaque accusamu</Text>

                    <div>
                        <button>HardSkills</button>
                        <button>Me Contacter</button>
                        
                    </div>

                </Test>

                
            

            
            
            </TitleWrapper>

            
            
            <Wavetwo fill="#e67920" options={{height:90, points: 20, speed: 0.2, amplitude: 40 }} className={className}>
                
            </Wavetwo>

            
            
           
            
       

            

            
        </TitleContenor>
    )
  

}


// Textes qui apparaissent devant


const TitleContenor = styled.div`

height: 100vh;
width: 100%;
padding: 100px;
color: white;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;
scroll-snap-align: center;

`
const Test = styled.div`
display: flex;
margin-left: 40px;
flex-direction: column;
`
const ProfilImg = styled.img`

height: 90%;
width: 30%;
object-fit: cover;
object-position: bottom;

`

const Text = styled.p`

margin-bottom: 30px;


`

const Wavetwo = styled(Wave)`

top: 0;
left: 0;
width: 100%;
height: 100%;
position: absolute;
box-shadow: inset 2px 1px 24px 12px rgba(0,0,0,0.74);

margin: 450px 0 0 400px;



path {
  
  stroke: #b64005;
  stroke-width:50px;
 
}

`

const TitleWrapper = styled.div`


display: flex;
height: 50%;
width: 60%;
justify-content: space-between;
margin-top: 50px;

/* box-shadow: 2px 1px 24px 12px rgba(0,0,0,0.74); */

`


export default Title

