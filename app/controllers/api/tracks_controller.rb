class Api::TracksController < ApplicationController
  def create
    @track = track.new(track_params)
    if @track.save
      render "api/tracks/show"
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
  end

  def destroy
  end

  def track_params
    params.require(:track).permit(:title, :album_id, :order, :audio)
  end
end
