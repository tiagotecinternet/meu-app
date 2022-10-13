/* Acesso às props usando destructuring de objeto */
const Artigo = ({ titulo, subtitulo, curso, children }) => {
  return (
    <article>
      <h3> {titulo} </h3>
      <h4> {subtitulo} </h4>
      <p>Curso: {curso}</p>
      <p> {children} </p>
    </article>
  );
};

export default Artigo;
