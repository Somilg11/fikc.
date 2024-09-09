// React and Next.js imports
// import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
// import Placeholder from "@/public/placeholder.webp";
// import Aitrafic from "@/public/trafficaicontrol.jpg";
import BeforeSim from "@/public/before_sim.png";
import AfterSim from "@/public/after_sim.png";

const FeatureCompProject = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
      <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border md:mb-5 mb-12">
      {/* <p className="flex items-center justify-center text-3xl font-bold text-zinc-700 h-full w-full">Before</p> */}
          <Image
            src={BeforeSim}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border md:mb-5 mb-12">
        {/* <p className="flex items-center justify-center text-3xl font-bold text-zinc-700 h-full w-full">After</p> */}
          <Image
            src={AfterSim}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureCompProject;
