class User < ApplicationRecord
  validates :band_name, :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password , length: {minimum: 6, allow_nil: true}
  has_attached_file :image, default_url: "billfrisell.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :albums,
  primary_key: :id,
  class_name: 'Album',
  foreign_key: :artist_id

  has_many :tracks,
  through: :albums,
  source: :tracks

  attr_reader :password

  def self.find_by_credentials(band_name, password)
    user = User.find_by(band_name: band_name)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    return self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    unless self.session_token
      self.session_token = SecureRandom.urlsafe_base64
    end
  end

  def most_recent_album
    self.albums.last
  end

end
