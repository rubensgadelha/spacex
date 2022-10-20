require "rails_helper"

RSpec.describe SpaceXApiServices::UpcomingLaunchesService do
  
  describe ".call" do
    
    it "should return upcoming launches info" do
      response = instance_double(RestClient::Response,
        body: [
          {
            name: "CRS-20",
            date_utc: "2020-03-07T04:50:31.000Z",
            links: {
              patch: {
                small: "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
              }
            }
          },
          {
            name: "Starlink 4-36 (v1.5)",
            date_utc: "2022-10-20T14:50:00.000Z",
            links: {
              patch: {
                small: "https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png",
              }
            }
          }
        ].to_json
      )
      
      allow(RestClient::Request).to receive(:execute).and_return(response)

      result = SpaceXApiServices::UpcomingLaunchesService.call

      expect(result.length).to eq(2)
      
      expect(result[0]).to have_attributes(
        name: "CRS-20", 
        date: "2020-03-07T04:50:31.000Z",
        patch: "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
      )
      
      expect(result[1]).to have_attributes(
        name: "Starlink 4-36 (v1.5)",
        date: "2022-10-20T14:50:00.000Z",
        patch: "https://images2.imgbox.com/a9/9a/NXVkTZCE_o.png",
      )
    end

    it "should return error when SpaceX api call return an error" do
      allow(RestClient)
        .to receive(:get)
        .and_raise(RestClient::Unauthorized)

      expect { SpaceXApiServices::UpcomingLaunchesService.call }.to raise_error RestClient::Unauthorized
    end
  end
end