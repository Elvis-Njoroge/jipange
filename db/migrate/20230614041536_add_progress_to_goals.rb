class AddProgressToGoals < ActiveRecord::Migration[7.0]
  def change
    add_column :goals, :progress, :integer, default: 0
  end
end
