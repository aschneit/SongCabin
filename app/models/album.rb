class Album < ApplicationRecord
  validates :title, presence: true
  validates :artist, presence: true
  validates :tracks, presence: true


  has_attached_file :image, default_url: "charlie-haden.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :artist,
  primary_key: :id,
  class_name: 'User',
  foreign_key: :artist_id

  has_many :tracks,
  class_name: 'Track',
  primary_key: :id,
  foreign_key: :album_id,
  inverse_of: :album

  accepts_nested_attributes_for :tracks
end
