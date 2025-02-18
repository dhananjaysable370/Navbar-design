import "./home.css";
const Home = () => {
  return (
    <div>
      <div
        className={`img h-[80vh] absolute top-24 left-0 w-[100vw] flex items-center justify-center bg-[rgba(12,8,8,0.15)] flex-col gap-6 text-center `}
      >
        <h1 className="text-6xl text-white">Cats Make Life Better</h1>
        <p className="text-xl text-white ">
          The key to a happy life if having a cat
        </p>
        <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xl rounded-md font-semibold cursor-pointer transition-all">
          Adopt Meow
        </button>
      </div>
    </div>
  );
};

export default Home;
