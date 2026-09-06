import { InnerNavbar } from "@/components/InnerNavbar";

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <InnerNavbar />
      {children}
    </>
  );
}