import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText('h1', { type: 'chars, words' });
    const paragraphSplit = new SplitText('.subtitle', { type: 'lines' });
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
      .to('#left-leaf', { y: -200 }, 0)
      .to('#right-leaf', { y: 200 }, 0);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative inset-0 z-10 size-full min-h-dvh w-full border border-transparent bg-[url('/images/noise.png')]"
      >
        <h1 className="font-modern-negra mt-40 text-center text-8xl leading-none md:mt-32 md:text-[20vw]">
          MOJITO
        </h1>

        <img
          id="left-leaf"
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="absolute -bottom-20 left-0 w-1/3 md:top-20 md:bottom-auto md:w-fit xl:top-36 2xl:top-52"
        />
        <img
          id="right-leaf"
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="absolute top-1/2 right-0 w-24 md:bottom-0 md:w-fit xl:top-0 2xl:top-12"
        />

        <div className="absolute top-auto left-1/2 container mx-auto flex -translate-x-1/2 items-end justify-between px-5 md:top-[30vh] lg:bottom-20">
          <div className="mx-auto flex w-full flex-col items-center justify-between gap-10 lg:flex-row lg:items-end">
            <div className="hidden space-y-5 md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle font-modern-negra text-yellow max-w-xl text-center text-6xl 2xl:text-start">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="w-full space-y-5 text-lg md:max-w-xs lg:max-w-2xs">
              <p className="subtitle text-left">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a
                href="#cocktails"
                className="hover:text-yellow text-center font-semibold opacity-80 2xl:text-start"
              >
                View Cocktails
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
