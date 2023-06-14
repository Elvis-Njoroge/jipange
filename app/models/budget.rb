class Budget < ApplicationRecord
    belongs_to :user
    enum duration: { daily: 0, weekly: 1, monthly: 2, yearly: 3, other: 4 }
end
