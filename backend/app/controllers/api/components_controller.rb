class Api::ComponentsController < ApplicationController
  def index
    render json: { components: [{ title: "first component" }, { title: "second component" }] }
  end
end
