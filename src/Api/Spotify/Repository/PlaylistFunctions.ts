import axios from "axios";
import { getData } from "../../../Repository/Storage";

export async function getTopBrasil() {
    const accessToken = await getData("@access_token");
  
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/search?q=Top+50+-+Brasil&type=playlist`,
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
      console.log(err.message + " Top Brasil");
    }
  }
  
  export async function getTopMundo() {
    const accessToken = await getData("@access_token");
  
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/search?q=Top+50+-+Global&type=playlist`,
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
      console.log(err.message + " Top Mundo ");
    }
  }
  
  export async function getTopHoje() {
    const accessToken = await getData("@access_token");
  
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/search?q=Today%27s+Top+Hits&type=playlist`,
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
      console.log(err.message + " Top Hoje");
    }
  }
  
  export async function getTopViral() {
    const accessToken = await getData("@access_token");
  
    try {
      const response = await axios({
        method: "GET",
        url: `https://api.spotify.com/v1/search?q=Viral+Hits&type=playlist`,
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
      console.log(err.message + " Top Viral");
    }
  }