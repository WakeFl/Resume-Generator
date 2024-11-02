import { Avatar } from "@/components/ui/avatar";
import { githubApi } from "@/lib/api/github";
import { formatReadableDate, getLanguagesStatistic } from "@/lib/utils";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Languages } from "lucide-react";
import { FC } from "react";

interface Params {
  params: {
    username: string;
  };
}

const ResumePage: FC<Params> = async (props) => {
  const params = await props.params;
  const { username } = params;
  const response = await githubApi.getUser(username);

  if (!response) {
    return (
      <section>
        <h1 className="font-semibold text-xl">User {username} not found</h1>
      </section>
    );
  }

  const repositories = await githubApi.getRepositories(username);

  const statistic = getLanguagesStatistic(repositories);
  console.log(statistic);
  return (
    <section>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-semibold text-xl mb-2">{response?.name}</h1>
          <h2 className="font-semibold text-l mb-2">{response?.login}</h2>
          <span>{response?.location}</span>
          <a className=" text-cyan-500 mt-2" href={response?.html_url}>
            GitHub
          </a>
        </div>
        {response?.avatar_url && (
          <Avatar className="w-28 h-28">
            <AvatarImage src={response?.avatar_url} />
          </Avatar>
        )}
      </div>
      <hr className="my-8" />
      <div>
        <p>
          On GitHub since {formatReadableDate(response?.created_at)},{" "}
          {response.name} is a developer based in {response?.location} with{" "}
          {response?.public_repos} public repositories.
        </p>
      </div>
      <hr className="my-8" />
      <div>
        {statistic.map((language) => (
          <div className="mt-2" key={language.name}>
            {language.name}({language.value}%)
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumePage;
