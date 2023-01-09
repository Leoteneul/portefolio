import styled from 'styled-components'
import { colors, screenSize } from '../../style/utils'
import ProjectTwo from './ProjectTwo'
import { useState } from 'react'
import ProjectOne from './ProjectOne'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faArrowDownLong,
	faArrowUpLong,
} from '@fortawesome/free-solid-svg-icons'
import ProjectThree from './ProjectThree'
import ProjectFour from './ProjectFour'
import ProjectFive from './ProjectFive'
import ProjectSix from './ProjectSix'

function Project({ animThree }) {
	const [count, setCount] = useState(6)

	if (count === 0) {
		setCount(1)
	}

	if (count > 6) {
		setCount(6)
	}

	return (
		<ProjectContenor id="projects">
			<ChoiceContainer>
				<Icon icon={faArrowUpLong} onClick={() => setCount(count - 1)} />
				<Icon icon={faArrowDownLong} onClick={() => setCount(count + 1)} />
			</ChoiceContainer>
			{count === 1 ? <ProjectOne animThree={animThree} /> : null}
			{count === 2 ? <ProjectTwo animThree={animThree} /> : null}
			{count === 3 ? <ProjectThree animThree={animThree} /> : null}
			{count === 4 ? <ProjectFour animThree={animThree} /> : null}
			{count === 5 ? <ProjectFive animThree={animThree} /> : null}
			{count === 6 ? <ProjectSix animThree={animThree} /> : null}
		</ProjectContenor>
	)
}

const ProjectContenor = styled.div`
	height: 100vh;
	background-color: ${colors.primary};
	scroll-snap-align: center;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	overflow: hidden;
	position: relative;

	@media (max-width: ${screenSize.tablet}) {
		height: fit-content;
		padding-top: 100px;
	}

	@media (max-width: ${screenSize.mobile}) {
		align-items: flex-start;
	}
`
const ChoiceContainer = styled.div`
	height: 30%;
	width: 5%;
	color: white;
	font-size: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: ${screenSize.tablet}) {
		width: 20%;
		height: 10%;
		position: absolute;
		top: 150px;
		left: 0;
		z-index: 80;
	}
	@media (max-width: ${screenSize.mobile}) {
	}
`

const Icon = styled(FontAwesomeIcon)`
	cursor: pointer;
	color: ${colors.quaternary};

	:hover {
		transform: scale(1.2);
	}
`

export default Project