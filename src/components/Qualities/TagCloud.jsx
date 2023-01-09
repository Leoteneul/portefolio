import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'

// Fonction pour setup les coordonnées
function setPos(x, y) {
	const spherical = new THREE.Spherical()
	const radius = 13
	const posVector = new THREE.Vector3().setFromSpherical(
		spherical.set(radius, x, y)
	)
	return posVector
}

// Fonction pour ajouter des mots dans la bulle
function setTabWord() {
	const tabword = [
		[setPos(4, 29), 'Créatif'],
		[setPos(15, 28), 'Curieux'],
		[setPos(11, 32), 'Engagé'],
		[setPos(8, 25), 'Autonome'],
		[setPos(4, 15), 'Aventurier'],
		[setPos(62, 17), 'Intègre'],
		[setPos(-37, 19), 'Cinéma'],
		[setPos(36, 5), 'Art'],
		[setPos(17, -5), 'Patient'],
		[setPos(18, 52), 'Manga'],
		[setPos(51, 3), 'Échecs'],
	]

	return tabword
}

function Word({ children, ...props }) {
	const color = new THREE.Color()
	const fontProps = {
		font: '/AlfaSlab.ttf',
		fontSize: 2.2,
		letterSpacing: 0.05,
		lineHeight: 1,
		'material-toneMapped': false,
	}
	const ref = useRef()

	useFrame(({ camera }) => {
		// Centrer le texte
		ref.current.quaternion.copy(camera.quaternion)
		// Couleur des textes et gestion du foe
		ref.current.material.color.lerp(color.set('#36889f'), 0.1)
	})
	return <Text ref={ref} {...props} {...fontProps} children={children} />
}

function Cloud() {
	const words = setTabWord()
	return words.map(([pos, word], index) => (
		<Word key={index} position={pos} children={word} />
	))
}

export default function TagCloud() {
	return (
		<Canvas dpr={[1, 5]} camera={{ position: [0, 0, 35], fov: 60 }}>
			<fog attach="fog" args={['#202025', 0, 50]} />
			<Cloud count={20} radius={13} />
			<TrackballControls />
		</Canvas>
	)
}
