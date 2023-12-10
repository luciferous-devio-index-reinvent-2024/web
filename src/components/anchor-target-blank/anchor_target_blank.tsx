import { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  href: string;
  style?: CSSProperties;
  className?: string;
};

export function AnchorTargetBlank(props: Props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer noopener"
      style={props.style}
      className={props.className}
    >
      {props.children}
    </a>
  );
}
