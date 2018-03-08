class Album < ApplicationRecord
  validates :title, presence: true
  validates :artist, presence: true

  belongs_to :artist,
  primary_key: :id,
  class_name: 'User',
  foreign_key: :artist_id

  has_many :tracks,
  class_name: 'Track',
  primary_key: :id,
  foreign_key: :album_id
end
