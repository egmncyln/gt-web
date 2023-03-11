import './App.css';
import './components/mobile-text';

function App() {
  function onElementClicked(message) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(message);
    }
  }

  return (
    <div className="container">
      <p onClick={onElementClicked.bind(null, 'Standart HTML p element is clicked !')}>
        It's a standart HTML p element !
      </p>
      <mobile-text
        onClick={onElementClicked.bind(null, 'P element in a web component developed with lit framework is clicked !')}
      >
        It's a p element in a web component developed with lit framework !
      </mobile-text>
    </div>
  );
}

export default App;
