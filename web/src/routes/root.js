import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Root = () => {
  
  let currentActiveTab = ["/launches/next", "/launches/upcoming", "/launches/latest", "/launches/past"]
    .findIndex((str) => str === window.location.pathname)

  if (currentActiveTab < 0) currentActiveTab = 0;

  const [activeTab, setActiveTab] = useState(currentActiveTab);

  const handleTabChange = (_, newActiveTab) => setActiveTab(newActiveTab);

  return (
    <div className="root">
      <AppBar position="static">
        <Tabs 
          value={activeTab}
          indicatorColor="secondary"
          textColor="inherit" 
          onChange={handleTabChange} 
          centered
        >
          <Tab component={Link} label="Next Launch" to="/launches/next" />
          <Tab component={Link} label="Upcoming Launches" to="/launches/upcoming" />
          <Tab component={Link} label="Latest Launch" to="/launches/latest" />
          <Tab component={Link} label="Past Launches" to="/launches/past" />
        </Tabs>
      </AppBar>

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
