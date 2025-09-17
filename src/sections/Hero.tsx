import { Element, Link as LinkScroll } from "react-scroll";

import { Button } from "../components/Button";
import { site_links } from "../constants";

export const Hero = () => {
  return (
    <section className="relative pb-40 pt-60 max-lg:pb-36 max-lg:pt-52 max-md:pb-32 max-md:pt-36">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">Stellarpulse Collective</div>

            <h1 className="h1 max-lg:h2 mb-6 uppercase text-p4 max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Psy‑Trance & Techno Night Across Switzerland
            </h1>

            <p className="max-2-440 body-1 mb-14 max-md:mb-10">
              Stellarpulse is a non‑profit collective curating progressive, psy‑trance, hitech, and hard‑techno experiences. Join our next gathering.
            </p>

            <Button href={site_links.tickets} icon="/images/zap.svg">Buy Tickets</Button>
          </div>

          <div className="hero-img_res pointer-events-none absolute -top-32 left-[calc(50%_-_340px)] w-[1230px]">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};
