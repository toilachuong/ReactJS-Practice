import axios from 'axios';
const KEY = "AIzaSyBnoF-ocoMJZxIa43-yGQlXL3T-0qjphxU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
