
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight, Github } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
// import Placeholder from "@/public/placeholder.webp";

const HeroBlog = () => {
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
          <h1 className="text-center">
            <Balancer>
              <span className="md:text-6xl text-3xl">Analysis</span>
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground mt-5 text-center">
            <Balancer>
            Will be updated Soon!!!
            </Balancer>
          </h3>
        </div>
      </Container>
    </Section>
  );
};

export default HeroBlog;
