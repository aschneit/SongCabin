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

u1 = User.create!(band_name: 'Billie Holiday', email: "billie@billie.com", password: "billieholiday",
  band_location: 'New York', band_description: 'An innovative stylist who influenced singers for generations', band_website: 'www.billieholiday.com')
u2 = User.create!(band_name: 'Ben Webster', email: "ben@benwebster.com", password: "benwebster",
  band_location: 'New York', band_description: 'King of tenor saxophonists with a warm but gruff sound', band_website: 'www.benwebster.com')
u3 = User.create!(band_name: 'Sonny Rollins', email: "sonny@sonnyrollins.com", password: "sonnyrollins",
  band_location: 'New York', band_description: 'Melodic, motivic tenor saxophonist, a master of spontaneous improvisation', band_website: 'www.sonnyrollins.com')


a1 = Album.create!(title: 'Good Morning Blues', description: 'this is the greatest', artist_id: u1.id)
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
