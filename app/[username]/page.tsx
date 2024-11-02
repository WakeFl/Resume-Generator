import { FC } from "react";

interface Params {
  params: {
    username: string;
  };
}

const ResumePage: FC<Params> = ({ params }) => {
  const { username } = params;

  return (
    <section>
      <h1>User Profile: {username}</h1>
    </section>
  );
};

export default ResumePage;
