import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CashGames from './CashGames.jsx';

const MainTabs = () => {
  const [key, setKey] = useState('Cash-Games');

  return (
    <Tabs
      id="main-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Cash-Games" title="Cash Games">
        <CashGames/>
      </Tab>
      <Tab eventKey="Spring-Series" title="Spring Series">
        Spring Series
      </Tab>
      <Tab eventKey="Final-Stage" title="Final Stage">
        Final Stage
      </Tab>
    </Tabs>
  );
}

export default MainTabs;