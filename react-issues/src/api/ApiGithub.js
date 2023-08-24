import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const ACCESS_TOKEN = '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';

const axiosInstance = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const searchBugs = async (keyword) => {
  try {
    console.log("Keyword a buscar: ",keyword);
    const responseIssues = await axiosInstance.get('/repos/facebook/react/issues', {
      params: {
        state: 'open',
        q: `is:issue is:open label:bug ${keyword}`,
      },
    }
    );
    const formattedIssues = responseIssues.data.map((issue) => ({
      id: issue.id,
      title: issue.title,
      url: issue.html_url,
    }));

    console.log(formattedIssues);
    return responseIssues.data;
  } catch (error) {
    throw error;
  }
};
