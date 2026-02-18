import CreateUser from "../Features/user/CreateUser";
function Home() {
  return (
    <div className="my-10 px-4 sm:my-16 text-center">
      <h1 className="text-xl text-yellow-500 font-semibold text-center mb-8 md:text-3xl">
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      <CreateUser/>
    </div>
  );
}

export default Home;
