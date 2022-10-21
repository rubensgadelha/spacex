import { useEffect, useState } from "react";
import LaunchTable from "../components/launchTable";
import LaunchService from "../services/launchService";

const Upcoming = () => {
  
  const [launches, setLaunches] = useState([]);

  const loadUpcomingLaunches = async () => {
    const launches = await LaunchService.upcomingLaunches()
    setLaunches(launches)
  }

  useEffect(() => {
    loadUpcomingLaunches()
  }, [])
  
  return <LaunchTable launches={launches} />
}
  
export default Upcoming;