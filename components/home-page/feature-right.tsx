// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
// import Placeholder from "@/public/placeholder.webp";
import Aitrafic from "@/public/trafficaicontrol.jpg";

const FeatureRight = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0 md:text-5xl text-3xl">Real-Time Traffic Monitoring</h3>
          <p className="font-light leading-[1.4] opacity-70">
          Leverage AI/ML algorithms to monitor traffic in real-time, and extraction of featured such as traffic congestion, type of vehicles, and much more.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="/software">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="https://docs.ultralytics.com/">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Aitrafic}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureRight;
