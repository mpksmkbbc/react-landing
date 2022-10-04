import logo from './logo.svg';
import './App.css';
import BtnMain from './components/Button';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// function App()
const App = () => {
  const navText = "Salsa";
  const clik = () => {
    return alert("Selamat anda sudah muncul");
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Okeyy <code>src/App.js</code> and save to reload.
        </p>
        <BtnMain clik={clik} />
        <Footer />
      </header>
    </div>
  );
}

export default App;
