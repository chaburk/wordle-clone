import './App.css';
import Header from './Header';
import Word from './Word';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='word-container'>
        <Word />
      </main>
      
      {/*Keyboard*/}
    </div>
  );
}

export default App;
