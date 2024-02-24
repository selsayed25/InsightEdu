import Image from "next/image";
import React from 'react';
import collegediversity from '../../../public/data/collegediversity.json';
import historicaltuition from '../../../public/data/historicaltuition.json';
import salarypotential from '../../../public/data/salarypotential.json';
import tuitioncost from '../../../public/data/tuition.json';
import { promises as fs } from 'fs';

// export default async function College({any: props}) {
//     const file = await fs.readFile(process.cwd() + collegediversity, 'utf8');
//     const data = JSON.parse(file);
  
//     return (
//       <div>
//         <h1>{data[0].name}</h1>
//         <p>{data[0].state}</p>
//       </div>
//     );
// }

export default function College({props}) {

    const college = collegediversity.find({name: props})
    console.log(college)
    return (
    );
}