import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants';
import gsap from 'gsap';

export function Navbar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top',
      },
    });

    navTween.to('nav', {
      backgroundColor: '#00000050',
      backdropFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut',
    });
  });

  return (
    <nav className="fixed z-50 w-full">
      <div className="container mx-auto flex flex-col items-center gap-5 px-5 py-5 md:flex-row md:justify-between lg:px-0">
        <a
          href="#home"
          className="flex cursor-pointer items-center gap-2 text-sm text-nowrap md:text-base"
        >
          <img src="/images/logo.png" alt="logo" />
          <p className="font-modern-negra -mb-2 text-3xl">Velvet Pour</p>
        </a>

        <ul className="flex-center gap-7 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="cursor-pointer text-sm text-nowrap md:text-base"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
