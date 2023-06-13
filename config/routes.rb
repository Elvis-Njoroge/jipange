Rails.application.routes.draw do
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
end
