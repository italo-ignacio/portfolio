import axios from "axios";

export default axios.create({
  baseURL: `https://italo-portfolio.vercel.app/api`,
});

/*

export default axios.create({
  baseURL: `https://italo-portfolio.vercel.app/api`,
});

export default axios.create({
  baseURL: `http://localhost:3000/api`,
});

*/
