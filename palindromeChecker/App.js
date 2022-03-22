import './App.css';

function App() {
  return (
    <div>
      {isPalindrome('eye')}
    </div>
  );

  function isPalindrome(str) {
    let myRegex = /[A-Za-z0-9]/;
    let firstArr = [];
    str.split('').forEach(element => {
      if (myRegex.test(element)) {
        firstArr.push(element.toLowerCase());
      }
    });

    let secondArr = [];
    let isTrue = [];
    for (let i = firstArr.length - 1; i >= 0; i--) {
      secondArr.push(firstArr[i]);
    }

    for (let index = 0; index < firstArr.length; index++) {
      const element = firstArr[index];
      if (element === secondArr[index]) {
        isTrue.push(true);
      } else {
        isTrue.push(false);
      }
    }
    return isTrue.every(item => item == true) ? "Yes it's a palindrome!" : "No, the word is not palindrome.";
  }
}



export default App;
