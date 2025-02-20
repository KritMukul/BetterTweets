const AITextBanner = () => {
  return (
    <div className="w-full md:py-24 py-4 px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white">
        Transform Your Tweets with{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          BetterTweets
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-500 max-w-2xl translate-y-4 dark:text-zinc-100">
        Instantly craft better tweets with our AI-powered editor! Adjust tone,
        style, effortlessly while optimizing hashtags for maximum
        engagement.
      </p>
    </div>
  );
};

export default AITextBanner;
