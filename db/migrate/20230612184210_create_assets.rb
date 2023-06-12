class CreateAssets < ActiveRecord::Migration[7.0]
  def change
    create_table :assets do |t|
      t.string :name
      t.string :location
      t.decimal :value
      t.integer :category

      t.timestamps
    end
  end
end
