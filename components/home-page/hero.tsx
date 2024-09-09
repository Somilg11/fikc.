// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight, Github } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
// import Placeholder from "@/public/placeholder.webp";
import Aerial from "@/public/AeriaIntersectionDynamics.jpg";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <div className="flex items-center mb-6">
            <Button variant="outline" size="icon">
              <a href="https://github.com/sumitsingh3072/Traffic-Light-Optimization">
                <Github />
              </a>
            </Button>
            <Button
              asChild
              className="ml-3 h-9 w-fit"
              size={"sm"}
              variant={"outline"}
            >
              <Link className="not-prose" href="/software">
                Download <ArrowRight className="w-4" />
              </Link>
            </Button>
          </div>
          <h1>
            <Balancer>
              <span className="md:text-6xl text-3xl">
                Transform Traffic Management with AI-Powered Solutions
              </span>
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground mt-5">
            <Balancer>
              Revolutionize your city traffic flow with cutting-edge AI/ML
              technology designed for smarter, safer roads.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Aerial}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
