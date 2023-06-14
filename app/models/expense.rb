class Expense < ApplicationRecord
    belongs_to :user
    enum category: { food: 0, transport: 1, entertainment: 2, housing: 3, other: 4 }
end
