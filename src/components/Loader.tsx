const Loader = () => {
  return (
    <div className=" h-screen flex justify-center items-center">
      <span className="h-16 w-16 flex items-center justify-center">
        <span className="animate-ping h-10 w-10 absolute inline-flex  rounded-full bg-text-color dark:bg-dark-text-color opacity-75"></span>
        <span className="relative inline-flex rounded-full h-8 w-8 bg-text-color dark:bg-dark-text-color opacity-90"></span>
      </span>
    </div>
  );
};

export default Loader;
