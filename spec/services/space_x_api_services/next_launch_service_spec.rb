require "rails_helper"

RSpec.describe SpaceXApiServices::NextLaunchService do
  
  describe ".call" do
    
    it "should return next launch info" do
      response = instance_double(RestClient::Response,
        body: {
          name: "CRS-20",
          date_utc: "2020-03-07T04:50:31.000Z",
          links: {
            patch: {
              small: "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
            }
          }
        }.to_json
      )
      
      allow(RestClient::Request).to receive(:execute).and_return(response)

      expect(SpaceXApiServices::NextLaunchService.call).to have_attributes(
        name: "CRS-20", 
        date: "2020-03-07T04:50:31.000Z",
        patch: "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
      )
    end

    it "should return error when SpaceX api call return an error" do
      allow(RestClient)
        .to receive(:get)
        .and_raise(RestClient::Unauthorized)

      expect { SpaceXApiServices::NextLaunchService.call }.to raise_error RestClient::Unauthorized
    end
  end
end