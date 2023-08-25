import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
//se tuvo que usar aquí el token porque al crearlo en el .env no funcionaba por detalles de commpilación
const ACCESS_TOKEN = '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';//agrega aquí tu token personal creado en GITHUB

const axiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const searchBugs = async (keyword, pageNumber) => {
  try {
    console.log("Keyword a buscar: ", keyword);
    const perPage = 10;
    const responseIssues = await axiosInstance.get('/repos/facebook/react/issues', {
      params: {
        state: 'open',
        q: `is:issue is:open label:bug ${keyword}`,
        per_page: perPage,
        page: pageNumber,
      },
    });
    console.log(responseIssues.data);
    return responseIssues.data;
  } catch (error) {
    throw error;
  }
};