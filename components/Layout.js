import Head from "next/head";
import { Navbar } from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="h-screen dark:bg-gray-700">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="p-4 lg:p-6 md:px-12 lg:px-24">{children}</div>
    </div>
  );
}
