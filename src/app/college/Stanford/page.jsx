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
            <section className="grid grid-cols-1 grid-rows-3 bg-no-repeat bg-contain bg-opaque-50 opaque-20 h-96" style={{
                backgroundImage: `url('https://doz1futtg6626.cloudfront.net/images/2017/2/1/8202175082_3392eb5be6_o.jpg?width=1024&height=576&mode=crop')`,
                height: "972px",
            }} >
                <Nav/>
                    <div className="text-8xl font-bold">
                        <h1 className="mb-20 text-white drop-shadow-lg text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 brightness-100">Stanford</h1>
                    </div>
            </section>

            {/* Collge Info */}
            <section className="grid grid-cols-4 text-center">
              <div>


                <div class="container">
                  <h1 className=" text-4xl font-bold">Welcome to Stanford!</h1>
                </div >
                <div className="" id="">
                  <h1 className="text-4xl font-bold">State: California</h1>
                </div>
                <div className="" id="">
                  <h1 className="text-4xl font-bold">Total Enrollment: {collegediversity[0].enrollment}</h1>
                </div>


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
