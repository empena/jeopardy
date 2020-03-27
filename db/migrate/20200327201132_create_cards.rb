class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :answer
      t.string :points

      t.timestamps
    end
  end
end
