import { useEffect, useState } from "react";
import LaunchTable from "../components/launchTable";
import LaunchService from "../services/launchService";

const Past = () => {
  
  const [launches, setLaunches] = useState([]);

  const loadPastLaunches = async () => {
    const launches = await LaunchService.pastLaunches()
    setLaunches(launches)
  }

  useEffect(() => {
    loadPastLaunches()
  }, [])
  
  return <LaunchTable launches={launches} />;
}
  
export default Past;