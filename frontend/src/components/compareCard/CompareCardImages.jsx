import React from "react";
import { Image } from "@nextui-org/react";

function CompareCardImages({ colegio }) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-semibold">{colegio.institutionName}</h1>
      <Image
        width={400}
        alt="NextUI hero Image"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />
    </div>
  );
}

export default CompareCardImages;
