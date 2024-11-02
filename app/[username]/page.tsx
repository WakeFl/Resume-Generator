import UserProfile from "@/components/UserProfile";
import LanguageStatistics from "@/components/LanguageStatistics";
import { githubApi } from "@/lib/api/github";
import {
  formatReadableDate,
  getLanguagesStatistic,
  getLastUpdatedRepositories,
} from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import LastUpdatedRepositories from "@/components/LastUpdatedRepositories";

interface Params {
  params: {
    username: string;
  };
}

const ResumePage: FC<Params> = async (props) => {
  const params = await props.params;
  const { username } = params;

  const user = await githubApi.getUser(username);

  if (!user || "error" in user) {
    return (
      <section className="text-center">
        <h1 className="font-semibold text-xl">User {username} not found</h1>
        <Link className="text-cyan-500 my-4 block" href={"/"}>
          Return to Home Page
        </Link>
      </section>
    );
  }

  const repositories = await githubApi.getRepositories(username);
  const lastRepos = getLastUpdatedRepositories(repositories);
  const statistic = getLanguagesStatistic(repositories);

  return (
    <section>
      <Link className="text-cyan-500 mb-4 block" href={"/"}>
        / Home
      </Link>
      <UserProfile user={user} />
      <hr className="my-8" />
      {user.created_at && (
        <div>
          <h2 className="font-semibold text-l mb-4">Profile</h2>
          <p>
            On GitHub since {formatReadableDate(user.created_at)}, {user.name}{" "}
            is a developer based in {user.location || "Location not available"}{" "}
            with {user.public_repos || 0} public repositories.
          </p>
        </div>
      )}
      {statistic.length > 0 && (
        <LanguageStatistics statistics={statistic} login={user.login} />
      )}
      {lastRepos.length > 0 && (
        <LastUpdatedRepositories repositories={lastRepos} />
      )}
    </section>
  );
};

export default ResumePage;
