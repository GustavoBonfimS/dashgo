import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMAtchExactHref?: boolean;
}

function ActiveLink({
  children,
  shouldMAtchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  let isActive = false;

  if ((shouldMAtchExactHref && asPath === rest.href) || asPath === rest.as) {
    isActive = true;
  }

  if (
    !shouldMAtchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}

export default ActiveLink;
