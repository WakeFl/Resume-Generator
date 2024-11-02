import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

interface UserProfileProps {
  response: {
    name?: string;
    login?: string;
    location?: string;
    html_url?: string;
    avatar_url?: string;
    created_at?: string;
    public_repos?: number;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ response }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        {response.name && (
          <>
            <h1 className="font-semibold text-xl mb-2">{response.name}</h1>
            <h2 className="font-semibold text-l mb-2">
              {response.login || "N/A"}
            </h2>
          </>
        )}
        {response.location && <span>{response.location}</span>}
        {response.html_url && (
          <a className="text-cyan-500 mt-2" href={response.html_url}>
            GitHub Profile
          </a>
        )}
      </div>
      {response.avatar_url && (
        <Avatar className="w-28 h-28">
          <AvatarImage
            src={response.avatar_url}
            alt={`${response.name}'s avatar`}
          />
        </Avatar>
      )}
    </div>
  );
};

export default UserProfile;
