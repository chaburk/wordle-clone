import './App.css';
import Header from './Header';
import Word from './Word';
import Keyboard from 'react-simple-keyboard'
import "react-simple-keyboard/build/css/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className='app--words'>
        <Word />
        <Word />
        <Word />
        <Word />
        <Word />
        <Word />
      </main>
      <Keyboard />
      
      {/*Keyboard*/}
    </div>
  );
}

export default App;
