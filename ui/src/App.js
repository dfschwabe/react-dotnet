import './App.css';
import Weather, { WeatherTomorrow } from './WeatherTomorrow';
import { useDispatch } from 'react-redux'
import { set } from './store';
import axios from 'axios';
import { WeatherToday } from './WeatherToday';

function App() {
  const dispatch = useDispatch();

  axios.get('http://localhost:5223/weatherforecast')
    .then(r => dispatch(set(r.data)));
  

  return (
    <div className="App">
      <WeatherToday></WeatherToday>
      <WeatherTomorrow></WeatherTomorrow>
    </div>
  );
}

export default App;
