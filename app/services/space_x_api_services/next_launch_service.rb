module SpaceXApiServices
  
  class NextLaunchService
    
    def self.call
      @response = RestClient.get "https://api.spacexdata.com/v4/launches/next",
        { content_type: :json, accept: :json }
      
      @launch_info = JSON.parse(@response.body)
      LaunchDTO.new(@launch_info)
    end
  end
end