import Artigo from "../../Artigo";
import estilos from "./Conteudo.module.css";

const Conteudo = () => {
  return (
    <main>
      <section id={estilos.secoes}>
        <h2 className={estilos.subtitulo}>Conteúdo do site....</h2>
        <p>
          <span className={`${estilos.destaque} ${estilos["sombra-texto"]}`}>
            Lorem
          </span>
          ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab
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
