import CreateUser from "../features/user/CreateUser";

export default function Home() {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        Library
        <br />
        <span className="text-yellow-500">The online best library app</span>
      </h1>

      <CreateUser />
    </div>
  );
}
