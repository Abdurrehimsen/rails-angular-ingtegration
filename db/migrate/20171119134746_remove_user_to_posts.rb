class RemoveUserToPosts < ActiveRecord::Migration[5.1]
  def change
    remove_reference :posts, :user_id, foreign_key: true
  end
end
