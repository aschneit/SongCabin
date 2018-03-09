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

Track.create(title: 'yeah turtles', album_id: 1, order: 1)

Album.create(title: 'Rocking like a turtle', description: 'this is the greatest', artist_id: 1)

User.create(band_name: 'RockTurtles', email: "rockturtles@gmail.com", password: "iamaturtle1")
