import React, { useState, useEffect } from 'react'

import api from './services/api'

import './App.css'

import Header from './components/Header'


export default function App() {
	const [projects, setProjects] = useState([])
	const [name, setName] = useState('')

	useEffect(() => {
		api.get('/projects').then(response => {
			setProjects(response.data)
		})
	}, [])

	async function handleAddProject() {

		const response = await api.post('/projects', {
			name
		})
		const project = response.data

		setProjects([...projects, project])
		setName('')
	}

	return (
		<>
			<Header title="Home">
				<p> Listagem de projetos: </p>
			</Header>

			<ul>
				{projects.map(project => <li key={project.id}>{project.name}</li>)}
			</ul>

			<input type="text" value={name} onChange={e => setName(e.target.value)} />
			<button type="button" onClick={handleAddProject}>Adicionar projeto</button>
		</>
	)
}