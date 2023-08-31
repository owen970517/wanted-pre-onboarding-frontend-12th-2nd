import axios from "axios";
import { API_URL } from "../constants/urls";
const baseURL = `${API_URL.github}/${API_URL.organization}/${API_URL.repo}`
interface paramsProps {
    state: string;
    sort : string;
    page : number;
}

const githubAxios = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer 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`,
  },
});

export const getIssues = async (params:paramsProps) => {
    const data = await githubAxios.get('/issues', {
      params,
    });

    return data;
};
  
export const getIssue = async (issueNumber:string) => {
    const data = await githubAxios.get(`/issues/${issueNumber}`);

    return data;
};