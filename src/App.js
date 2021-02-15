import React from 'react';
import Navigation from './components/Navigation';
import CardsSection from './components/CardsSection';
import OperationsTable from './components/OperationsTable';
import 'office-ui-fabric-react/dist/css/fabric.css';

import './App.css';

function App() {
  return (
    <div className='ms-Grid' dir='ltr'>
      <div className='ms-Grid-row'>
        <div className='ms-Grid-col ms-sm2 ms-xl2'>
          <Navigation />
        </div>
        <div className='ms-Grid-col ms-sm10 ms-xl10 main-lement'>
          <div className='ms-Grid-row'>
            <CardsSection />
          </div>
          <div className='ms-Grid-row'>
            <OperationsTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
