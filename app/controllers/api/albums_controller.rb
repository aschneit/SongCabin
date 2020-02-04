class Api::AlbumsController < ApplicationController
  def index
    if params[:query] == 'all'
      @albums = Album.all
    else
      @albums = Album.where('lower(title) LIKE ?', "#{params[:query].downcase}%")
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
