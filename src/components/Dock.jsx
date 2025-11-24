import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { dockApps } from "#constants";
import useWindowStore from "#store/window";
import clsx from "clsx";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-Math.pow(distance, 2.5) / 20000);
        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" })
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toggleApp = (app) => {
    if (!app.canOpen) return;

    // If app has an href, open it in a new tab
    if (app.href) {
      window.open(app.href, "_blank");
      return;
    }

    const window = windows[app.id];

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map((app) => (
          <ul
            key={app.id ?? app.name}
            className={clsx(
              "relative flex justify-center",
              !app.showOnMobile && "max-sm:hidden"
            )}
          >
            <li>
              <button
                type="button"
                className="dock-icon"
                aria-label={app.name}
                onClick={() => toggleApp(app)}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={app.name}
                data-tooltip-delay-show={150}
                disabled={!app.canOpen}
              >
                <img
                  src={`/images/${app.icon}`}
                  alt={app.name}
                  loading="lazy"
                  className={clsx(
                    "w-12 h-15 transition-all duration-200",
                    app.id === "facetime" && "w-[3.5rem] h-[3.5rem]",
                    app.canOpen ? "" : "opacity-60"
                  )}
                />
              </button>
            </li>
          </ul>
        ))}

        <ReactTooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
