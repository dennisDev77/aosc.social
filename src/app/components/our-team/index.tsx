import { TEAM } from "@/utils/data/team";
import Image from "next/image";
import React from "react";

function OurTeam() {
  return (
    <section className="pt-64" id="team">
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-[1216px] p-6">
        <h2 className="xl:text-5xl text-3xl font-extrabold leading-[130%] md:text-center">
          Conheça o nosso core team incrível
        </h2>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {TEAM.map(
            ({
              id,
              name,
              description,
              ocupation,
              avatar,
            }) => (
              <div
                key={id}
                className="md:max-w-[280px] w-full group"
              >
                <Image
                  src={avatar}
                  alt={name}
                  width={384}
                  style={{objectFit:'cover', objectPosition:'top'}}
                  height={318}
                  className="h-64 w-full object-fill rounded-xl"
                />
                <div className="py-8 md:pl-7 max-h-80">
                  <p className="text-gray-500 text-base font-medium leading-[130%] lg:opacity-0 lg:max-h-0 overflow-hidden lg:group-hover:opacity-100 lg:group-hover:max-h-96 transition-all duration-300">
                    {description}
                  </p>
                  <div className="flex gap-1 flex-col ">
                    <h3 className="font-bold text-2xl leading-[130%]">
                      {name}
                    </h3>
                    <span className="text-base text-red-500 leading-[130%] font-bold uppercase">
                      {ocupation}
                    </span>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
