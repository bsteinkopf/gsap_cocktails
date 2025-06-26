import { useGSAP } from '@gsap/react';
import { cocktailLists, mockTailLists } from '../../constants';
import gsap from 'gsap';

export function Cocktails() {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#cocktails',
          start: 'top 30%',
          end: 'bottom 80%',
          scrub: true,
        },
      })
      .from('#c-left-leaf', {
        x: -100,
        y: 100,
      })
      .from('#c-right-leaf', {
        x: 100,
        y: 100,
      });
  }, []);

  return (
    <section
      id="cocktails"
      className="relative inset-0 z-10 size-full min-h-dvh w-full overflow-hidden border border-transparent bg-[url('/images/noise.png')] backdrop-blur-[0px]"
    >
      <img
        id="c-left-leaf"
        src="/images/cocktail-left-leaf.png"
        alt="left-leaf"
        className="absolute -top-20 left-0 w-1/3 md:top-auto md:bottom-0 md:w-fit"
      />
      <img
        id="c-right-leaf"
        src="/images/cocktail-right-leaf.png"
        alt="right-leaf"
        className="absolute -top-20 right-0 w-1/3 md:top-auto md:bottom-0 md:w-fit"
      />

      <div className="relative z-10 container mx-auto flex flex-col items-start justify-between gap-20 px-5 pt-40 md:flex-row 2xl:px-0">
        <div className="w-full space-y-8 md:w-fit">
          <h2 className="text-xl font-medium">Most popular cocktails:</h2>

          <ul className="space-y-8">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="flex items-start justify-between">
                <div className="md:me-28">
                  <h3 className="font-modern-negra text-yellow text-xl 2xl:text-3xl">
                    {name}
                  </h3>
                  <p className="text-sm">
                    {country} | {detail}
                  </p>
                </div>
                <span className="text-xl font-medium">{price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full space-y-8 pb-20 md:w-fit md:pb-0">
          <h2 className="text-xl font-medium">Most loved mocktails:</h2>

          <ul className="space-y-8">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name} className="flex items-start justify-between">
                <div className="me-28">
                  <h3 className="font-modern-negra text-yellow text-xl 2xl:text-3xl">
                    {name}
                  </h3>
                  <p className="text-sm">
                    {country} | {detail}
                  </p>
                </div>
                <span className="text-xl font-medium">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
