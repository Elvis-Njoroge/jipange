class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :rescue_from_record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_record_not_found

  require 'jwt'
  def encode_token(payload)
    JWT.encode(payload, ENV['SECRET_KEY'])
  end

  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, ENV['SECRET_KEY'], true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

    def user_logged_in?
        !!current_user
    end

  def authorized_user
    render json: { message: 'Please log in' }, status: :unauthorized unless user_logged_in?
  end

  def rescue_from_record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def rescue_from_record_not_found(invalid)
    render json: { errors: invalid}, status: :not_found
  end

end
