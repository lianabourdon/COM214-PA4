class CreativeCodeController < ApplicationController
  before_action { @noindex = true } # keep these pages out of search

  # Week titles to display on the index cards
  TITLES = {
    1  => "AI",
    2  => "Hypertext",
    3  => "Video Games",
    4  => "Pixels & Animation 1",
    5  => "Pixels & Animation 2",
    6  => "Sound",
    7  => "Midterm",
    8  => "Data",
    9  => "Interfaces",
    10 => "Networks"
  }.freeze

  def index
    @weeks  = (1..10).to_a
    @titles = TITLES
  end

  def week
    @week = params[:id].to_i
    unless (1..10).include?(@week)
      raise ActionController::RoutingError, "Not Found"
    end
    # render app/views/creative_code/weeks/<n>.html.erb
    render "creative_code/weeks/#{@week}"
  end
end

