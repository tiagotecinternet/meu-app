import Artigo from "../Artigo";

const Conteudo = () => {
  const artigos = [
    {
      id: 1,
      titulo: "Artigo 1",
      subtitulo: "Este é o subtítulo do artigo 1...",
      texto: "Este é o conteúdo bla bla bla do artigo 1...",
      curso: "JS Avançado",
    },
    {
      id: 2,
      titulo: "Artigo 2",
      subtitulo: "Este é o subtítulo do artigo 2...",
      texto: "Este é o conteúdo la la la do artigo 2...",
      curso: "React",
    },
    {
      id: 3,
      titulo: "Artigo 3",
      subtitulo: "Este é o subtítulo do artigo 3...",
      texto: "Este é o conteúdo abcd xyz do artigo 3...",
      curso: "Node.js",
    },
  ];

  return (
    <main>
      <section>
        <h2>Conteúdo do site....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
          inventore, sapiente impedit numquam maxime quia voluptates, et at modi
          harum recusandae? Inventore illo consectetur, quisquam distinctio
          commodi voluptate fugit.
        </p>

        {/* Aplicando destructuring (desestruturação no objeto) */}
        {artigos.map(({ id, titulo, subtitulo, curso, texto }) => (
          <Artigo key={id} titulo={titulo} subtitulo={subtitulo} curso={curso}>
            {texto}
          </Artigo>
        ))}
      </section>
    </main>
  );
};

export default Conteudo;
