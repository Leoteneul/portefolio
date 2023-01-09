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
					Projet 6: <br /> <span>Groupomania</span>
				</h2>
				<p>
					<strong>React</strong> s’impose comme la suite logique de mon apprentissage
					en JS et chez OpenClassrooms. <br />
					<br />
					Il s'agit de la <strong>
						création d'un réseau social d’entreprise
					</strong>{' '}
					ou l’utilisateur peut s’inscrire et se connecter à son espace et lui
					permettre la création de post ainsi qu’un <strong>carrousel</strong>{' '}
					reprenant toutes les publications. Le frontend du site est donc libre
					aucune maquette modèle sur ce projet. <br />
					<br />
					Je peux maintenant appliquer{' '}
					<strong>l’architecture fragmenter en composants</strong> y inclure les
					props, le state, les requêtes axios, le contenu CSS,élaborer des
					événements… De plus ce projet m’a aidé à{' '}
					<strong>comprendre des documentations,</strong> mettre en avant des choix
					graphiques, a poussé vers un livrable final un projet perso, être autonome
					sur la mise en place de certaines solutions techniques,{' '}
					<strong>utiliser une API avec React.</strong>
				</p>
				<a href="https://github.com/Leoteneul/P6">
					https://github.com/Leoteneul/P6
				</a>
			</ProjectInfo>
			<ImgContainer>
            <Title>Mes Projets</Title>
				<ProjetImg
					src="images/projets/P6/img_1.png"
					alt=""
					className={className2}
				/>
				
				<ProjetImg
					src="images/projets/P6/img_2.png"
					alt=""
					className={className2}
				/>
				<ProjetImg
					src="images/projets/P6/img_3.png"
					alt=""
					className={className2}
				/>
				<ProjetImg
					src="images/projets/P6/img_4.png"
					alt=""
					className={className2}
				/>
				<ProjetImg
					src="images/projets/P6/img_5.png"
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
	padding-bottom: 10px;
    width: 450px;
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