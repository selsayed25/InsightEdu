import Image from "next/image";
import React from "react";
import Nav from "../components/nav";

export default function About() {
    return (
        <main className="overflow-y-hidden m-0 p-0 min-h-screen overflow-hidden">
            <Nav />
            <section className="grid grid-cols-1 place-items-center" id="welcome">
                <div className=" text- text-6xl font-bold py-64">
                <h1 className="text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 ">About Us</h1>
                </div>
            </section>

            {/* About */}

            <div className="grid grid-cols-1 place-items-center">
                <div className="text-center text-4xl font-bold py-10">
                    <h1>Our Mission</h1>
                </div>

                <div className="text-center text-2xl font-bold">
                    <p>InsightEdu is a college research platform that helps students find the best college for them. We provide students with the tools they need to make informed decisions about their future. Our mission is to help students find the best college for them, and to help colleges find the best students for them.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 place-items-center">
                <div className="text-center text-4xl font-bold py-10">
                    <h1>Our Team</h1>
                </div>

                <div className="text-center text-2xl font-bold">
                    <p>InsightEdu was created by a team of high school students who wanted to make the college search process easier for students who are thinking or researching about a school that fits them. Our team started this project on Feburary 2024 during the HackTJ 11.0 hackathon.
                    </p>

                    <p>Our team members are:</p>
                    <ul>
                        <div className="text-center text-2xl font-bold">
                            <h3>Sami Elsayed</h3>
                            <p className="">Sami Elsayed is a high school junior</p>
                        </div>
                    </ul>
                </div>
            </div>
        </main>
    );
}