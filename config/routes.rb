Rails.application.routes.draw do
  root "profile#index"

  get "/coding",      to: "profile#coding"
  get "/design",      to: "profile#design"
  get "/photography", to: "profile#photography"
  get "/music",       to: "profile#music"

  # AT101 course pages
  get "/at101",           to: "creative_code#index", as: :at101
  get "/at101/weeks/:id", to: "creative_code#week",  as: :at101_week

  # Individual sketches (inside AT101)
  get "at101/weeks/:week/sketch/:sketch", to: "creative_code#sketch", as: :at101_sketch
end

