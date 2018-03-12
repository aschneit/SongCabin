# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(band_name: 'Rock Turtles', email: "rockturtles@gmail.com", password: "iamaturtle1",
  band_location: 'Idaho', band_description: 'we rock as turtles', band_website: 'www.turtles.com')
User.create(band_name: 'ron davis', email: "rondavis", password: "rondavis",
  band_location: 'New York', band_description: 'This man has skills', band_website: 'www.rondavis.com')

Album.destroy_all
Album.create(title: 'Rocking like a turtle', description: 'this is the greatest', artist_id: 3)
Album.create(title: 'turtletime', description: 'good follow up', artist_id: 3)
Album.create(title: 'death to turtles', description: 'final hurrah', artist_id: 3)
Album.create(title: 'Rons Rules', description: 'everyone loves this one', artist_id: 4)
Album.create(title: 'Ron Time', description: "can't beat this", artist_id: 4)
Album.create(title: 'Ron dies', description: 'final hurrah', artist_id: 4)


Track.destroy_all
Track.create(title: 'track 1', album_id: 7, order: 1)
Track.create(title: 'track 2', album_id: 7, order: 2)
Track.create(title: 'track 1', album_id: 8, order: 1)
Track.create(title: 'track 2', album_id: 8, order: 2)
Track.create(title: 'track 1', album_id: 9, order: 1)
Track.create(title: 'track 2', album_id: 9, order: 2)
Track.create(title: 'track 1', album_id: 10, order: 1)
Track.create(title: 'track 2', album_id: 10, order: 2)
Track.create(title: 'track 1', album_id: 11, order: 1)
Track.create(title: 'track 2', album_id: 11, order: 2)
Track.create(title: 'track 1', album_id: 12, order: 1)
Track.create(title: 'track 2', album_id: 12, order: 2)
