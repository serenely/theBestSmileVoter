import { useState } from 'react';
import Smile from './components/Smile/Smile';
import './App.css';
import Submit from './components/Submit/Submit';


function App() {
  const SMILES = [{
    id: 0,
    name: '\u{1F622}',
    counter: 0
  },
  {
    id: 1,
    name: '\u{1F610}',
    counter: 0

  },
  {
    id: 2,
    name: '\u{1F602}',
    counter: 0

  },
  {
    id: 3,
    name: '\u{1F600}',
    counter: 0

  },]

  const [smiles, setSmiles] = useState(SMILES)

  const upRating = (id) => {
    const newSmiles = [...smiles]
    const smile = newSmiles.find(item => item.id === id)
    if (smile) {
      smile.counter++;
      setSmiles(newSmiles)
    }
  }

  const downRating = (id) => {
    const newSmiles = [...smiles]
    const smile = smiles.find(item => item.id === id)
    if (smile) {
      smile.counter--;
      setSmiles(newSmiles)
    }
  }

  const showResults = () => {
    const maxCounter = smiles.reduce((acc, cur) => {
      return cur.counter > acc ? cur.counter : acc;
    }, 0);
    alert(`наибольшее значение ${maxCounter}`);
  }

  return (
    <div className="App">
      {smiles.map(smile => (
        <div className="smile__div" key={Math.random()}>
          <ul className="smile__ul">
            <li className="smile__li">
              <Smile smile={smile} downRating={() => downRating(smile.id)} upRating={() => upRating(smile.id)} />
            </li>
          </ul>
        </div>
      ))}
      <Submit showResults={() => showResults()} />
    </div>
  );
}

export default App;
