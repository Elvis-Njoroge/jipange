class Api::V1::AuthController < ApplicationController
  def create
    if params[:user].present?
      authenticate_user
    else 
      render json: { error: 'Invalid login request' }, status: :unprocessable_entity
    end
  end

  private

  def authenticate_user
    @user = User.find_by(username: login_params[:username])
    if @user && @user.authenticate(login_params[:password])
      token = encode_token({ user_id: @user.id ,username: @user.username })
      render json: { user: UserSerializer.new(@user), jwt: token}, status: :accepted
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized    
    end
  end

  def login_params
    params.require(:user).permit(:username, :password)
  end
end
