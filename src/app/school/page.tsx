import Image from "next/image";
import React from 'react';
import collegediversity from '../../../public/data/collegediversity.json' assert {type: 'json'};
import historicaltuition from '../../../public/data/historicaltuition.json';
import salarypotential from '../../../public/data/salarypotential.json';
import tuitioncost from '../../../public/data/tuitioncost.json';
import { promises as fs } from 'fs';

export default async function School() {
    // const file = await fs.readFile(process.cwd() + '../../../public/data/collegediversity.json', 'utf8');
    // const data = JSON.parse(file);

    function search( joe) {
      
    }
    return (
      <div>
        <h1>{collegediversity[0].name}</h1>
        <p>{collegediversity[0].state}</p>
      </div>
    );
}