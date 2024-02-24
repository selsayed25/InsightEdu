import Image from "next/image";

export default function About() {
    return (
        <main className="overflow-y-hidden m-0 p-0 min-h-screen overflow-hidden">
        <section className="grid grid-cols-1 place-items-center" id="welcome">
            <div className=" text- text-6xl font-bold py-64">
            <h1 className="text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 ">About Us</h1>
            </div>
        </section>

        {/* About */}

        <h2>Our Mission</h2>
        <p>InsightEdu is a college research platform that helps students find the best college for them. We provide students with the tools they need to make informed decisions about their future. Our mission is to help students find the best college for them, and to help colleges find the best students for them.</p>

        </main>
    );
}