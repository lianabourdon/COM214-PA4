class CreativeCodeController < ApplicationController
  before_action :require_auth!
  before_action { @noindex = true } # keep these pages out of search

  def index
    @weeks = (1..10).to_a
  end

  def week
    @week = params[:id].to_i
    unless (1..10).include?(@week)
      raise ActionController::RoutingError, "Not Found"
    end
    # render app/views/creative_code/weeks/<n>.html.erb
    render "creative_code/weeks/#{@week}"
  end

  private

  def require_auth!
    authenticate_or_request_with_http_basic("AT101") do |u, p|
      ActiveSupport::SecurityUtils.secure_compare(u, "admin") &&
      ActiveSupport::SecurityUtils.secure_compare(p, "LianaB")
    end
  end
end

