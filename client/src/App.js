import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello SurveyShip!</h2>
        <a href="/auth/google">Click here to sign in with Google</a>
      </header>
    </div>
  );
}

export default App;
