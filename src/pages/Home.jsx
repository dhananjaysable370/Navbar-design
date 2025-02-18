import bg from "../assets/R.jpeg";
const Home = () => {
  return (
    <div className="home">
      <div
        className={`bg-['${bg}'] bg-top bg-no-repeat bg-cover h-[80vh] absolute top-24 left-0 w-[100vw] flex items-center justify-center bg-[rgba(12,8,8,0.15)] flex-col gap-4 text-center`}
      >
        <h1 className="text-5xl">Cats Make Life Better</h1>
        <p className="text-xl text-gray-900">
          The key to a happy life if having a cat
        </p>
        <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold cursor-pointer">
          Adopt Meow
        </button>
      </div>
    </div>
  );
};

export default Home;
