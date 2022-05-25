import './App.css';
import CounterContainer from './components/CounterContainer/CounterContainer';

function App() {

  return (
    <div className='app'>
      <header className='header'>
        <h1 className='titleApp' alt='title'>Counter</h1>
      </header>
      <CounterContainer />
      <footer>
        <span>Developed by Mariam Viera Amado</span>
      </footer>
    </div>
  );
}

export default App;
