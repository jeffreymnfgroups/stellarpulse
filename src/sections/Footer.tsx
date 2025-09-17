import { site_links, socials } from "../constants";

export const Footer = () => {
  return (
    <footer className="border-t border-s3/40">
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="sm-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">&copy; Stellarpulse – Non‑profit Collective</p>
            <p className="small-2 opacity-70 text-center w-full">
              Stellarpulse Verein · Switzerland · info@stellarpulse.ch
            </p>
          </div>

          <div className="flex items-center justify-center max-md:mt-4 sm:ml-auto">
            <a
              href={site_links.impressum}
              className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1"
            >
              Impressum
            </a>

            <a
              href="#"
              className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1"
            >
              Privacy Policy
            </a>

            <a
              href={site_links.tickets}
              target="_blank"
              rel="noreferrer noopener"
              className="text-p5 transition-all duration-500 hover:text-p1"
            >
              Buy Tickets
            </a>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon" title={title}>
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
