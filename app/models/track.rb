class Track < ApplicationRecord
  validates :title, presence: true
  validates :album, presence: true
  validates :order, presence: true

  has_attached_file :audio, default_url: "Jenny.mp3"

  validates_attachment_content_type :audio, :content_type =>
  ['audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3',
    'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg',
    'audio/x-mpegaudio', 'audio/aac']

  belongs_to :album,
  class_name: 'Album',
  primary_key: :id,
  foreign_key: :album_id,
  inverse_of: :tracks
end
