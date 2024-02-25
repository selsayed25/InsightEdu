import Image from "next/image";
import React from 'react';
import Nav from '../components/nav';
// import {
//   APIProvider,
//   Map,
//   AdvancedMaker,
//   Pin,
//   InfoWindown,
// } from "@vis.gl/react-google-maps"

export default async function Forum() { 
    // const file = await fs.readFile(process.cwd() + '../../../public/data/collegediversity.json', 'utf8');
    // const data = JSON.parse(file);
    
    return (
        <>
            <section className="grid grid-cols-1 grid-rows-3 bg-no-repeat bg-cover bg-opaque-50 opaque-20 h-96" style={{
                backgroundImage: `url('https://d13b2ieg84qqce.cloudfront.net/cc9f60dc1f7d671dee84daf0e591779638a2372b')`,
                height: "730px",
            }} >
                <Nav/>
                    <div className="text-8xl font-bold">
                        <h1 className="mb-20 text-white drop-shadow-lg text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 brightness-100">Forum</h1>
                    </div>
            </section>
            
            
            <section className="grid place-items-center pb-48 m-0 mt-10" >


                

            </section>
          </>
    );
  }