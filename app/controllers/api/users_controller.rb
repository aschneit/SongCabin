class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render "api/users/artist"
    else
      render json: 'No user'
    end
  end

  

  def user_params
    params.require(:user).permit(:band_name, :email, :password, :band_description, :band_location, :band_website, :image)
  end
end
