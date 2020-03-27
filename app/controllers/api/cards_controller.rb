class Api::CardsController < ApplicationController
  before_action :set_card, only: [:show, :update, :destroy]
  def index
    render json: Card.all
  end

  def show
    render json: @card
  end

  # error 446 represents error in creating a card
  def create
    card = Card.new(card_params)

    if card.save
      render json: card
    else
      render json: card.errors, status: 446
    end
  end

  # error 447 represents error in updating a card
  def update
    card = @card.update(card_params)
    if card.save
      render json: card
    else
      render json: card.errors, status: 447
    end
  end

  def destroy
    @card.destroy
  end

  private

  def card_params
    params.require(:card).permit(:points, :answers)
  end

  def set_card
    @card = Card.find(params[:id])
  end
end