import { Droplets, Leaf, Sun, Umbrella } from "lucide-react";
import React from "react";
import CareTip from "./CareTip";
import SectionHeading from "../sheard/SectionHeading";

const TipsSection = () => {
  const title = "Summer Care Essentials";
  const subtitle =
    "Keep your vibe cool and your skin protected with our expert-curated seasonal tips.";

  return (
    <div>
      <section className="w-full">
        <div className=" container mx-auto">
          <SectionHeading title={title} subtitle={subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
            <CareTip
              icon={<Sun className="text-amber-600" />}
              title="Sun Protection"
              bgColor="bg-amber-100"
              desc="Apply broad-spectrum SPF 30+ every two hours for ultimate skin safety."
            />
            <CareTip
              icon={<Droplets className="text-tertiary" />}
              title="Stay Hydrated"
              bgColor="bg-sky-200"
              desc="Drink at least 3 liters of water daily to maintain energy levels in high heat."
            />
            <CareTip
              icon={<Leaf className="text-secondary" />}
              title="Linen Living"
              bgColor="bg-orange-200"
              desc="Opt for natural fibers like linen and organic cotton for maximum breathability."
            />
            <CareTip
              icon={<Umbrella className="text-primary" />}
              title="Seek Shade"
              bgColor="bg-orange-500"
              desc="The sun is strongest between 10am and 4pm. Enjoy the terrace shade."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TipsSection;
