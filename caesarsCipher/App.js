import './App.css';

function App() {
  //decoder part
  function rot13(str) {
    let myRegex = /[a-z]/
    var alphabet = "abcdefghijklmnopqrstuvwxyz"

    let decoded = [];
    console.log(alphabet.indexOf('e') - 13)
    for (let index = 0; index < str.length; index++) {

      const element = str[index].toLowerCase();

      if (myRegex.test(element)) {
        let currIndex = alphabet.indexOf(element) - 13;
        if (currIndex < 0) {
          currIndex = 26 + currIndex;
        }
        decoded[index] = alphabet[currIndex].toUpperCase();
      } else {
        decoded[index] = element;
      }
    }

    return decoded.join('');
  }

  // actual part
  return (
    <div className="App">
      <header className="App-header">
        {rot13('SERR PBQR PNZC')}
      </header>
    </div>
  );
}

export default App;
