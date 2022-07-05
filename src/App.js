import { Battlemech, Header, HowEarn, Little, Preview, Roadmap, Video, Weapons, Why } from './components';
import Pilots from './components/pilots/Pilots';

import './scss/index.scss';



function App() {
  return (
    <div className="app">
     <Header/>
     <Preview/>
     <Why/>
     <Video/>
     <HowEarn/>
     <Little/>
     <Battlemech/>
     <Pilots/>
     <Weapons/>
     <Roadmap/>
    </div>
  );
}

export default App;
