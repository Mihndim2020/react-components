import Button from "./Button";

function App() {
  return (
    <div className="App">
        <h1>Welcome to React Components</h1>
        <div>
         <Button primary rounded outline>Click me please</Button>
        </div>
        <div>
         <Button secondary>Buy now !</Button>
        </div>
        <div>
         <Button success>See Deal !</Button>
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
