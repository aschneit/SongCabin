class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    if @album.save
      render: "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = Album.find(params[:id])
    if @album
      @album.update(album_params)
      render: "api/albums/show"
    else
      render json: @album.errors.full_messages, status 422
    end
  end

  def album_params
    params.require(:albums).permit(:title, :description, :artist_id)
  end
end
