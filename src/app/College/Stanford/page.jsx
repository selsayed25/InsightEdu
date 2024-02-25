import Image from "next/image";
import React from 'react';
import 
// import collegediversity fro../m '../../../../public/data/collegediversity.json' assert {type: 'json'};
// import historicaltuition from '../../../../public/data/historicaltuition.json';
// import salarypotential fro../m '../../../../public/data/salarypotential.json';
// import tuitioncost fro../m '../../../../public/data/tuitioncost.json';


import Nav from '../../components/nav';import { promises as fs } from 'fs';

export default async function School(collegename) {
    // const file = await fs.readFile(process.cwd() + '../../../public/data/collegediversity.json', 'utf8');
    // const data = JSON.parse(file);
    const dictionary = new Map();
    async function fetchData(collegename) {
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
                <h1 className="text-center transition ease-in-out hover:-translate-x-4 hover:cursor-pointer duration-300 ">Colleges</h1>
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
enenrollment                <h1 className="text-4xl font-bold">Total Enrollment: {collegediversity[0].state}</h1>
              </div>
              <h1>Racial Distribution of Pheonix-Arizona University</h1>
              <div>
                <canvas id = "pie-chart"></canvas>
              </div>
              <script src = "chart.min.js"></script>
              <script>
                new Chart(document.getElementById('pie-chart'), {
                  type: 'pie',
                  data : {
                    lables : ['Black','American Indian / Alaska Native','Asian', 'Hispanic','Native Hawaiian / Pacific Islander','White','Mixed'],
                    datasets: [{
                      backgroundColor: ["#e63946", "#254BDD",
                        "#ffbe0b", "#1d3557", "#326998","#99FFFF","#FF6666"
                      ],
                      data: [ ]
                    }]
                  }
                })
              </script>
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
