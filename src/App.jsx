import Cabecalho from "./components/layout/Cabecalho";
import Rodape from "./components/layout/Rodape";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";

const App = () => {
  return (
    <>
      <Cabecalho />
      <Home />
      <Produtos />
      <Servicos />
      <Rodape />
    </>
  );
};

export default App;
