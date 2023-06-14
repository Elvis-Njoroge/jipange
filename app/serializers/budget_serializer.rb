class BudgetSerializer < ActiveModel::Serializer
  attributes :id, :description, :duration, :amount
end
