import styled from 'styled-components'
import { colors, screenSize } from '../../style/utils'
import '../../anims/animation'
function TabContainer({ animTwo }) {
	let className = 'animBarOff'
	let className2 = ''
	if (animTwo) {
		className = 'animBarOn'
		className2 = 'animGraphOpacity'
	}

	function handleHover() {
		const bars = document.querySelectorAll('.itemContainer')
		bars.forEach((bar) => {
			const text = bar.querySelector('p')
			bar.addEventListener('mouseover', function () {
				text.style.display = 'flex'
			})

			bar.addEventListener('mouseout', function () {
				text.style.display = 'none'
			})
		})
	}
	handleHover()
	return (
		<TabContainere>
			<Title>Hardskills</Title>
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
					<ItemText>
						- Bonne compréhension de l’architecture React. <br />
						<br />
						- Utilisation des props, du state, du contexte, ainsi que la gestion des
						styles et des effets. <br />
						<br />
						- J’applique également Axios et du code asynchrone <br />
						pour les appels API. <br />
						<br />
						- Manipulation de React Router dom et gestions des liens. <br />
						<br />
						- Syntaxe JSX. <br />
						<br />
					</ItemText>
					<TechnoBar>React</TechnoBar>
				</ItemContainer>

				<ItemContainer className="itemContainer">
					<ItemText>
						- Balisage HTML. <br />
						<br />
						- Utilisation du responsive et de grid. <br />
						<br />
						- Animation, translate, keyframe. <br />
						<br />
						- Flexbox et media queries. <br /> <br />
						- Pseudo class. <br /> <br />
						J’exploite également beaucoup les ombres, l’opacité, et la disposition
						pour créer des contenus plus visuel.
						<br />
						<br />
					</ItemText>
					<TechnoBar>HTML/CSS</TechnoBar>
				</ItemContainer>

				<ItemContainer className="itemContainer">
					<ItemText>
						- Connaissances des concepts générale de JS (variables, tableau, objet,
						classes). <br />
						<br />
						- Structurer , modifier, formater des tableaux ou objets. <br />
						<br />
						- Utilisation des boucles, des conditions et du DOM. <br />
						<br />
						- Je sais également gérer les événements et les requêtes asynchrones et
						pouvoir les utiliser pour fabriquer des calls API. <br />
						<br />
						- Je maîtrise la library React. <br />
						<br />
					</ItemText>
					<TechnoBar>JavaScript</TechnoBar>
				</ItemContainer>

				<ItemContainer className="itemContainer">
					<ItemText>
						J’ai découvert cette bibliothèque js très récemment mais j’apprécie
						beaucoup le fonctionnement et surtout le rendu final. De plus elle
						s’accorde vraiment bien avec React <br />
						<br />
						Je commence à utiliser: <br />
						<br />
						- Les scènes <br />
						<br />
						- Les caméras <br />
						<br />
						- Les lumières et les objets 3D <br />
						<br />
						- Appliquer des matériaux <br />
						<br />
						- Réutiliser le rendu dans un composant <br />
						<br />
						- Blender <br />
						<br />
					</ItemText>
					<TechnoBar>ThreeJs</TechnoBar>
				</ItemContainer>

				<ItemContainer className="itemContainer">
					<ItemText>
						- Création de l’application Web avec Node.js. <br />
						<br />
						- Utilisation de Express pour le serveur web et la création de L’API.{' '}
						<br />
						<br />
						- Connaissances en MongoDB pour stocker et récupérer des données de
						manière efficace ainsi que de pouvoir les formater. <br />
						<br />
						- Intégration de Mongo et d’Express pour une appli web complète. <br />
						<br />
						- Maîtrise de certaines library comme bcrypt ou multer. <br />
						<br />
						- Gestion de la sécurité de ces ressources. <br />
						<br />
					</ItemText>
					<TechnoBar>Express / Mongo</TechnoBar>
				</ItemContainer>

				<ItemContainer className="itemContainer">
					<ItemText>
						- Intégration de SASS dans le projet. <br />
						<br />
						- Syntax SASS. <br />
						<br />
						- Utilisation des outils: variables, mixin, et de certaines fonctions.
						<br />
						<br />
						- Garder un code lisible et maintenable.
						<br />
						<br />
						C'est le meilleur Préprocesseur CSS et aussi un bon investissement d'un
						point de vu professionel et pratique, je compte l'utiliser plus souvent
						sur mes prochains projets.
						<br />
						<br />
					</ItemText>
					<TechnoBar>Sass</TechnoBar>
				</ItemContainer>

				<ItemContainer className="itemContainer">
					<ItemText>
						J’ai beaucoup travailler en local jusqu’à maintenant mais je sais utiliser
						GIT pour me permettre de travailler en équipe. <br />
						<br />
						- Versionner son travail.
						<br />
						<br />
						- Utiliser certaines commandes, ajouter et valider des modifications.
						<br />
						<br />
						- Créer et fusionner des branches, et résoudre les conflits de fusion.
						<br />
						<br />
						- Collaborer avec Git.
						<br />
						<br />
						- Maîtriser les dépôts distants.
						<br />
						<br />
					</ItemText>
					<TechnoBar>Git</TechnoBar>
				</ItemContainer>

				<ItemContainer className="itemContainer">
					<ItemText>
						Il s’agit d’une application que je connais depuis longtemps et que je
						maîtrise vraiment bien <br />
						<br />
						Je m'en sert surtout pour étudier la structure de mon rendu et également à
						mettre en place un plan d’action pour intégrer mon code. <br />
						<br />
						Il fonctionne grâce à des calques ce qui m’a aussi aidé au début à
						comprendre CSS <br />
						<br />
					</ItemText>
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
	position: relative;
	background-color: ${colors.primary};
	z-index: 30;
	box-shadow: 2px 1px 24px 12px rgba(0, 0, 0, 0.74);
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;

	@media (max-width: ${screenSize.tablet}) {
		width: 90%;
	}

	@media (max-width: ${screenSize.mobile}) {
		height: 85%;
	}
`
const Title = styled.h2`
	position: absolute;
	color: ${colors.quaternary};
	top: 0;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 500px;
	padding: 30px;
	display: flex;
	justify-content: center;
	font-size: 35px;
	text-shadow: 7px 1px 2px #090a0f;
	border: 1px solid ${colors.quaternary};
	border-top: none;
	border-radius: 0 0 20px 20px;
	box-shadow: inset 0px -11px 15px 0px #080913;

	@media (max-width: ${screenSize.tablet}) {
		width: 60%;
		font-size: 25px;
		padding: 25px;
	}
`
// AFFICHAGE DE LA GRILLE + INFOS %

const GraphWrapper = styled.div`
	position: absolute;
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

	@media (max-width: ${screenSize.mobile}) {
		left: 10px;
	}
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

	@media (max-width: ${screenSize.mobile}) {
		left: 20px;
		bottom: 20px;
	}
`

const YlineParam = styled.p`
	display: flex;
	align-items: flex-end;
	margin-left: 30px;
	border-bottom: 0.5px solid white;
	color: ${colors.secondary};
	height: 30%;
	width: 80%;

	${(props) =>
		props.last &&
		`
	border-bottom: none;
  `}
`

// CONTENT GRAPHER

const TechnosWrapper = styled.div`
	height: 80%;
	width: 80%;

	z-index: 80;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	background-color: transparent;
	overflow-y: hidden;
	::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: ${screenSize.tablet}) {
		width: 60%;
		justify-content: flex-start;
	}
`

const ItemContainer = styled.div`
	cursor: pointer;
	width: 5%;
	margin-right: 50px;

	:nth-child(1) {
		height: 60%;
	}
	:nth-child(2) {
		height: 80%;
	}
	:nth-child(3) {
		height: 80%;
	}
	:nth-child(4) {
		height: 32%;
	}
	:nth-child(5) {
		height: 60%;
	}
	:nth-child(6) {
		height: 40%;
	}
	:nth-child(7) {
		height: 60%;
	}
	:nth-child(8) {
		height: 80%;
	}
`

const ItemText = styled.p`
	background-color: ${colors.quaternary};
	color: white;
	margin-right: 5px;
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 30px;
	width: 350px;
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
	background-color: yellow;
	width: 100%;
	background-color: ${colors.quaternary};
	box-shadow: 12px 9px 0px 9px #06141a;
`

export default TabContainer