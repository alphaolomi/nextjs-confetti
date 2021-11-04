import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <Link href="https://github.com/alphaolomi">
        <a rel="noopener noreferrer" target="_blank" className="flex items-center justify-center">
          Made with 💖 by Alpha Olomi
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
