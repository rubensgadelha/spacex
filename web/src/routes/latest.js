import { useEffect, useState } from "react";
import LaunchCard from "../components/launchCard";
import LaunchService from "../services/launchService";

const Latest = () => {
  
  const [launch, setLaunch] = useState();

  const loadLatestLaunch = async () => {
    const launch = await LaunchService.latestLaunch()
    setLaunch(launch)
  }

  useEffect(() => {
    loadLatestLaunch()
  }, [])

  return <LaunchCard launch={launch} />;
}
  
export default Latest;