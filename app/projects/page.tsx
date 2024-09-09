import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";
import FeatureLeftProject from "@/components/projects/featured-left-proj";
import HeroProject from "@/components/projects/heroprojcts";
import FeatureCompProject from "@/components/projects/featured-comp-proj";
import FeatureRightProject from "@/components/projects/featured-right-proj";

export default function Home() {
  return (
    
      <Main>
      <Section>
        <Container>
          <HeroProject/>
          <FeatureCompProject/>
          <FeatureLeftProject/>
          <FeatureRightProject/>
          <Footer/>
        </Container>
      </Section>
    </Main>
    
  );
}
