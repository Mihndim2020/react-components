import { GoBell, GoDatabase } from 'react-icons/go';
import Button from "./Button";

function App() {
  return (
    <div className="App">
        <h1>Welcome to React Components</h1>
        <div>
         <Button primary rounded outline> <GoBell /> Click me please</Button>
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
