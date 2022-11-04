class Api::ComponentsController < ApplicationController
  def index
    render json: {
      components: [
        { title: "first component from microservice" },
        { title: "second component from microservice" }
      ]
    }
  end
end
