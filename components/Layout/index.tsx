import React, { ReactChildren, ReactComponentElement } from "react";

import Header from "../Header";

interface LayoutProps {
  children?: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main data-aos="fade-in" data-aos-duration="1000">
        {children}
      </main>
    </>
  );
}
