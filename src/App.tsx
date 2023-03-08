import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import Location from './components//Location';
import Countdown from './components/Countdown';
import Configs from './configs';
import Family from './components/Family';
import Confirmation from './components/Confirmation';
import Regalos from './components/Regalos';

function App() {
  return (
    <main style={{ height: '100%' }}>
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <Family config={Configs}/>
      <Location config={Configs} />
      <Countdown/>
      <Confirmation config={Configs}/>
      <Regalos config={Configs}/>
    </main>
  );
}

export default App;
