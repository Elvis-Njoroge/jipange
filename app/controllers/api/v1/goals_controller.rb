class Api::V1::GoalsController < ApplicationController
  before_action :set_goal, only: %i[ show update destroy ]

  # GET /goals
  def index
    @goals = current_user.goals.all
    render json: @goals
  end

  # GET /goals/1
  def show
    render json: @goal
  end

  # POST /goals
  def create
    @goal = current_user.goals.create!(goal_params)
    render json: @goal, status: :created
  end

  # PATCH/PUT /goals/1
  def update
    if @goal.update(goal_params)
      render json: @goal
    else
      render json: @goal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /goals/1
  def destroy
    @goal.destroy
  end

  private

    def set_goal
      @goal = Goal.find(params[:id])
    end

    def goal_params
      params.require(:goal).permit(:description, :duration, :amount, :deadline)
    end
end
