Blogonrails::Application.routes.draw do
  # get "archive/index"
  # get "home/index"

  resources :posts do
    collection do
      get 'archive'
    end
  end



  root :to => 'posts#index'

end
