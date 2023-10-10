import logo from './logo.svg';
import './App.css';
import tombstone from './tombstone.svg'
import hills from './hills.svg'
import searchLights from './search-light.svg'
import candle from './candle.svg'
import fog from './fog.svg'

function App() {
  return (
    <div className="app">
      <div className='moon'/>
      <img className='cloud-1' src={fog} />
      <img className='cloud-2' src={fog} />

      <img className='hills' src={hills} />
      <img className='search-light-1' src={searchLights} />
      <img className='search-light-2' src={searchLights} />
      <img className='fog-1' src={fog} />
      <img className='fog-2' src={fog} />
      <img className='tombstone' src={tombstone} />

      <div className='candle-flame-1'>
        <div className="glow"></div>
        <div className="flame"></div>
        <img className='candle' src={candle} />
      </div>

      
      <div className='candle-flame-2'>
        <div className="glow"></div>
        <div className="flame"></div>
        <img className='candle' src={candle} />
      </div>

      <div className='red-carpet'/>
    </div>
  );
}

export default App;
