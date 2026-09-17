import type { ReactNode } from "react";
import { buttonStyles, type ButtonSize, type ButtonVariant } from "./button-styles";
import { SmartLink } from "./SmartLink";

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  newTab?: boolean;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({ href, variant, size, block, newTab, className, children }: ButtonLinkProps) {
  return (
    <SmartLink href={href} newTab={newTab} className={buttonStyles({ variant, size, block, className })}>
      {children}
    </SmartLink>
  );
}
