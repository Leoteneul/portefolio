import styled from "styled-components"
import { colors } from "../../style/utils"
import '../../anims/animation'
function TabContainer ({animTwo}){
    
    let className = 'animBarOff'
    let className2 = ''
    if(animTwo){
        className = 'animBarOn'
        className2 = 'animGraphOpacity'
    }

    function handleHover(){


        const bars = document.querySelectorAll('.itemContainer')
        console.log(bars)
        bars.forEach(bar => {
            const text = bar.querySelector('p')
            console.log(text)
            bar.addEventListener('mouseover', function(){
                
                    
                    text.style.display = 'flex'
                
                
            
                console.log('hey')
        
            })

            bar.addEventListener('mouseout', function(){
                    
                text.style.display = 'none'
                    
            })

            

        })


    }
    handleHover()
    return (
       <TabContainere>
        <Title>Mes Compétences</Title>
        <GraphWrapper className={className2}>

            <Xline></Xline>
            <Yline>
                <YlineParam>90%</YlineParam>
                <YlineParam>60%</YlineParam>
                <YlineParam>30%</YlineParam>
                <YlineParam last>0%</YlineParam>
            </Yline>

        </GraphWrapper>

        <TechnosWrapper className={className}>

            <ItemContainer className="itemContainer">
                <ItemText>duhuzhduhquzduhq</ItemText>
                <TechnoBar>React</TechnoBar>
            </ItemContainer>

            <ItemContainer className="itemContainer">
                <ItemText>duhuzhduhquzduhq</ItemText>
                <TechnoBar>HTML/CSS</TechnoBar>
            </ItemContainer>

            <ItemContainer className="itemContainer">
                <ItemText>duhuzhduhquzduhq</ItemText>
                <TechnoBar>JavaScript</TechnoBar>
            </ItemContainer>

            <ItemContainer className="itemContainer">
                <ItemText>duhuzhduhquzduhq</ItemText>
                <TechnoBar>ThreeJs</TechnoBar>
            </ItemContainer>

            <ItemContainer className="itemContainer">
                <ItemText>duhuzhduhquzduhq</ItemText>
                <TechnoBar>Express / Mongo</TechnoBar>
            </ItemContainer>

            <ItemContainer className="itemContainer">
                <ItemText>duhuzhduhquzduhq</ItemText>
                <TechnoBar>Sass</TechnoBar>
            </ItemContainer>

            <ItemContainer className="itemContainer">
                <ItemText>duhuzhduhquzduhq</ItemText>
                <TechnoBar>Photoshop</TechnoBar>
            </ItemContainer>
        
            
            
        </TechnosWrapper>




       </TabContainere> 
    )
  

}

const TabContainere = styled.div`

height: 85%;
width: 80%;
margin-bottom: 50px;
position: absolute;
background-color: ${colors.primary};
z-index: 30;
box-shadow: 2px 1px 24px 12px rgba(0,0,0,0.74);

`
const Title = styled.h2`


position: absolute;
color: ${colors.quaternary};
top: 0;
right: 100px;
font-size: 35px;
width: 30%;
height: 15%;
text-shadow:  7px 1px 2px #090A0F;
border: 1px solid ${colors.quaternary};
border-top: none;
border-radius: 0 0 20px 20px;
box-shadow: inset 0px -11px 15px 0px #080913;
display: flex;
justify-content: center;
align-items: center;



`
// AFFICHAGE DE LA GRILLE + INFOS %

const GraphWrapper = styled.div`

position: relative;
width: 100%;
height: 100%;
overflow: hidden;

opacity: 0;
`

const Xline = styled.div`

position: absolute;
bottom: 0;
left: 50px;
height: 12%;
width: 92%;
border-top: 1px solid white;

`

const Yline = styled.div`

position: absolute;
bottom: 50px;
left: 100px;
height: 90%;
width: 100%;
border-left: 1px solid white;
display: flex;
flex-direction: column;
justify-content: flex-end;
`

const YlineParam = styled.p`

display: flex;
align-items: flex-end;
margin-left: 30px;

border-bottom: 0.5px solid white;
color: ${colors.secondary};
height: 30%;
width: 80%;

${props => props.last && `
	border-bottom: none;
  `}
`


// CONTENT GRAPHER

const TechnosWrapper = styled.div`

    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    padding-right: 50px;
    z-index: 80;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    overflow: hidden;

`

const ItemContainer = styled.div`

display: flex;
align-items: flex-end;
cursor: pointer;
:nth-child(1){ height: 60%; }
    :nth-child(2){ height: 80%; }
    :nth-child(3){ height: 80%; }
    :nth-child(4){ height: 32%; }
    :nth-child(5){ height: 60%; }
    :nth-child(6){ height: 32%; }
    :nth-child(7){ height: 80%; }
`

const ItemText = styled.p`

background-color: ${colors.quaternary};
color: white;
margin-right: 5px;
top: 200px;
padding: 30px;
height: 200px;
width: 400px;
display: none;
box-shadow: 4px -6px 0px 4px #06141a;

`

const TechnoBar = styled.h3`

    text-orientation: mixed;
    writing-mode: vertical-lr;
    height: 100%;
    font-size: 30px;
    color: white;
    padding-top: 20px;
    width: 70px;
    background-color: ${colors.quaternary};
    box-shadow: 12px 9px 0px 9px #06141a;
    margin-right: 80px;
    

`






export default TabContainer