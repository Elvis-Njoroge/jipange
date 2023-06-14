class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :category, :amount, :date
end
