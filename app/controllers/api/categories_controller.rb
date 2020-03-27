class Api::CategoriesController < ApplicationController
before_action :set_category, only: [:show, :update, :destroy]
  def index
    render json: Category.all
  end

  def show
    render json: @category
  end

  # error 444 represents error in creating a category
  def create
    category = Category.new(category_params)

    if category.save
      render json: category
    else
      render json: category.errors, status: 444
    end
  end

  # error 445 represents error in updating a category
  def update
    category = @category.update(category_params)
    if category.save
      render json: category
    else
      render json: category.errors, status: 445
    end
  end

  def destroy
    @category.destroy
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

  def set_category
    @category = Category.find(params[:id])
  end
end