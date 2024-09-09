import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";
import CTASOFT from "@/components/software/ctasoftware";
import HeroSoftware from "@/components/software/herosoftware";

export default function Home() {
  return (
    
      <Main>
      <Section>
        <Container>
          <HeroSoftware/>
          <CTASOFT/>
          <Footer/>
        </Container>
      </Section>
    </Main>
    
  );
}
