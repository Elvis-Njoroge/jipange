class Asset < ApplicationRecord
    belongs_to :user
    enum category: { shares: 0, bonds: 1, real_estate: 2, land:3, other: 4 }
end
