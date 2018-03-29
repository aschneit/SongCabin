class Api::AlbumsController < ApplicationController
  def index
    if params[:query] == 'all'
      @albums = Album.all
    else
      @albums = Album.where('title LIKE ?', "#{params[:query]}%")
    end
    render "api/albums/index"
  end


  def create
    @album = Album.new(album_params)
    if @album.save
      render "api/albums/show_all"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])
    if @album
      render "api/albums/show"
    else
      render json: 'No user'
    end
  end

  def update
    @album = Album.find(params[:id])
    if @album.update(album_params)
      render "api/albums/show_all"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def album_params
    params.require(:album).permit(:title, :description, :artist_id, :query, :image, tracks_attributes: [:title, :order, :audio])
  end
end
