class User < ApplicationRecord
  validates :band_name, :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password , length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  has_many :albums

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

end
