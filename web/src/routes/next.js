import { useEffect, useState } from "react";
import LaunchCard from "../components/launchCard";
import LaunchService from "../services/launchService";

const Next = () => {
  
  const [launch, setLaunch] = useState();

  const loadNextLaunch = async () => {
    const launch = await LaunchService.nextLaunch()
    setLaunch(launch)
  }

  useEffect(() => {
    loadNextLaunch()
  }, [])

  return <LaunchCard launch={launch} />;
}
  
export default Next;