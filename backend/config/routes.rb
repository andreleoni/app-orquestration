Rails.application.routes.draw do
  namespace :api do
    get :components, action: :index, controller: 'components'
  end
end
