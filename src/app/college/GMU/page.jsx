// simport Image from "next/image";
import React from 'react';
import collegediversity from '../../../../public/data/collegediversity.json' assert {type: 'json'};
import historicaltuition from '../../../../public/data/historicaltuition.json';
import salarypotential from '../../../../public/data/salarypotential.json';
import tuitioncost from '../../../../public/data/tuitioncost.json';
import { promises as fs } from 'fs';
import Nav from '../../components/nav';
// import {
//   APIProvider,
//   Map,
//   AdvancedMaker,
//   Pin,
//   InfoWindown,
// } from "@vis.gl/react-google-maps"

export default async function School(collegename) { 
    // const file = await fs.readFile(process.cwd() + '../../../public/data/collegediversity.json', 'utf8');
    // const data = JSON.parse(file);
    
    async function fetchData(collegename) {
      const dictionary = new Map();
      try {
        for (var i = 0; i < arr.length; i++){
          //document.write("<br><br>array index: " + i);
          var obj = collegediversity[i];
          if (obj["name"] === collegename) {
            dictionary.set(obj["catagory"],obj["enrollment"]);
          }
        }
  
          if(response.catagory == "Woman") {
              throw new Error("Could not fetch resource");
          }
      }
  
      catch(error){
          console.error(error);
      }
  }
    return (
      <main className="overflow-y-hidden m-0 p-0 min-h-screen overflow-hidden">
            <section className="grid grid-cols-1 grid-rows-3 bg-no-repeat bg-cover bg-opaque-50 opaque-20 h-96" style={{
                backgroundImage: `url('https://media.licdn.com/dms/image/C511BAQEnu4zyIoKaWw/company-background_1536_768/0/1583890526820?e=2147483647&v=beta&t=FLxfoRv-na_ZE52wR1hFXtYVDppgZmEDDHvAFuhqwmk')`,
                height: "730px",
            }} >
                <Nav/>
                    <div className="text-8xl font-bold">
                        <h1 className="mb-20 text-white drop-shadow-lg text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 brightness-100">George Mason University</h1>
                    </div>
            </section>
            
            
            <section className="grid place-items-center pb-48 m-0 mt-10" id="about" >
              <div className=" text-black text-4xl font-bold bg-neutral-100 w-3/6 m-0 rounded-xl">
                    <div className="p-0 my-4 ml-4">
                      <p>George Mason University</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Hi, Welcome to George Mason University!</p>
                    </div>
              </div>

              <div className=" text-black text-3xl font-bold bg-neutral-100 w-3/6 m-0 mt-4 rounded-xl">
                    <div className="p-0 my-4 ml-4">
                      <p>General Information</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">State: Virginia</p>
                      {/* <p className="text-center text-lg font-normal mt-2 mb-2">Dorm Quality</p> */}
                      <p className="text-center text-lg font-normal mt-2 mb-2">In state Tuition: $... </p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Out-of-state Tuition: $... </p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Number of Undergraduate Students: 27,014</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Location: 4400 University Dr, Fairfax, VA 22030 </p>
                    </div>
              </div>
              <div className=" text-black text-3xl font-bold bg-neutral-100 w-3/6 m-0 mt-4 rounded-xl">
                    <div className="p-0 my-4 ml-4">
                      <p>Major: Computer Science</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Avg.Tuition Cost: </p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Classes for Undergraduate:</p>
                    </div>
              </div>
              <div className=" text-black text-3xl font-bold bg-neutral-100 w-3/6 m-0 mt-4 rounded-xl">
                    <div className="p-0 my-4 ml-4">
                      <p>Major: Business</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Average Tuition Cost: $20142</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Classes:</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Marketing</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Economics</p>
                    </div>
              </div>
              <div className=" text-black text-3xl font-bold bg-neutral-100 w-3/6 m-0 mt-4 rounded-xl">
                    <div className="p-0 my-4 ml-4">
                      <p>Major: Pre-Med</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Average Tuition Cost: </p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Classes: </p>
                      <p className="text-center text-lg font-normal mt-2 mb-2"></p>
                      <p className="text-center text-lg font-normal mt-2 mb-2"></p>
                    </div>
              </div>
              <div className=" text-black text-3xl font-bold bg-neutral-100 w-3/6 m-0 mt-4 rounded-xl">
                    <div className="p-0 my-4 ml-4">
                      <p>Major: Engineering</p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Average Tuition Cost: </p>
                      <p className="text-center text-lg font-normal mt-2 mb-2">Classes: </p>
                      <p className="text-center text-lg font-normal mt-2 mb-2"></p>
                      <p className="text-center text-lg font-normal mt-2 mb-2"></p>
                    </div>
              </div>
              {/* <div className=" text-black text-3xl font-bold bg-neutral-100 w-3/6 m-0 mt-4 rounded-xl">
                    <div className="p-0 my-4 ml-4">
                      <p>Student Testimonials</p>
                    </div>
          </div> */}
          </section>



        </main>
    );
  }
    /*
    async function fetchData() {

      try {
          const response = await fetch('../../../public/data/tuitioncost.json')
  
          if(response.catagory == "Woman") {
              throw new Error("Could not fetch resource");
          }
  
          const data = await resoponse.json();
          console.log(dat)
  
      }
  
      catch(error){
          console.error(error)
      }
  }*/
