import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../../context";
import { removeFavorite } from "../../stores/favorite";
import { FaCheck } from "react-icons/fa6";

const favorites = () => {
  const { favoriteTracks } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  const {
    setTrackId,
    tracks,
    trackId,
    setTracks,
    currentTrack,
    setCurrentTrack,
  } = useContext(Context);

  setTracks(favoriteTracks);
  setCurrentTrack(tracks[trackId]);

  const rmFavorite = (track) => {
    dispatch(removeFavorite(track));
  };


  return (
    <div>
      <header className="p-5 h-56 flex flex-col gap-3 justify-end rounded-t-md bg-gradient-to-l from-blue-500 to-red-500">
        <h1 className="text-5xl font-bold">Liked Songs</h1>
      </header>
      {favoriteTracks.length > 0 ? (
        <div className="w-full bg-black/40 backdrop-blur-3xl">
          <table className="w-full p-2">
            <thead>
              <tr className="">
                <th>#</th>
                <th>Title</th>
                <th className="text-right">Album</th>
              </tr>
            </thead>
            <thead>
              {favoriteTracks.map((track, key) => (
                <tr
                  onClick={() => setTrackId(key)}
                  key={key}
                  className="hover:bg-white/15 cursor-pointer transition-all duration-500 rounded-md mb-2"
                >
                  <td className="p-2 px-3 font-medium">{key + 1}</td>
                  <td className="flex gap-2.5 items-center py-2">
                    <img
                      className="aspect-square w-11 rounded-md"
                      src={track?.album.images[0].url}
                      alt="album"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium">{track?.name}</p>
                      <div className="flex gap-1">
                        {track?.artists.map((artist, key) => (
                          <p className="text-white/30 font-medium" key={key}>
                            {artist.name},
                          </p>
                        ))}
                      </div>
                    </div>
                    <button
                      className="add"
                      onClick={() => rmFavorite(track)}
                    >
                      <div className="bg-green-600 rounded-full p-1">
                        <FaCheck />
                      </div>
                    </button>
                  </td>
                  <td className="font-medium text-white/30 text-right pr-5">
                    
                    {track?.album.name}
                  </td>
                </tr>
              ))}
            </thead>
          </table>
        </div>
      ) : (
        <div className="w-full hidden h-full p-5 sm:flex items-center justify-center text-white">
          No Music
        </div>
      )}
    </div>
  );
};

export default favorites;
