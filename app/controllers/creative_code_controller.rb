class CreativeCodeController < ApplicationController
  before_action { @noindex = true } # keep these pages out of search

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
    render "creative_code/weeks/#{@week}"
  end

def sketch
  @week   = params[:week].to_i
  @sketch = params[:sketch].to_i

  template_path = "creative_code/weeks/#{@week}/sketch#{@sketch}"

  # Debug logging to confirm correct lookup path
  full_path = Rails.root.join("app", "views", "#{template_path}.html.erb")
  Rails.logger.info("🔍 Looking for: #{full_path}")
  Rails.logger.info("📄 Exists? #{File.exist?(full_path)}")

  if File.exist?(full_path)
    render template_path
  else
    Rails.logger.warn("❌ Missing template: #{template_path}")
    raise ActionController::RoutingError, "Sketch not found"
  end
end
end
