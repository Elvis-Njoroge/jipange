class Api::V1::AssetsController < ApplicationController
  before_action :set_asset, only: %i[ show update destroy ]
  
  # GET /assets
  def index
    @assets = current_user.assets.all
    render json: @assets
  end

  # GET /assets/1
  def show
    render json: @asset
  end

  # POST /assets
  def create
    @asset = current_user.assets.create!(asset_params)
    render json: @asset, status: :created
  end

  # PATCH/PUT /assets/1
  def update
    if @asset.update(asset_params)
      render json: @asset
    else
      render json: @asset.errors, status: :unprocessable_entity
    end
  end

  # DELETE /assets/1
  def destroy
    @asset.destroy
  end

  private

    def set_asset
      @asset = Asset.find(params[:id])
    end


    def asset_params
      params.require(:asset).permit(:name, :location, :value, :category)
    end
end
