import './App.css';
import './components/ui/text/mobile-text';

function App() {
  return (
    <div className="container">
      <p>It's a standart HTML p element !</p>
      <mobile-text>It's a p element in a web component developed with lit framework !</mobile-text>
    </div>
  );
}

export default App;
