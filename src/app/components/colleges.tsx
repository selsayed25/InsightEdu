import Image from "next/image";
import React from 'react';

export default function CollgePage() {
  return (
    <div>
      <h1>CollgePage</h1>
      <Image src="/images/college.jpg" alt="college" width={500} height={500} />
    </div>
  );
}
