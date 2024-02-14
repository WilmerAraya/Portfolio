import { Technologies } from "./Components/Technologies";

export function Skills() {
  return (
    <>
      <div
        id="skills"
        className="h-svh section flex flex-col justify-center items-center"
      >
        {/* <h2 className="text-3xl font-semibold text-center mb-5 text-yellow-300">
          Languages & Technologies
        </h2> */}
        <Technologies />
      </div>
    </>
  );
}
