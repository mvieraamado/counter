import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <h1 className='titleApp' alt='title'>Counter</h1>
      </header>
      <div>
        <Button
          text='Click'
          isClickButton={true}
        />
        <Button
          text='Restart'
          isClickButton={false}
        />
      </div>
    </div>
  );
}

export default App;
