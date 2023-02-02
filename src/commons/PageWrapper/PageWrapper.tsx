import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return <div className="m-8">{children}</div>;
}

export default PageWrapper;
