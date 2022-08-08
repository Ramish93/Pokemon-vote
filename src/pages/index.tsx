import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="texe-2xl text-center">Which pokemon is rounder</div>
      <div className="p-2"></div>
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div className="w-16 h-16 bg-red-200" />
        <div className="p-8">VS</div>
        <div className="w-16 h-16 bg-red-200" />
      </div>
    </div>
  );
};

export default Home;
