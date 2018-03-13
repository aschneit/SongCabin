class Track < ApplicationRecord
  validates :title, presence: true
  validates :album, presence: true
  validates :order, presence: true

  has_attached_file :audio

  validates_attachment :audio, content_type: { content_type: "media/x-wav" }

  belongs_to :album,
  class_name: 'Album',
  primary_key: :id,
  foreign_key: :album_id
end
