import './App.css';
import User from './User';
function App() {
  return (
    <div className="App">
          {/* <h1> App component </h1> */}
          <User data = {{name:'sachin sharma',age: 27}}/>
    </div>
  );
}

export default App;
