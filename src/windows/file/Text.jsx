import { Briefcase, MapPin, Calendar } from "lucide-react";
import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const TextFile = () => {
  const { windows: { txtfile: { data } } } = useWindowStore();

  if (!data) return null;

  const { name, subtitle, experiences } = data;

  // If it's experience data, render timeline
  if (experiences && Array.isArray(experiences)) {
    return (
      <>
        <div id="window-header">
          <WindowControls target="txtfile" />
          <h2>{name}</h2>
        </div>

        <div className="experience-timeline">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">{subtitle}</h1>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="flex items-start gap-4">
                  <div className="experience-icon">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-md font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.skills && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Fallback for regular text files
  const { image, description } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-7">
        {image && <img src={image} alt={name} className="w-20 rounded-full" />}
        {subtitle && <h1 className="font-bold">{subtitle}</h1>}
        {Array.isArray(description) &&
          description.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;
