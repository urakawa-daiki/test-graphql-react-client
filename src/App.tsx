import UserDisplay from "./components/UserDisplay";
import { useQuery } from "urql";
import { GetUsersDocument } from "./graphql/generated";

function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
    variables: {},
  });

  const { data, fetching, error } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {data?.users.map((user, i) => (
        <UserDisplay user={user} key={i} />
      ))}
    </div>
  );
}

export default App;
