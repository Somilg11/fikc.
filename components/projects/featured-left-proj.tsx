// React and Next.js imports
import Image from "next/image";
// import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
// import Placeholder from "@/public/placeholder.webp";
// import Traficlight from "@/public/trafficlight.avif";
import PlotQueue from "@/public/plot_queue.png"

const FeatureLeftProject = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-50 overflow-hidden rounded-lg border">
        {/* <p className="flex items-center justify-center text-3xl font-bold text-zinc-700 h-full">Before</p> */}
          <Image
            src={PlotQueue}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0 md:text-5xl text-3xl">Plot Queue</h3>
          <p className="font-light leading-[1.4] opacity-70">
          Leverage AI/ML algorithms to monitor traffic in real-time, reducing congestion and improving road safety. Our software continuously adapts to changing traffic patterns to optimize flow.
          </p>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureLeftProject;
