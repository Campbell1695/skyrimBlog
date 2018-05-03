Rails.application.routes.draw do


  root 'welcome#index'
  get  '/signup',  to: 'users#new'
  post '/signup',  to: 'users#create'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  get    '/articles',   to: 'articles#index'

  resources :users

  resources :articles

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
