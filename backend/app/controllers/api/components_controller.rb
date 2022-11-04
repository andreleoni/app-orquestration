class Api::ComponentsController < ApplicationController
  def index
    render json: { components: Component.all }
  end
end
