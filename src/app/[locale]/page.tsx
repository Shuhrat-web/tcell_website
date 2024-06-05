import HomePage from "@/components/TcellWebsite/PrivateIndividuals/Home/HomePage";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tcell - Private individuals',
  description: 'Tcell - Private individuals',
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
