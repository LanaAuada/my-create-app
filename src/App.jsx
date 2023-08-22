// import React from 'react'

import Cabecalho from "./components/cabecalho"

export default function App() {
  return (
    <>
      <div className="container">
        <Cabecalho/>

        <section>
          <p><a href="/">Home Page</a></p>
              <button onClick={() => alert("Hello World!")}>
              Click Me!</button>
        </section>

        <footer>
          <p>&copy; 2021, Vite.js and React.</p>
        </footer>

      </div>
      {/* <h1>App</h1>
        <React.Fragment>
          {/*<Header/>*/}
          {/* <p>Olá Mundo</p>
        </React.Fragment>
      <h2>Teste</h2> */} 
    </>
  )
}