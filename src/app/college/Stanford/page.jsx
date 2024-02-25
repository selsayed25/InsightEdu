import Image from "next/image";
import React from 'react';
import collegediversity from '../../../../public/data/collegediversity.json' assert {type: 'json'};
import historicaltuition from '../../../../public/data/historicaltuition.json';
import salarypotential from '../../../../public/data/salarypotential.json';
import tuitioncost from '../../../../public/data/tuitioncost.json';
import { promises as fs } from 'fs';
import Nav from '../../components/nav';

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
            <Nav />
            <section className="grid grid-cols-1 place-items-center" id="welcome">
                <div className=" text- text-6xl font-bold py-64">
                <h1 className="text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 ">School</h1>
                </div>
            </section>

            {/* Collge Info */}
            <section className="text-center">
              <div class="container">
                <h1 className="text-4xl font-bold">University of Phoenix-Arizona</h1>
              </div >
              <div className="" id="">
                <h1 className="text-4xl font-bold">State: {collegediversity[0].state}</h1>
              </div>
              <div className="" id="">
                <h1 className="text-4xl font-bold">Total Enrollment: {collegediversity[0].enrollment}</h1>
              </div>
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
