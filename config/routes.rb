Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/contact'
  get 'pages/about'
end
