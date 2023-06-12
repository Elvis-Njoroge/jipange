class Expense < ApplicationRecord
    belongs_to :user
    enum category: { confirmed: 0, delivered: 1 }
end
