import './App.css';

function App() {
  return (
    <div className="App">
        <canvas id="about" width="1000px" height="50px"/>
        <br/>
        <canvas id="stage" width="1000px" height="600px"/>

        <p>
            <button id="start">Starta</button>
            <button id="paus">Pausa</button>
        </p>
    </div>
  );
}

export default App;
