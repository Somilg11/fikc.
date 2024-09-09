import ContactInfo from "@/components/contact/contactinfo";
import { Container, Main, Section } from "@/components/craft";
import Footer from "@/components/home-page/footer";

export default function Home() {
  return (
    
      <Main>
      <Section>
        <Container>
          <ContactInfo/>
          <Footer/>
        </Container>
      </Section>
    </Main>
    
  );
}
