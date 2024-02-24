import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-y-hidden m-0 p-0 min-h-screen overflow-hidden">
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
