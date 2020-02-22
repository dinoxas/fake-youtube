import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyBC80Sl0cbQHdpFQ0yT-iT6AkhxJl9nD0g"
  }
});
