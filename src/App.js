import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <div style={{backgroundColor:'red'}}>
      Hello this is example of jenkins
     </div>
     <div>
      <img src='data:image/png;base64,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' style={{height:'100px',width:'100px'}}></img></div>
    </div>
  );
}

export default App;
