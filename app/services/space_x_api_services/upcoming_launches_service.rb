module SpaceXApiServices
  
  class UpcomingLaunchesService
    
    def self.call
      @response = RestClient.get "https://api.spacexdata.com/v4/launches/upcoming",
        { content_type: :json, accept: :json }
      
      @launches_info = JSON.parse(@response.body)
      @launches_info.map { |launch_info| LaunchDTO.new(launch_info) }
    end
  end
end