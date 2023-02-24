import Greeting from './components//Greeting';
import TitleLayout from './components//Title';
import Location from './components//Location';
import Countdown from './components/Countdown';
import Configs from './configs';
import { Layout } from 'antd';
import Family from './components/Family';
import Confirmation from './components/Confirmation';
import {Route } from 'react-router-dom';
const { Footer } = Layout;

function App() {
  return (
    <main style={{ height: '100%' }}>
      <TitleLayout config={Configs} />
      <Greeting config={Configs} />
      <Family config={Configs}/>
      <Location config={Configs} />
      <Countdown/>
      <Confirmation config={Configs}/>
    </main>
  );
}

export default App;
