import { Octokit } from "octokit";
import { GithubUser, UserRepository } from "./types";

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

const getUser = async (username: string): Promise<GithubUser | undefined> => {
  try {
    const res = await octokit.request(`GET /users/${username}`, {
      username,
    });
    return res.data;
  } catch (error) {
    console.log("Error fetching user:", error);
  }
};

const getRepositories = async (username: string): Promise<UserRepository[]> => {
  try {
    const res = await octokit.request(`GET /users/${username}/repos`, {
      username,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw new Error("Failed to fetch repositories");
  }
};

export const githubApi = {
  getUser,
  getRepositories,
};
