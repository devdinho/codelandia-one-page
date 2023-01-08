import './App.css'
import Header from './components/Header'
import Minions from './components/Minions'

function App() {

  return (
    <div className="App">
      <Header>
        <div className="info-wrapper">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.
          </p>
          <button>Botão</button>
        </div>
        <Minions />
      </Header>
    </div>
  )
}

export default App
