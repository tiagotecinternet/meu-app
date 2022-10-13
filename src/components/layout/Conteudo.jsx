import Artigo from "../Artigo";

const Conteudo = () => {
  /* 1) Crie um array com o nome de 3 cursos */
  const cursos = ["JS Avançado", "React", "Node.js"];

  /* 2) Dentro das chamadas dos artigos, passe como uma nova prop chamada curso
  o nome de cada curso. O primeiro artigo deve mostrar o nome do primeiro curso, o segundo artigo o nome do segundo curso e o terceiro o nome do terceiro curso. */
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

        <Artigo
          curso={cursos[0]}
          titulo="Artigo 1"
          subtitulo="Subtítulo do artigo 1"
        >
          Este é o texto do primeiro artigo....
        </Artigo>
        <Artigo
          curso={cursos[1]}
          subtitulo="Subtítulo do artigo 2"
          titulo="Artigo 2"
        >
          Este é o texto do segundo artigo....
        </Artigo>
        <Artigo
          curso={cursos[2]}
          titulo="Artigo 3"
          subtitulo="Subtítulo do artigo 3"
        >
          Este é o texto do terceiro artigo....
        </Artigo>
      </section>
    </main>
  );
};

export default Conteudo;
