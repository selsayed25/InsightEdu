'use client';
import { useRouter } from 'next/navigation';
import {useState} from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';
// import Button from "./components/button";
import Nav from "./components/nav";
import Testimonial from "./components/Testimonial";
import data from "../../public/data/testimonials/testimonials.json";

export default function Home() {
    const router = useRouter()
    const [route, setRoute] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("college/" + route)
    }

    return (
        <main className="overflow-y-hidden m-0 p-0 min-h-screen overflow-hidden">
                
            <section className="grid grid-cols-1 grid-rows-3 bg-no-repeat bg-contain bg-opaque-50 opaque-20 h-3/6" style={{
                backgroundImage: `url('https://cdn.collegeraptor.com/wp/wp-content/uploads/2017/07/09204242/revisit-e1579799504642.jpg')`,
                height: "972px",
                
            }} >
                <Nav/>
                    <div className="text-8xl font-bold">
                        <h1 className="mb-20 text-white drop-shadow-lg text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 brightness-100">InsightEdu</h1>
                        
                        {/* Search Bar */}
                        <form className="text-center text-4xl text-white" onSubmit={handleSubmit}>
                            <label className="text-center text-4xl text-white" >Start your search here:   </label>
                            <input type="text" id="fname" name="collegename" className="text-black rounded-xl" onChange={(e)=>{setRoute(e.target.value)}}></input>
                            <button className="text-3xl ml-2 bg-nicebrown p-2 rounded-full transition duration-300 hover:scale-105 hover:bg-dnicebrown">Search</button>
                        </form>
                    </div>                    
            </section>

            {/* About */}
            <section className="grid grid-cols-1 place-items-center" id="about">
                {/* About */}
                <div className="text-center text-4xl font-bold ">
                    <h1>About Us</h1>
                </div>
                <div className="text-center font-normal text-2xl ">
                    <p>InsightEdu is a college research platform that helps students find the best college for them. We provide students with the tools they need to make informed decisions about their future. Our mission is to help students find the best college for them, and to help colleges find the best students for them.<br /><br />To learn more about InsightEdu and the creators who made it came to life, learn more <Link href='/about'>here</Link>.</p>
                </div>
            </section>
            
            {/* Reviews */}
            <section >
                <div className="grid grid-cols-1 place-items-center">
                    <div className="text-center text-4xl font-bold py-20">
                        <h1>Reviews</h1>
                        <Testimonial testimonialData={data} />
                    </div>
                </div>
            </section>
        </main>
    );
}
