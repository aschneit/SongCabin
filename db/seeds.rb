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
  band_location: 'New York', band_description: 'An innovative stylist who influenced singers for generations', band_website: 'www.billieholiday.com',
image:
"http://s3.amazonaws.com/songcabin-dev/users/images/000/000/003/original/billie-holiday.jpg")

u2 = User.create!(band_name: 'Ben Webster', email: "ben@benwebster.com", password: "benwebster",
  band_location: 'New York', band_description: 'King of tenor saxophonists with a warm but gruff sound', band_website: 'www.benwebster.com',
image: "http://s3.amazonaws.com/songcabin-dev/users/images/000/000/005/original/benwebster2.jpg")

u3 = User.create!(band_name: 'Sonny Rollins', email: "sonny@sonnyrollins.com", password: "sonnyrollins",
  band_location: 'New York', band_description: 'Melodic, motivic tenor saxophonist, a master of spontaneous improvisation', band_website: 'www.sonnyrollins.com',
image:
"http://s3.amazonaws.com/songcabin-dev/users/images/000/000/004/original/sonnyrollins2.jpg")


a1 = Album.create!(title: 'Good Morning Blues',
  description: 'This collection includes a little over 200 tracks of Billie Holiday at the peak of her career, accompanied by some of the greatest jazz musicians of the era (including Lester Young, Count Basie, Benny Carter, Benny Goodman, Teddy Wilson, Roy Eldridge). The sound quality is what you would expect from the time of the recordings, and to my ear the tracks have not been remastered when compared to the sound of previous re-issues of the same material on vinyl LP. Although the rhythm section and ensemble playing sound muffled and distant, the lead vocals and jazz solo instrumentals shine through. There are several versions of some of the songs, but all are complete takes, and if you listen in a shuffle mode, the collection is so large that you rarely will hear the same song in close sequence with a different version. All in all, it is a great value for a jazz enthusiast, but a casual listener might be better off with a "best of" collection.',
   image: "http://s3.amazonaws.com/songcabin-dev/albums/images/000/000/007/original/Good_Morning_Blues.jpg",
   artist_id: u1.id)

a2 = Album.create!(title: 'Billie Holiday & Lester Young',
  description: 'All their collaborative work, plus some alternative versions to well-know songs. The quality of the recordings vary, but it is not important. A must have for every jazz fanatic.',
  image: "http://s3.amazonaws.com/songcabin-dev/albums/images/000/000/008/original/BillieandLester.jpg",
   artist_id: u1.id)

a3 = Album.create!(title: 'Alfie', description: 'Alfie is a 1966 album by jazz saxophonist Sonny Rollins of music from the film of the same name. The original British film soundtrack featured Rollins with local musicians, including pianist Stan Tracey, who are not heard on this album.
It features performances by Rollins, with Kenny Burrell, Jimmy Cleveland, J.J. Johnson and Roger Kellaway, arranged and conducted by Oliver Nelson.',
image: "http://s3.amazonaws.com/songcabin-dev/albums/images/000/000/011/original/Alfie.jpg", artist_id: u3.id)

a4 = Album.create!(title: 'King of the Tenors', description: "King of the Tenors is an album by American jazz saxophonist Ben Webster featuring tracks recorded in 1953 for the Norgran label and originally released as The Consummate Artistry of Ben Webster (MGN 1001). The album was re-issued in 1957 on Verve Records as King of the Tenors (MGV 8020), and has been released with that title ever since. Webster is accompanied by The Oscar Peterson Trio, and, on several tracks, by Benny Carter and Harry \"Sweets\" Edison.", image: "http://s3.amazonaws.com/songcabin-dev/albums/images/000/000/009/original/kingofthetenors.jpg",
artist_id: u2.id)

a5 = Album.create!(title: 'Music for Loving', description: "Combining two string albums by Ben Webster and one from Ellington sideman Harry Carney, the two-disc Music With Feeling delivers over two hours' worth of incredible ballad interpretations. Webster, of course, made his name with many an after-hours gem, and he predictably shines here amidst the lush yet tasteful orchestral charts ",
  image: "http://s3.amazonaws.com/songcabin-dev/albums/images/000/000/010/original/musicforloving.jpg", artist_id: u2.id)






Track.create!(title: 'You Go to My Head', album_id: a1.id, order: 1, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/013/original/1-17_You_Go_To_My_Head.mp3?1521171544")
Track.create!(title: 'Easy Living', album_id: a1.id, order: 2, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/014/original/1-13_Easy_Living.mp3?1521171544")
Track.create!(title: 'Mean to Me', album_id: a1.id, order: 3, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/015/original/1-12_Mean_To_Me.mp3?1521171544")
Track.create!(title: 'These Foolish Things', album_id: a1.id, order: 4, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/016/original/2-17_These_Foolish_Things.mp3?1521171544")
Track.create!(title: 'Why Was I Born', album_id: a1.id, order: 5, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/017/original/1-10_Why_Was_I_Born_.mp3?1521171544")
Track.create!(title: "Foolin' Myself", album_id: a2.id, order: 1, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/018/original/08_Foolin'_Myself.mp3?1521172334")
Track.create!(title: "I'll Never Be the Same", album_id: a2.id, order: 2, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/019/original/10_I'll_Never_Be_The_Same.mp3?1521172334")
Track.create!(title: "He's Funny That Way", album_id: a2.id, order: 3, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/020/original/18_He's_Funny_That_Way.mp3?1521172335")
Track.create!(title: "Alfie's Theme", album_id: a3.id, order: 1, audio:  "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/029/original/01_Alfie's_Theme.mp3?1521178417")
Track.create!(title: "He's Younger than You Are", album_id: a3.id, order: 2, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/030/original/02_He's_Younger_Than_You_Are.mp3?1521178417")
Track.create!(title: "On Impulse", album_id: a3.id, order: 3, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/031/original/05_On_Impulse.mp3?1521178417")
Track.create!(title: 'Tenderly', album_id: a4.id, order: 1, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/021/original/01_Tenderly.mp3?1521176171")
Track.create!(title: "Pennies from Heaven", album_id: a4.id, order: 2, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/022/original/06_Pennies_from_Heaven.mp3?1521176171")
Track.create!(title: "Cottontail", album_id: a4.id, order: 3, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/023/original/07_Cotton_Tail.mp3?1521176171")
Track.create!(title: "Jive at Six", album_id: a4.id, order: 4, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/028/original/02_Jive_at_Six.mp3?1521176633")
Track.create!(title: "Prelude to a Kiss", album_id: a5.id, order: 1, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/025/original/1-15_Prelude_To_A_Kiss.mp3?1521176633")
Track.create!(title: "There is No Greater Love", album_id: a5.id, order: 2, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/026/original/1-03_There_Is_No_Greater_Love.mp3?1521176633")
Track.create!(title: "Willow Weep for Me", album_id: a5.id, order: 3, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/027/original/1-02_Willow_Weep_For_Me.mp3?1521176633")
Track.create!(title: "Jive at Six", album_id: a5.id, order: 4, audio: "http://s3.amazonaws.com/songcabin-dev/tracks/audios/000/000/028/original/02_Jive_at_Six.mp3?1521176633")
