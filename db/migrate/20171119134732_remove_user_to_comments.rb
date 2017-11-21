class RemoveUserToComments < ActiveRecord::Migration[5.1]
  def change
    remove_reference :comments, :user_id, foreign_key: true
  end
end
