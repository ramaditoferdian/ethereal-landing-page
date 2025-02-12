const items = [
  {
    title: "10M+ Digital Assets Within Reach",
    description:
      "Ethereal brings the newest tokens and testnets from every EVM chain, Cosmos chains, Solana, Bitcoin, THORChain, TRON, and beyond—all at your fingertips.",
  },
  {
    title: "Unmatched DApp Connectivity",
    description:
      "Seamlessly connect to every dApp across 2,300+ blockchains and testnets. Ethereal ensures your access to the entire decentralized world.",
  },
  {
    title: "Your NFT Universe in One Place",
    description:
      "Ethereal's NFT gallery elegantly showcases your digital collectibles from over 30 chains, including ETH, BTC, Solana, Stargaze, and more.",
  },
];

const ListItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center p-20 gap-8 bg-[#F9FAF9] rounded-[20px] mx-10 overflow-hidden">
      <div className="flex flex-col gap-4 w-full md:min-w-[345px] h-max">
        <h1
          style={{ fontSize: "clamp(1.5rem, 5vw , 4rem)" }}
          className="font-semibold"
        >
          {title}
        </h1>
        <p style={{ fontSize: "clamp(0.75rem, 1.5vw , 1.5rem)" }}>
          {description}
        </p>
      </div>
      <div className="flex gap-4 w-full md:min-w-[220px] md:max-w-[400px] aspect-square bg-black">
        {/* CONTENT IMAGE*/}
      </div>
    </div>
  );
};

const VerticalList = () => {
  return (
    <section
      id="#vertical-list"
      className="w-full h-full flex justify-center items-center px-5 py-16"
    >
      <div className="flex flex-col gap-8 w-full max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl">
        <div className="relative flex items-center justify-center mx-14">
          <h1
            className="text-black font-medium text-8xl"
            style={{ fontSize: "clamp(3.5rem, 5vw + 2rem, 8rem)" }}
          >
            Seize Every Opportunity, Across Every Chain —
            {/* <div className="w-max p-4 bg-[#FF5A4D] rounded-xl inline-flex flex-row mx-3">
              <div className="w-10 h-10 bg-[#FBE74E] rounded-full border border-black"></div>
              <div className="w-10 h-10 bg-[#FBE74E] rounded-full border border-black"></div>
              <div className="w-10 h-10 bg-[#FBE74E] rounded-full border border-black"></div>
            </div> */}{" "}
            Only on Ethereal.
          </h1>
        </div>
        {/* LIST ITEM */}

        {items.map(({ title, description }, index) => (
          <ListItem key={index} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default VerticalList;
