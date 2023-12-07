import React from "react";
import { Image } from "@nextui-org/react";
import { index } from ".";

function CompareCardImages({ colegioId }) {
  const { institutionName } = index(colegioId);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg font-semibold">{institutionName}</h1>
      <Image
        width={400}
        alt="NextUI hero Image"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />
    </div>
  );
}

export default CompareCardImages;
