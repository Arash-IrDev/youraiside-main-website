import type { Metadata } from "next";
import { DirectionsNav } from "@/components/directions/DirectionsNav";

export const metadata: Metadata = {
  title: "Design directions",
  robots: { index: false, follow: false },
};

export default function DirectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DirectionsNav />
      {children}
    </>
  );
}
