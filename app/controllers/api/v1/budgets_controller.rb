class Api::V1::BudgetsController < ApplicationController
  before_action :set_budget, only: %i[ show update destroy ]

  # GET /budgets
  def index
    @budgets = current_user.budgets.all
    render json: @budgets
  end

  # GET /budgets/1
  def show
    render json: @budget
  end

  # POST /budgets
  def create
    @budget = current_user.budgets.create!(budget_params)
    render json: @budget, status: :created
  end

  # PATCH/PUT /budgets/1
  def update
    if @budget.update(budget_params)
      render json: @budget
    else
      render json: @budget.errors, status: :unprocessable_entity
    end
  end

  # DELETE /budgets/1
  def destroy
    @budget.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_budget
      @budget = Budget.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def budget_params
      params.require(:budget).permit(:description, :duration, :amount)
    end
end
