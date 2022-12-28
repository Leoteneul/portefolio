import styled from "styled-components"
import GlobalStyle, { screenSize } from "../../style/utils"
import  '../../anims/animation.css'
import Wave from 'react-wavify'
import ppcv from '../../asset/ppcv.jpg'
import Links from "../Links"


function Title ({ animOne }){

    let className = 'displayWaveOff'
    if(animOne){
        className = 'displayWaveOn'
    }

    return (
        <TitleContenor>
            <GlobalStyle />
            {/* <Links /> */}
            <TitleWrapper>
            
                <Test>
                <ProfilImg src={ppcv} alt="" />
                <Text>
                    <h1>LÉO TENEUL</h1>
                    <h2>Développeur Web</h2>
                    
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quam asperiores, perferendis culpa tenetur quo quia, laudantium recusandae obcaecati molestias 
                        dignissimos in, consectetur pariatur sit  quos  necessitatibus quibusdam optio aut.<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe quia atque rerum aliquam
                        ducimus quae amet blanditiis tenetur dolorum ad
                        , laborum quam debitis distinctio quisquam, eum excepturi eaque accusamudignissimos in, consectetur pariatur sit  quos  necessitatibus quibusdam optio aut.<br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe quia atque rerum aliquam
                        ducimus quae amet blanditiis tenetur dolorum ad
                        </Text>

                    
                        
                        
                    

                </Test>
                <Links />
            </TitleWrapper>
            <Wavetwo fill="#e67920" options={{height:90, points: 20, speed: 0.2, amplitude: 40 }} className={className} />

        </TitleContenor>
    )
  

}


// Textes qui apparaissent devant


const TitleContenor = styled.div`

height: 100vh;
width: 100%;
padding: 50px 100px 0 150px;

color: white;
display: flex;
flex-direction: column;
position: relative;
overflow: hidden;
scroll-snap-align: center;
/* background-color: yellow; */

@media (max-width: ${screenSize.tablet}) {
		padding: 0;
	}
@media (max-width: ${screenSize.mobile}) {
	height: fit-content;
    
}


`
const Test = styled.div`
display: flex;

/* flex-direction: column; */
width: 80%;
min-width: 800px;
/* background-color: green; */

@media (max-width: ${screenSize.tablet}) {
	width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-width: 0;
}
@media (max-width: ${screenSize.mobile}) {
	height: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0;
}
`
const ProfilImg = styled.img`

height: 400px;
width: 300px;
object-fit: cover;
object-position: bottom;

@media (max-width: ${screenSize.tablet}) {
        height: 300px;
        width: 300px;   
        align-items: center;
        flex-direction: column;
        object-position: center;
        
	}

`

const Text = styled.div`

margin:  0 0 0 30px;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: ${screenSize.tablet}) {
       
        margin-left: 0;
        margin-top: 20px;
        text-align: center;
	}

`

const Wavetwo = styled(Wave)`

top: 0;
left: 0;
width: 100%;
height: 100%;
position: absolute;
box-shadow: inset 2px 1px 24px 12px rgba(0,0,0,0.74);

margin: 450px 0 0 400px;

@media (max-width: ${screenSize.tablet}) {
		margin: 600px 0 0 550px;
	}

@media (max-width: ${screenSize.mobile}) {
    
	height: 300px;
    position: static;
    margin: 100px 0 0 0px;
    overflow: hidden;
}


path {
  
  stroke: #b64005;
  stroke-width:50px;

  @media (max-width: ${screenSize.mobile}) {
    
  stroke-width: 20px;
  

}
 
}

`

const TitleWrapper = styled.div`

display: flex;
flex-direction: column;
/* height: 50%; */
width: 80%;

margin-top: 50px;
/* background-color: green; */

@media (max-width: ${screenSize.tablet}) {
		width: 100%;
        height: 70%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;
        padding: 20px;
	}
@media (max-width: ${screenSize.mobile}) {
    padding: none;
    height: max-content;
    justify-content: flex-start;
}
`

export default Title

