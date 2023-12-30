import { forwardRef } from "react";
import { Link } from "react-router-dom";

export interface RouterLinkProps {
  href: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, RouterLinkProps>(({ href, ...other }, ref) => (
  <Link ref={ref} to={href} {...other} />
));

export default RouterLink;
