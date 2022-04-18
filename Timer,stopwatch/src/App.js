import { StopWatch } from './components/Stopwatch';
import { SetTimer } from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='main-1'>
      <SetTimer />
      </div>
      <div className='main-2'>
      <StopWatch />
      </div>
    </div>
  );
  }

export default App;
