import disney from "./../assets/images/disney.png"
import marvel from "./../assets/images/marvel.png"
import nationalG from "./../assets/images/nationalG.png"
import pixar from "./../assets/images/pixar.png"
import starwars from "./../assets/images/starwar.png"
import disneyV from "./../assets/videos/disney.mp4"
import marvelV from "./../assets/videos/marvel.mp4"
import nationalGV from "./../assets/videos/national-geographic.mp4"
import pixarV from "./../assets/videos/pixar.mp4"
import starwarsV from  "./../assets/videos/star-wars.mp4"

const ProductionHouse = () => {
  const productionHouselList = [
    {
      id: 1,
      image: disney,
      videos: disneyV,
    },
    {
      id: 1,
      image: marvel,
      videos: marvelV,
    },
    {
      id: 1,
      image: nationalG,
      videos: nationalGV,
    },
    {
      id: 1,
      image: pixar,
      videos: pixarV,
    },
    {
      id: 1,
      image: starwars,
      videos: starwarsV,
    },
  ];
  return (
    <div className="flex justify-center gap-2 mt-5 md:gap-5 md:px-16 px-5">
      {productionHouselList.map((item) => (
        <div
          key={item.id}
          className="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer border-2 border-gray-600  rounded relative shadow-xl shadow-black/50"
        >
          <video
            src={item.videos}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 rounded z-0 opacity-0 hover:opacity-50"
          />
          <img src={item.image} alt="disney" className="w-full z-10" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse
