import { Tooltip, Button } from "@nextui-org/react";

export function Technology({ technology, name }) {
  return (
    <Tooltip content={name} placement="bottom" showArrow shouldFlip>
      <button className="bg-transparent text-white text-5xl p-0 mx-2">
        {technology}
      </button>
    </Tooltip>
  );
}
