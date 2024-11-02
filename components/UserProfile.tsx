import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

interface UserProfileProps {
  user: {
    name?: string;
    login?: string;
    location?: string;
    html_url?: string;
    avatar_url?: string;
    created_at?: string;
    public_repos?: number;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        {user.name && (
          <>
            <h1 className="font-semibold text-xl mb-2">{user.name}</h1>
            <h2 className="font-semibold text-l mb-2">{user.login || "N/A"}</h2>
          </>
        )}
        {user.location && <span>{user.location}</span>}
        {user.html_url && (
          <a className="text-cyan-500 mt-2" href={user.html_url}>
            GitHub Profile
          </a>
        )}
      </div>
      {user.avatar_url && (
        <Avatar className="w-28 h-28">
          <AvatarImage src={user.avatar_url} alt={`${user.name}'s avatar`} />
        </Avatar>
      )}
    </div>
  );
};

export default UserProfile;
