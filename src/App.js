import { Battlemech, Discord, Factions, Footer, Header, HowEarn,
  Little, Origin, Pilots, Planets, Preview, Roadmap,
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
     <Origin/>
     <Factions/>
     <Discord/>
     <Footer/>
    </div>
  );
}

export default App;
