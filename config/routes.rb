Rails.application.routes.draw do
  get 'fallback/index'
  namespace :api do
    namespace :v1 do
      resources :assets
      resources :goals
      resources :expenses
      resources :budgets
      resources :users
      post '/login', to: 'auth#create'
    end
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
