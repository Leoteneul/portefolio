import styled from "styled-components"
import GlobalStyle, { colors } from "../../style/utils"

function Title (){


    return (
        <TitleContenor>
            <GlobalStyle />


            <TitleWrapper>
            <h1>LÉO TENEUL</h1>
            <h2>Développeur Web</h2>
            </TitleWrapper>

            <InformationWrapper>
                <img src="" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed cumque, error delectus distinctio nesciunt nemo ullam doloremque libero sint adipisci animi atque temporibus iusto architecto tenetur in perspiciatis rerum omnis!</p>
            </InformationWrapper>
            

            


            <TitleBackground>
                <BackgroundSquare active={true} yellow />
                <BackgroundSquare active={true} red />
                <BackgroundSquare active={true} blu />
                <BackgroundSquare active={true} green />

            </TitleBackground>
        </TitleContenor>
    )
  

}


const TitleContenor = styled.div`

height: 100vh;
width: 100%;
padding: 100px;
color: white;
display: flex;
flex-direction: column;
justify-content: center;





`

const TitleWrapper = styled.div`

width: 30%;
padding: 30px;
z-index: 10;
margin-bottom: 50px;
background-color: ${colors.primary};
box-shadow: 2px 1px 24px 12px rgba(0,0,0,0.74);


`

const InformationWrapper = styled.div`

height: 60%;
padding: 30px;
z-index: 10;
background-color: ${colors.primary};
box-shadow: 2px 1px 24px 12px rgba(0,0,0,0.74);


`

const TitleBackground = styled.div`

height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 5;
display: flex;


`

const BackgroundSquare = styled.div`

background-color: ${colors.primary};
height: 20%;
width: 20%;
box-shadow: inset 2px 1px 15px 5px #000000;


${props => props.yellow &&  `
background-color: ${colors};
height: 40%;
width: 50%;
` };
background: ${props => props.red &&  "red" };
background: ${props => props.blu &&  "blue" };
background: ${props => props.green &&  "green" };


${({ active }) =>
		active &&
		`
        opacity :1; 
  `}
`

export default Title

