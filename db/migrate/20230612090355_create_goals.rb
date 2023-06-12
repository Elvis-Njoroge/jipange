class CreateGoals < ActiveRecord::Migration[7.0]
  def change
    create_table :goals do |t|
      t.string :description
      t.integer :duration
      t.decimal :amount
      t.date :deadline

      t.timestamps
    end
  end
end
