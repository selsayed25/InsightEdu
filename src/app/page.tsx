import Image from "next/image";
import Link from "next/link";
import React from 'react';
// import Button from "./components/button";
import Nav from "./components/nav";

export default function Home() {
  return (
    <main className="overflow-y-hidden m-0 p-0 min-h-screen overflow-hidden">
        <div >
             <div className=""></div>
            
            <section className="grid bg-no-repeat bg-contain bg-opaque-50" style={{
            backgroundImage: `url('https://cdn.collegeraptor.com/wp/wp-content/uploads/2017/07/09204242/revisit-e1579799504642.jpg')`,
            height: "972px",
            
        }} >
            <Nav/>
                <div className="text-8xl font-bold py-64 pt-24">
                    <h1 className="mb-20 text-white drop-shadow-lg text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 brightness-100">InsightEdu</h1>

                    <form className="text-center text-4xl text-white">
                        <label >Start your search here:</label>
                        <input type="text" id="fname" name="fname" className="text-black"></input>
                        {/* <Button>Search</Button> */}
                        <button>Search</button>
                    </form>
                </div>
            </section>
        </div>

        {/* About */}
        <section className="grid grid-cols-1 place-items-center" id="about">
            <div className="text-center text-4xl font-bold py-20">
                <h1>About Us</h1>
            </div>
            <div className="text-center text-2xl font-bold  ">
                <p>InsightEdu is a college research platform that helps students find the best college for them. We provide students with the tools they need to make informed decisions about their future. Our mission is to help students find the best college for them, and to help colleges find the best students for them.<br /><br />To learn more about InsightEdu and the creators who made it came to life, learn more <Link href='/about'>here</Link>.</p>
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
