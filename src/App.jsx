import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Main from './components/Main'
import Minions from './components/Minions'

const cards = [
  "#FF6363",
  "#63ECFF",
  "#F363FF",
  "#63FF73",
  "#FFDD63",
  "#6663FF",
];

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
      <Main>
        {
          cards.map(color => <Card bgColor={ color }/>)
        }
      </Main>
      <Footer>
        <Form />
      </Footer>
    </div>
  )
}

export default App
