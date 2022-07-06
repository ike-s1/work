import { Battlemech, Header, HowEarn,
  Little, Pilots, Planets, Preview, Roadmap,
  Video, Weapons, Why } from './components';

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
     <Planets/>
     <Roadmap/>
    </div>
  );
}

export default App;
