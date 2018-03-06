class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :band_name, null: false
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.text :band_description
      t.string :band_location
      t.string :band_website
      t.timestamps
    end
    add_index :users, :email
    add_index :users, :session_token
  end
end
