# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Album.destroy_all
Track.destroy_all

u1 = User.create!(band_name: 'Rock Turtles', email: "rockturtles@gmail.com", password: "iamaturtle1",
  band_location: 'Idaho', band_description: 'we rock as turtles', band_website: 'www.turtles.com')
u2 = User.create!(band_name: 'ron davis', email: "rondavis", password: "rondavis",
  band_location: 'New York', band_description: 'This man has skills', band_website: 'www.rondavis.com')


a1 = Album.create!(title: 'Rocking like a turtle', description: 'this is the greatest', artist_id: u1.id)
a2 = Album.create!(title: 'turtletime', description: 'good follow up', artist_id: u1.id)
a3 = Album.create!(title: 'death to turtles', description: 'final hurrah', artist_id: u1.id)
a4 = Album.create!(title: 'Rons Rules', description: 'everyone loves this one', artist_id: u2.id)
a5 = Album.create!(title: 'Ron Time', description: "can't beat this", artist_id: u2.id)
a6 = Album.create!(title: 'Ron dies', description: 'final hurrah', artist_id: u2.id)



Track.create!(title: 'track 1', album_id: a1.id, order: 1)
Track.create!(title: 'track 2', album_id: a1.id, order: 2)
Track.create!(title: 'track 1', album_id: a2.id, order: 1)
Track.create!(title: 'track 2', album_id: a2.id, order: 2)
Track.create!(title: 'track 1', album_id: a3.id, order: 1)
Track.create!(title: 'track 2', album_id: a3.id, order: 2)
Track.create!(title: 'track 1', album_id: a4.id, order: 1)
Track.create!(title: 'track 2', album_id: a4.id, order: 2)
Track.create!(title: 'track 1', album_id: a5.id, order: 1)
Track.create!(title: 'track 2', album_id: a5.id, order: 2)
Track.create!(title: 'track 1', album_id: a6.id, order: 1)
Track.create!(title: 'track 2', album_id: a6.id, order: 2)
