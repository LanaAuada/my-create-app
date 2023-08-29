
export default function Conteudo(props) {
  //área declarativa
    return (
      <>
        <section>
            {/*área imperativa, de recebimento*/}
          <p>
            <a href="/">Home Page</a>
          </p>
          <button onClick={() => alert("Hello World!")}>Click Me!</button>
          <img src={props.reactLogoProps} alt={props.reactLogoAltProps} />
        </section>
      </>
  )
}