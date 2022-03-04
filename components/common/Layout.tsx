import Header from "./Header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
