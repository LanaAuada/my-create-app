// import React from 'react'

import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import reactLogo from "./assets/react.svg";

export default function App() {

  let reactLogoAlt = "React Logo";

  //lista de links redes sociais

  let listaLinks =[<li>Github</li>, <li>X</li>, <li>Reddit</li> ];

  return (
    <>
      <div className="container">

        <Cabecalho/>

        <Conteudo reactLogoProps = {reactLogo} reactLogoAltProps = {reactLogoAlt} />
 
        <Rodape listaProps={listaLinks}/>

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