Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/contact'
  get 'pages/about'
  resources :products, only: [:index]
  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
end
