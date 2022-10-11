import Artigo from "../Artigo";
import "./Conteudo.css";

const Conteudo = () => {
  return (
    <main>
      <section>
        <h2 className="subtitulo">Conteúdo do site....</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
          inventore, sapiente impedit numquam maxime quia voluptates, et at modi
          harum recusandae? Inventore illo consectetur, quisquam distinctio
          commodi voluptate fugit.
        </p>

        <Artigo />
        <Artigo />
        <Artigo />
      </section>
    </main>
  );
};

export default Conteudo;
