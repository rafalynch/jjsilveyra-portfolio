import React, { useEffect, useState } from "react";
import styles from "./Navlink.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavlinkProps {
  children: JSX.Element | string;
  href: string;
}

export default function Navlink({ children, href }: NavlinkProps) {
  const [isSelected, setIsSelected] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == href) {
      setIsSelected(true);
    }
  }, [router]);

  return (
    <>
      <Link href={href}>
        <a className={styles.link + " " + (isSelected && styles.selected)}>
          {children}
        </a>
      </Link>
    </>
  );
}
