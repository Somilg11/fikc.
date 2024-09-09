// React and Next.js imports
// import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
// import { Button } from "@/components/ui/button";

// Asset imports
// import Placeholder from "@/public/placeholder.webp";
// import Aitrafic from "@/public/trafficaicontrol.jpg";
import PlotReward from "@/public/plot_reward.png"

const FeatureRightProject = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0 md:text-5xl text-3xl">Plot Reward</h3>
          <p className="font-light leading-[1.4] opacity-70">
          Leverage AI/ML algorithms to monitor traffic in real-time, and extraction of featured such as traffic congestion, type of vehicles, and much more.
          </p>
        </div>
        <div className="not-prose relative flex h-50 overflow-hidden rounded-lg border">
          <Image
            src={PlotReward}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureRightProject;
