import React from 'react'

import Header from './components/Header'

function App() {
  const projects = ['dev apps', 'dev web']
  return (
    <>
      <Header title="Home">
        <p> Listagem de projetos: </p>
      </Header>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
    </>
  )
}

export default App