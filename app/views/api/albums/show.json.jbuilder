
  @album.tracks.each do |track|
    json.set! track.id do
        json.extract! track, :id, :title, :order, :album_id
    end
  end
