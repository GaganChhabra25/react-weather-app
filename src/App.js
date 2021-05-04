import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Left from './components/Left/Left';
import Right from './components/Right/Right';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Container className="container">
          <Left/>
          <Right/>
      </Container>
    </div>
  );
}

export default App;
