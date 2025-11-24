import WindowControls from "#components/WindowControls";
import { socials, CONTACT_INFO } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => (
  <>
    <div id="window-header">
      <WindowControls target="contact" />
      <h2>Contact Me</h2>
    </div>

    <div className="p-5 space-y-5">
      <img
        src={CONTACT_INFO.image}
        alt="Nagesh"
        className="w-20 rounded-full"
      />

      <h3>{CONTACT_INFO.title}</h3>
      <p>{CONTACT_INFO.description}</p>

      <ul>
        {socials.map(({ id, bg, link, icon, text }) => (
          <li
            key={id}
            style={{ backgroundColor: bg }}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={text}
            >
              <img src={icon} alt={text} className="size-5" />
              <p>{text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>
);

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
