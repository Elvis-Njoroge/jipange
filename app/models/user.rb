class User < ApplicationRecord
    has_secure_password
    has_many :budgets, dependent: :destroy
    has_many :goals, dependent: :destroy
    has_many :expenses, dependent: :destroy
    has_many :assets, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: {in: 8..20}
    
    before_save {self.email.downcase!}
end
