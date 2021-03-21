import React from 'react';
import ReactDOM from 'react-dom';

let value = [];
let currentHook = 0;

function useState(initialState) {
  if (typeof value[currentHook] === 'undefined')
    value[currentHook] = initialState;
  let hookIndex = currentHook;
  function setState(nextValue) {
    value[hookIndex] = nextValue;
    ReactDOM.render(<App />, document.getElementById('root'));
  }
  return [value[currentHook++], setState];
}

function App() {
  currentHook = 0;
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleChangeLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <h1>
        {name} e {lastName}
      </h1>
      <input type="text" value={name} onChange={handleChange} />
      <input
        type="text"
        value={lastName}
        onChange={handleChangeLastNameChange}
      />
    </div>
  );
}

export default App;
