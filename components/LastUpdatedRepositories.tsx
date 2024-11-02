import { UserRepository } from "@/lib/api/github/types";
import { formatReadableDate } from "@/lib/utils";
import React from "react";

interface LastUpdatedRepositoriesProps {
  repositories: UserRepository[];
}

const LastUpdatedRepositories: React.FC<LastUpdatedRepositoriesProps> = ({
  repositories,
}) => {
  return (
    <>
      <hr className="my-8" />
      <h2 className="font-semibold text-l mb-4">Last Updated Repositories</h2>
      <div className="flex flex-wrap gap-16">
        {repositories.map((repo) => (
          <div className="flex flex-col mb-8" key={repo.id}>
            <a className="text-lg text-cyan-500 font-bold" href={repo.html_url}>
              {repo.name}
            </a>
            <span>{repo.language || "Language not specified"}</span>
            <span>
              {formatReadableDate(repo.updated_at) || "Date not available"}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default LastUpdatedRepositories;
