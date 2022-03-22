
import './App.css';

function App() {
  function validate(num) {
    let myRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
    return myRegex.test(num) + '';
  }



  return (
    <div className="App">
      <header className="App-header">
        {validate(23213123124214)}
      </header>
    </div>
  );
}

export default App;
