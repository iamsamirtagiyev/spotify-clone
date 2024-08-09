import { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const clientId = "d3df23ab227f461486d6012895eedefe";
  const redirectURL = 'http://localhost:5173/'
  const apiURL = "https://accounts.spotify.com/authorize";
  const scope = [
    "user-read-email",
    "user-read-private",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
  ];

  const [token, setToken] = useState("");
  const [trackId, setTrackId] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [tracks, setTracks] = useState(null);
  const [play, setPlay] = useState(false);
  const options = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const data = {
    clientId,
    redirectURL,
    apiURL,
    scope,
    token,
    setToken,
    options,
    trackId,
    setTrackId,
    tracks,
    setTracks,
    currentTrack,
    setCurrentTrack,
    play,
    setPlay,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
