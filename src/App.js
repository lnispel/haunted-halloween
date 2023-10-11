import React from 'react' 
import logo from './logo.svg';
import './App.css';
import tombstone from './tombstone.svg'
import hills from './hills.svg'
import searchLights from './searchlight.svg'
import candle from './candle.svg'
import fog from './fog.svg'

const App = () => {
  const [timer, setTimer] = React.useState()
  const calculateTimeLeft = () => {
    const difference = +new Date(2023,9,13,21,0,0) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  const [year] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
 
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
      <img className='fog-3' src={fog} />
      <img className='tombstone' src={tombstone} />
      <div className='links'>
        <a href='https://drive.google.com/drive/folders/1QKPVe-czCKdQR5nBrtpibUC7cY848P8g?usp=drive_link'>
          Red Carpet Photos
        </a>
        <a href='https://forms.gle/WsuvSaASak8tr6Pe8'>
          Award Text Alerts
        </a>
        <a href='https://forms.gle/EceXK2K4e3gw9SX28'>
          People's Ballot
        </a>
        <a href='https://account.venmo.com/u/lukenis_monstr'>
          Future Halloween Fund
        </a>
      </div>
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

      <div className="floating-ghost">
        <div id="spooky">
            <div id="body">
                <div id="eyes"></div>
                <div id="feet">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <div id="shadow"></div>
      </div>

      <div className='red-carpet'/>
      <div className='count-down'>
        {timerComponents.length ? timerComponents : <span>Time's up.</span>}
      </div>
    </div>
  );
}

export default App;
