# config/routes.rb
Rails.application.routes.draw do
  root "profile#index"          # Home page (landing)
  get "/coding",     to: "profile#coding"
  get "/design",     to: "profile#design"
  get "/photography",to: "profile#photography"
  get "/music",      to: "profile#music"
  # AT101 (password-protected)
  get "/at101",              to: "creative_code#index", as: :at101
  get "/at101/weeks/:id",    to: "creative_code#week",  as: :at101_week

end

