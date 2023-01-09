import styled from 'styled-components'
import { colors, screenSize } from '../../style/utils'

function ProjectOne({ animThree }) {
	let className = 'projectInfoOff'
	let className2 = 'imgDisplayOff'

	if (animThree) {
		className = 'projectInfoOn'
		className2 = 'imgDisplayOn'
	}

	return (
		<ProjectWrapper>
			<ProjectInfo className={className}>
				<h2>
					Projet 1: <br />
					<span>Booki</span>
				</h2>
				<p>
					Premier projet OpenClassrooms intégration d’un site à partir d’une maquette
					en utilisant uniquement <strong>HTML/CSS.</strong> <br />
					<br /> J’ai pu découvrir le fonctionnement de la structure HTML/CSS et les
					adapter à <strong>différentes tailles d’écran</strong>, le fonctionnement
					de la structure formatrice OpenClassrooms ainsi que de{' '}
					<strong> la méthode agile</strong> comprenant (Analyse du cahier des
					charges, Conception de plans à partir de maquette, Conception
					architecturale ) et également la qualité des livrables à rendre.
				</p>
				<a href="https://github.com/Leoteneul/P1">
					https://github.com/Leoteneul/P1
				</a>
			</ProjectInfo>
			<ImgContainer>
                <Title>Mes Projets</Title>

				<ProjetImg
					src="images/projets/P1/img_1.png"
					alt=""
					className={className2}
				/>
				<ProjetImg
					src="images/projets/P1/img_2.png"
					alt=""
					className={className2}
				/>
				<ProjetImg
					src="images/projets/P1/img_3.png"
					alt=""
					className={className2}
				/>
				<ProjetImg
					src="images/projets/P1/img_4.png"
					alt=""
					className={className2}
				/>
				<ProjetImg
					src="images/projets/P1/img_5.png"
					alt=""
					className={className2}
				/>
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
// Toute la partie texte
const ProjectInfo = styled.div`
	width: 35%;
	min-width: 600px;
	background-color: ${colors.primary};
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: 50px;
	box-shadow: 14px 0px 0px 14px #06141a;

	@media (max-width: ${screenSize.tablet}) {
		width: 100%;

		max-height: 70%;
	}

	@media (max-width: ${screenSize.mobile}) {
		width: 100%;
		padding-left: 80px;
		text-align: center;
		min-width: 0;
	}
`
// Toute la partie Image
const ImgContainer = styled.div`
	width: 65%;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 50px;
	overflow-y: scroll;
	::-webkit-scrollbar {
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
		padding: 0;
	}
`

const Title = styled.h2`
	width: 450px;
	height: 10%;
    min-width: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 35px;
	text-shadow: 7px 1px 2px #090a0f;
	color: ${colors.quaternary};
	align-self: center;
	border: 1px solid ${colors.quaternary};
	border-radius: 20px;
	box-shadow: inset 0px -11px 15px 0px #090a0f;

	@media (max-width: ${screenSize.tablet}) {
		display: none;
	}
`
const ProjetImg = styled.img`
	max-height: 30%;
    width: 450px;
    padding-bottom: 10px;
	:hover {
		transform: scale(1.5);
		box-shadow: 0px -11px 15px 0px black;
	}

	@media (max-width: ${screenSize.tablet}) {
		max-height: 100%;
		width: 100%;
		margin-bottom: 30px;

		:hover {
			transform: none;
			box-shadow: none;
		}
	}
`
export default ProjectOne