import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const softwares = [
  {
    id: 1,
    name: "Premiere Pro",
    icon: "/icons/Softwares/PremeirePro.png",
    position: "top-10 left-5",
  },
  {
    id: 2,
    name: "After Effects",
    icon: "/icons/Softwares/AfterAffects.png",
    position: "top-40 left-5",
  },
  {
    id: 3,
    name: "Illustrator",
    icon: "/icons/Softwares/Illustratur.png",
    position: "top-72 left-5",
  },
  {
    id: 4,
    name: "Blender",
    icon: "/icons/Softwares/Blender.png",
    position: "top-10 right-5",
  },
  {
    id: 5,
    name: "Photoshop",
    icon: "/icons/Softwares/CreativeCloud.png",
    position: "top-40 right-5",
  },
];

const Home = () => {
  useGSAP(() => {
    Draggable.create(".software-icon");
  }, []);

  return (
    <section id="home">
      <ul>
        {softwares.map((software) => (
          <li
            key={software.id}
            className={clsx("group software-icon absolute flex flex-col items-center gap-2 w-24 cursor-pointer", software.position)}
          >
            <img src={software.icon} alt={software.name} className="w-16 h-16 object-contain drop-shadow-lg" />
            <p className="text-white text-xs font-medium drop-shadow-md bg-black/20 px-2 py-1 rounded-md backdrop-blur-sm">{software.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;