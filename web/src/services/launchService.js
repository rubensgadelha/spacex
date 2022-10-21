import axios from "axios"

class LaunchService {

  static async nextLaunch() {
    try {
      const response = await axios.get("/launches/next");
      return response.data
    
    } catch (error) {
      console.error(error);
    }
  }

  static async upcomingLaunches() {
    try {
      const response = await axios.get("/launches/upcoming");
      return response.data
    
    } catch (error) {
      console.error(error);
    }
  }

  static async latestLaunch() {
    try {
      const response = await axios.get("/launches/latest");
      return response.data
    
    } catch (error) {
      console.error(error);
    }
  }

  static async pastLaunches() {
    try {
      const response = await axios.get("/launches/past");
      return response.data
    
    } catch (error) {
      console.error(error);
    }
  }
}

export default LaunchService;