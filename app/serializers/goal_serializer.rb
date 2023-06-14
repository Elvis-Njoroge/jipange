class GoalSerializer < ActiveModel::Serializer
  attributes :id, :description, :duration, :amount, :deadline
end
