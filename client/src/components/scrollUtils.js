import { Link } from 'react-scroll';

export function scrollToElement(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

export function SmoothScrollLink({ to, children }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      className="border-2 border-tertiary text-tertiary px-10 py-3 rounded cursor-pointer"
    >
      {children}
    </Link>
  );
}
