import { ChartsDiscuss } from "@/components/blog/chartsdiscuss";
import HeroBlog from "@/components/blog/heroblog";
import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";

export default function Home() {
  return (
    
      <Main>
      <Section>
        <Container>
          <HeroBlog/>
          <ChartsDiscuss/>
          <Footer/>
        </Container>
      </Section>
    </Main>
    
  );
}
