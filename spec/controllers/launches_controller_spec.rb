require "rails_helper"

RSpec.describe LaunchesController do
  
  describe "GET next" do
    
    let(:launch_info) {
      {
        name: "CRS-20",
        date_utc: "2020-03-07T04:50:31.000Z",
        links: {
          patch: {
            small: "https://images2.imgbox.com/53/22/dh0XSLXO_o.png",
          }
        }
      }
    }

    it "renders the next launch info as json" do
      allow(SpaceXApiServices::NextLaunchService).to receive(:call).and_return(launch_info)

      get :next
      
      expect(response.body).to eq launch_info.to_json
    end

    it "renders the upcoming launches info as json" do
      allow(SpaceXApiServices::UpcomingLaunchesService).to receive(:call).and_return([launch_info])

      get :upcoming
      
      expect(response.body).to eq [launch_info].to_json
    end

    it "renders the latest launch info as json" do
      allow(SpaceXApiServices::LatestLaunchService).to receive(:call).and_return(launch_info)

      get :latest
      
      expect(response.body).to eq launch_info.to_json
    end

    it "renders the past launches info as json" do
      allow(SpaceXApiServices::PastLaunchesService).to receive(:call).and_return([launch_info])

      get :past
      
      expect(response.body).to eq [launch_info].to_json
    end
  end
end