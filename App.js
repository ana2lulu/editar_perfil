import './App.css';
import perfil from "../src/perfil.png";
import voltar from "../src/voltar.png";
import calendario from "../src/calendario.png";
import ir from "../src/ir.png";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={perfil} className="perfil" alt="perfil" />

        <h1>Editar Perfil </h1>
        <div className="quadrado">
          <p>Salvar Alterações</p>
        </div>

        <div className="quadrado2">
          <e> Abracadabra Souza</e>
        </div>

        <div className="quadrado3">
          <d>08/11/2023</d>
        </div>

        <div className="quadrado4">
          <a> abracadabraSouza@gmail.com</a>
        </div>

        <div className="quadrado5">Alterar Senha</div>
      

      <div className="quadrado6">Nome</div>
      <div className="quadrado7">Data nascimento </div>
      <div className="quadrado8">E-mail</div>

      <img src={voltar} className="voltar" alt="voltar" />
      <img src={calendario} className="calendario" alt="calendario" />
      <img src={ir} className="ir" alt="ir" />
      </header>
    </div>

  );
}

export default App;
