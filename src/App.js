import { ScrollContainer, ScrollPage } from "react-scroll-motion";
import {
  Battlemech,
  Discord,
  Factions,
  Footer,
  Header,
  HowEarn,
  Little,
  Origin,
  Pilots,
  Planets,
  Preview,
  Roadmap,
  Video,
  Weapons,
  Why,
} from "./components";

import "./scss/index.scss";

function App() {
  return (
    <ScrollContainer>
      <div className="app"> 
        <Factions/>
        <Discord/>
      </div>
    </ScrollContainer>
  );
}

export default App;
