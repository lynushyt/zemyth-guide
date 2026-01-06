import './styles/global.css';

import { Header } from './components/Header';
import { ProjectFlow } from './components/ProjectFlow';
import { FundingTiers } from './components/FundingTiers';
import { Protections } from './components/Protections';
import { MilestoneExample } from './components/MilestoneExample';
import { NextSteps } from './components/NextSteps';
import { Resources } from './components/Resources';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectFlow />
      <FundingTiers />
      <Protections />
      <MilestoneExample />
      <NextSteps />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
