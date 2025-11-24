import { useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

import useWindowStore from "#store/window";
import useLocationStore from "#store/location";
import Notification from "#components/Notification";
import { locations } from "#constants";

const projects = locations.work?.children ?? [];

const Home = () => {
  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const [showNotification, setShowNotification] = useState(true);

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  const openFinder = useCallback(() => {
    setActiveLocation(locations.work);
    openWindow("finder");
  }, [setActiveLocation, openWindow]);

  useEffect(() => {
    // Auto-open Finder after 3 seconds
    const timer = setTimeout(() => {
      openFinder();
      setShowNotification(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [openFinder]);

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  return (
    <section id="home">
      {showNotification && (
        <Notification
          onClose={() => setShowNotification(false)}
          onClick={openFinder}
        />
      )}

      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder", project.desktopPosition)}
            onClick={() => handleOpenProjectFinder(project)}
          >
            <img src={project.icon} alt={project.name} className="w-20" />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;