import styled from "styled-components"
import { colors, screenSize } from "../../style/utils"
import testsite from "../../asset/testsite.png"


function ProjectOne ({ animThree }){

    let className = 'projectInfoOff'
    let className2 = 'imgDisplayOff'
    if(animThree){
        className = 'projectInfoOn'
        className2 = 'imgDisplayOn'
    }


    return (
        
            <ProjectWrapper>
                <ProjectInfo className={className}>
                    <h2>Projet 5: <br />ProjectFive</h2>
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
position: relative;

@media (max-width: ${screenSize.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

@media (max-width: ${screenSize.mobile}) {
    width: 100%;
    

}
`

const ProjectInfo = styled.div`

height: 70%;
width: 35%;
background-color: ${colors.primary};
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 50px;
box-shadow: 14px 0px 0px 14px #06141a;

@media (max-width: ${screenSize.tablet}) {
    width: 80%;
    margin-top: 50px;
}

@media (max-width: ${screenSize.mobile}) {
    width: 100%;
    padding-left: 80px;
    text-align: center;
    

}

`

const ImgContainer = styled.div`

width: 65%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
/* background-color: red; */
padding: 50px;
overflow-y: scroll;
::-webkit-scrollbar{
        display: none;
    }
@media (max-width: ${screenSize.tablet}) {
    width: 100%;
    
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;

    
}
@media (max-width: ${screenSize.mobile}) {
    height: 30%;
    width: 100%;
    /* margin-top: 50px; */
    padding: 0;

}

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

@media (max-width: ${screenSize.tablet}) {
    display: none;
}



`
const ProjetImg = styled.img`

max-height: 30%;
width: 40%;
:hover{
    transform: scale(1.5);
    box-shadow: 0px -11px 15px 0px black;
}

@media (max-width: ${screenSize.tablet}) {
    max-height: 100%;
    width: 100%;
    margin-bottom: 30px;

    :hover{
        transform: none;
        box-shadow: none;
    }
}

`

export default ProjectOne