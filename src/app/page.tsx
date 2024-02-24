import Image from "next/image";
import React from 'react';
import Nav from "./components/nav";

export default function Home() {
  return (
    <main className="overflow-y-hidden m-0 p-0 min-h-screen overflow-hidden">
        <Nav/>

        <section className="grid grid-cols-1 place-items-center" id="welcome">
            <div className=" text- text-6xl font-bold py-64">
                  <h1 className="text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 ">InsightEdu</h1>
            </div>
        </section>

        {/* About */}
        <section className="grid grid-cols-1 place-items-center" id="about">
            <div className="text-center text-4xl font-bold py-20">
                <h1>About Us</h1>
            </div>
            <div className="text-center text-2xl font-bold py-20 ">
                <p>InsightEdu is a college research platform that helps students find the best college for them. We provide students with the tools they need to make informed decisions about their future. Our mission is to help students find the best college for them, and to help colleges find the best students for them.<br /><br />To learn more about InsightEdu and the creators who made it came to life, learn more here.</p>
            </div>
        </section>
        
        {/* Reviews */}
        <section >
            <div className="grid grid-cols-1 place-items-center">
                <div className="text-center text-4xl font-bold py-20">
                    <h1>Reviews</h1>
                </div>
            </div>
        </section>
    </main>
  );
}
