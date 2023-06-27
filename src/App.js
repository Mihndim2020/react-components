import { GoBell, GoDatabase } from 'react-icons/go';
import Button from "./Button";

function App() {
  const handleClick = () => {
    console.log('I have been clicked !!!');
  }
  return (
    <div className="App">
        <h1>Welcome to React Components</h1>
        <div>
         <Button primary rounded outline className="mb-5" onClick={handleClick}> <GoBell /> Click me please</Button>
        </div>
        <div>
         <Button secondary>Buy now !</Button>
        </div>
        <div>
         <Button success> <GoDatabase />See Deal !</Button>
        </div>
        <div>
         <Button warning>Hide Adds </Button>
        </div>
        <div>
         <Button danger rounded>Check out ! </Button>
        </div>
    </div>
  );
}

export default App;
