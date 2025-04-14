# config/routes.rb
Rails.application.routes.draw do
  root "profile#index"          # Home page (landing)
  get "/coding",     to: "profile#coding"
  get "/design",     to: "profile#design"
  get "/photography",to: "profile#photography"
  get "/music",      to: "profile#music"
end

