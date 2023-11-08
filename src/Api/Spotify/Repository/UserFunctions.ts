import axios from "axios";
import { getData } from "../../../Repository/Storage";

export const getPerfil = async () => {
  const accessToken = await getData("@access_token");
  try {
    const response = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/me",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.data;

    return data;
  } catch (err) {
    console.log(err.message + "Perfil");
  }
};

export const getRecentes = async () => {
  const accessToken = await getData("@access_token");
  try {
    const response = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/me/player/recently-played?offset=0&limit=20",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const musicas = response.data.items;
    return musicas;
  } catch (err) {
    console.log(err.message + " Recentes");
  }
};

export async function topArtistas() {
  const accessToken = await getData("@access_token");
  try {
    const response = await axios({
      method: "GET",
      url: "https://api.spotify.com/v1/me/top/artists",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const musicas = response.data.items;
    return musicas;
  } catch (err) {
    console.log(err.message + "Artistas");
  }
}

export async function getTopMusicas() {
  const accessToken = await getData("@access_token");

  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/me/top/tracks`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const musicas = response.data.items.name;
    return musicas;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getUserPlaylists() {
  const accessToken = await getData("@access_token");
  const id = await getPerfil();
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/users/${id.id}/playlists`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const playlist = response.data.items;
    return playlist;
  } catch (err) {
    console.log(err.message);
  }
}

export async function getRecomendedArtist(){
  const accessToken = await getData("@access_token");
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.spotify.com/v1/me/following?type=artist&after=0&limit=50`,
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