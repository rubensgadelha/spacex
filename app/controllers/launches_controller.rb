class LaunchesController < ApplicationController
  def next
    render json: SpaceXApiServices::NextLaunchService.call
  end

  def upcoming
    render json: SpaceXApiServices::UpcomingLaunchesService.call
  end

  def latest
    render json: SpaceXApiServices::LatestLaunchService.call
  end

  def past
    render json: SpaceXApiServices::PastLaunchesService.call
  end
end
