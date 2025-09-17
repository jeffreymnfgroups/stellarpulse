import { Element } from "react-scroll";

import { FaqItem } from "../components/FaqItem";
import { faq } from "../constants";

export const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 mb-7 max-w-640 text-p4 max-lg:max-w-md">
              About & Contact – Stellarpulse
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              Learn more about our collective and find essential information for the next event.
            </p>
          </div>

          <div className="faq-line_after absolute left-[calc(50%_-_1px)] top-0 -z-1 h-full w-0.5 bg-s2" />
        </div>

        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="absolute -top-10 left-[calc(50%_-_40px)] z-4 flex size-20 items-center justify-center rounded-half border-2 border-s2 bg-s1">
              <img src="/images/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map(({ id, answer, question }, i) => (
                <FaqItem
                  key={id}
                  id={id}
                  question={question}
                  answer={answer}
                  index={i + 1}
                />
              ))}
            </div>

            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map(({ id, answer, question }, i) => (
                <FaqItem
                  key={id}
                  id={id}
                  question={question}
                  answer={answer}
                  index={halfLength + i + 1}
                />
              ))}
            </div>
          </div>

          <div className="faq-line_after absolute left-[calc(50%_-_1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};
