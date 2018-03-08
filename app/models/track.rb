class Track < ApplicationRecord
  validates :title, presence: true
  validates :album, presence: true
  validates :order, presence: true

  belongs_to :album,
  class_name: 'Album',
  primary_key: :id,
  foreign_key: :album_id
end
