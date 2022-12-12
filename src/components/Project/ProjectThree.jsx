import styled from "styled-components"
import { colors } from "../../style/utils"
import testsite from "../../asset/testsite.png"


function ProjectThree ({ animThree }){

    let className = 'projectInfoOff'
    let className2 = 'imgDisplayOff'
    if(animThree){
        className = 'projectInfoOn'
        className2 = 'imgDisplayOn'
    }


    return (
        
            <ProjectWrapper>
                <ProjectInfo className={className}>
                    <h2>Projet 3: <br />ProjectThree</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id molestias
                         nesciunt maxime hic dolores, voluptate suscipit esse quos eius,
                          nostrum commodi quasi consectetur fuga aperiam ab temporibus, quaerat deserunt.
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non id molestias
                         nesciunt maxime hic dolores, voluptate suscipit esse quos eius,
                          nostrum commodi quasi consectetur fuga aperiam ab temporibus, quaerat deserunt.
                    </p>
                    <a href="https://github.com/Leoteneul">https://github.com/Leoteneul</a>
                </ProjectInfo>
                <ImgContainer>
                
                <ProjetImg src={testsite} alt="" className={className2}/>
                <Title>Mes Projets</Title>
                <ProjetImg src={testsite} alt="" className={className2}/>
                <ProjetImg src={testsite} alt="" className={className2}/>
                <ProjetImg src={testsite} alt="" className={className2}/>
                <ProjetImg src={testsite} alt="" className={className2}/>
                
                </ImgContainer>
                
            </ProjectWrapper>
        
    )
  

}




const ProjectWrapper = styled.div`


height: 100%;
width: 90%;
display: flex;
justify-content: space-around;
align-items: center;
background-color: ${colors.primary};
box-shadow: inset 5px 0px 10px 5px #06141a;
`

const ProjectInfo = styled.div`

height: 70%;
width: 30%;
background-color: ${colors.primary};
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 50px;
box-shadow: 14px 0px 0px 14px #06141a;

`

const ImgContainer = styled.div`

width: 70%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 50px;

`

const Title = styled.h2`

width: 40%;
height: 10%;
display: flex;
justify-content: center;
align-items: center;
font-size: 35px;
text-shadow:  7px 1px 2px #090A0F;
color: ${colors.quaternary};
align-self: center;
border: 1px solid ${colors.quaternary};
border-radius: 20px;
box-shadow: inset 0px -11px 15px 0px #090A0F;

`
const ProjetImg = styled.img`

height: 30%;
width: 40%;
:hover{
    transform: scale(1.5);
    box-shadow: 0px -11px 15px 0px black;
}

`

export default ProjectThree