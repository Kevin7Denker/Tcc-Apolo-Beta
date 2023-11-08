import axios from "axios";
import { getData } from "../../../Repository/Storage";

export async function getMusica(nome: String) {
  const accessToken = await getData("@access_token");

  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/search?q=${nome}&type=track&limit=35`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const musica = response.data.tracks.items;

    return musica;
  } catch (err) {
    console.log(err.message + " Musica");
  }
}

export async function getMusicaId(id: String) {
  const accessToken = await getData("@access_token");

  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/tracks/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const musica = response.data;

    return musica;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getPlaylist(nome: String) {
  const accessToken = await getData("@access_token");

  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/search?q=${nome}&type=playlist&limit=30`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const id = response.data.playlists.items[0].id;

    const responses = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/playlists/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const playlist = responses.data;
    return playlist;
  } catch (err) {
    console.log(err.message + " Playlist");
  }
}

export async function getAlbum(id: String) {
  const accessToken = await getData("@access_token");
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/albums/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const album = response.data;

    return album;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getArtist(nome: String) {
  const accessToken = await getData("@access_token");

  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/search?q=${nome}&type=artist`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const artist = response.data.artists.items;
    return artist;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getPlaylists(nome: String) {
  const accessToken = await getData("@access_token");

  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/search?q=${nome}&type=playlist&limit=30`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const playlists = response.data.playlists;
    return playlists;
  } catch (err) {
    console.log(err.message + " Playlists");
  }
}

export async function getArtistAlbum(id: String) {
  const accessToken = await getData("@access_token");

  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/artists/${id}/albums `,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const playlists = response.data;
    return playlists;
  } catch (err) {
    console.log(err.message + " Playlist");
  }
}

export async function getArtistId(id: String) {
  const accessToken = await getData("@access_token");
 
  try {
    const response = await axios({
      method: "GET",
      url: ` https://api.spotify.com/v1/artists/${id} `,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data

  } catch (err) {
    console.log(err.message + " ArtistaID");
  }
}
