import CreateUser from "../features/user/CreateUser";

export default function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8 text-xl font-semibold">
        Home
        <br />
        <span className="text-yellow-500">The online best library app</span>
      </h1>

      <CreateUser />
    </div>
  );
}
