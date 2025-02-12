const AppScreen = () => {
  return (
    <section className="flex flex-col px-5 h-[100vh] items-center justify-center font-[family-name:var(--font-schibsted-grotesk)]">
      <div className="w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
        {/* <div className="flex flex-col md:flex-row gap-x-12 w-full h-max"> */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-x-14 gap-y-5 w-full h-max">
          <div className="hidden md:flex md:flex-col md: gap-y-4 md:col-span-3 items-start">
            <div className="bg-[#A1C6F5] w-full h-max p-8 rounded-[20px]">
              LEFT CONTENT
            </div>
            <div className="bg-[#A1C6F5] w-full h-max p-8 rounded-[20px]">
              LEFT CONTENT
            </div>
            <div className="bg-[#A1C6F5] w-full h-max p-8 rounded-[20px]">
              LEFT CONTENT
            </div>
          </div>
          <div className="border-[3px] border-black rounded-[20px] w-full max-h-[650px] md:max-h-full md:min-h-full md:aspect-auto md:col-start-4 md:col-span-4">
            <video
              className="w-full h-full object-cover object-top rounded-[20px]"
              muted
              playsInline
              loop
              preload="metadata"
              src="https://player.vimeo.com/progressive_redirect/playback/995250631/rendition/540p/file.mp4?loc=external&oauth2_token_id=1772650813&signature=f07acbef5e8becd116804f66fc8736470f467df512d6cbd92abfaaeeedbd4ccc"
            ></video>
          </div>
          <div className="md:col-span-3 items-center flex">
            <div className="bg-[#ECEFEC] w-full h-max p-8 rounded-[20px]">
              RIGHT CONTENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreen;
