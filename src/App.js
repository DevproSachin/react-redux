import './App.css';
import User from './components/User';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
function App() {
  return (
    <div className="App">
          {/* <h1> App component </h1> */}
          <User data = {{name:'Aim',year: 2021}}/>
          <HeaderContainer/>
          <HomeContainer/>
    </div>
  );
}

export default App;
