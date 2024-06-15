import './App.css';
import { Demo } from './qr_codes/qr_demo1';
import { Demo2 } from './qr_codes/qr_demo2';
import { Demo3 } from './qr_codes/qr_demo3';

function App() {
  return (
    <div>
      <header className="App-header">
        <p>
          QR code demos
        </p>
      </header>
      <Demo/>
      <Demo2/>
      <Demo3/>
    </div>
  );
}

export default App;
