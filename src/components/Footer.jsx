import { useEffect, useState } from "react";
import { contact } from "../constants";
import { styles } from "../utils";
import { Link } from "react-router-dom";

const FooterImage = ({ contact }) => {
  const [resolvedIcon, setResolvedIcon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { name, icon } = contact;

  useEffect(() => {
    const loadIcon = async () => {
      try {
        // Resolve the icon by calling the import function
        const resolvedIconModule = await icon();
        // Extracts the URL of resolved icon
        const resolvedIconUrl = resolvedIconModule.default;
        // Updates the state with the icon URL
        setResolvedIcon(resolvedIconUrl);
      } catch (error) {
        console.error("Icon load error: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadIcon();
  }, []);

  return (
    <>
      {isLoading ? null : (
        <img
          src={resolvedIcon}
          className="h-12 w-12 transition-transform transform hover:-translate-y-[1.5rem] hover:scale-110 active:translate-y-[1rem] active:scale-90"
          alt={name}
          loading="lazy"
        />
      )}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="py-10 bg-gradient-to-b from-leveled-700 to-leveled-950">
      <div className="flex justify-center items-center gap-x-16">
        {contact.map((contact, index) => (
          <Link
            key={index}
            to={contact.reference}
            target="_blank"
            children={<FooterImage contact={contact} />}
          />
        ))}
      </div>
      <p
        className={`${styles.portfolioSubText} text-white flex justify-center items-center mt-6 cursor-default`}
      >
        Created with <span className="animate-pulse">❤️</span> by kiyotakaDev
      </p>
    </footer>
  );
};

export default Footer;
