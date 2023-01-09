import styled from 'styled-components'
import GlobalStyle, { screenSize } from '../../style/utils'
import '../../anims/animation.css'
import Wave from 'react-wavify'
import ppcv from '../../asset/ppcv.jpg'
import Links from '../Links'

function Title({ animOne }) {
	let className = 'displayWaveOff'
	if (animOne) {
		className = 'displayWaveOn'
	}

	return (
		<TitleContenor>
			<GlobalStyle />
			<TitleWrapper>
				<DisplayWrapper>
					<ProfilImg src={ppcv} alt="" />
					<Text>
						<h1>LÉO TENEUL</h1>
						<h2>Développeur Web</h2>
						<p>
							Je suis un jeune développeur fullstack lillois de 23 ans qui affectionne
							le Web et le code en général, particulièrement React et les technologies
							qui le soutiennent et qui me permettent d’apporter une solution technique
							et créative à mes projets.
							<br />
							<br />
							J’adore apprendre de nouveaux langages, ce portfolio est réalisé avec
							React et est un mélange d’animations simples en CSS, couplé avec
							certaines librairies comme "Wavify" ou "three" qui m'intéresse beaucoup
							pour le rendu d’éléments 3D.
							<br />
							<br />
							Suite à ma formation OpenClassrooms à travers de nombreux cours ou j’ai
							eu l’occasion d’échanger avec un mentor professionnel, rendre et
							présenter des livrables devant des examinateurs et un jury final pour
							obtenir mon diplôme Intégrateur Web bac +2/+3. Je suis motivé à la
							recherche de mon premier emploi dans ma carrière de développeur et de
							saisir l'opportunité d’apporter un regard neuf et technique à vos futurs
							projets.
						</p>
					</Text>
				</DisplayWrapper>
				<Links />
			</TitleWrapper>
			<Wavetwo
				fill="#e67920"
				options={{ height: 90, points: 20, speed: 0.2, amplitude: 40 }}
				className={className}
			/>
		</TitleContenor>
	)
}



const TitleContenor = styled.div`
	height: 100vh;
	width: 100%;
	padding: 50px 100px 0 80px;
	color: white;
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
	scroll-snap-align: center;

	@media (max-width: ${screenSize.tablet}) {
		padding: 0;
	}
	@media (max-width: ${screenSize.mobile}) {
		height: fit-content;
	}
`
const DisplayWrapper = styled.div`
	display: flex;
	width: 100%;
	min-width: 900px;

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
		height: 200px;
		width: 200px;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		object-position: center;
	}
`
const Text = styled.div`
	margin: 0 0 0 30px;
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
	box-shadow: inset 2px 1px 24px 12px rgba(0, 0, 0, 0.74);
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
		stroke-width: 50px;

		@media (max-width: ${screenSize.mobile}) {
			stroke-width: 20px;
		}
	}
`

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;

	margin-top: 20px;

	@media (max-width: ${screenSize.tablet}) {
		width: 100%;

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

