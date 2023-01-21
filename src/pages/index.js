import Nav from "@/components/Nav/Nav";
import Section from "@/components/Section/Section";
import photographer from "@/assets/photographer.jpg";

export default function Home() {
  return (
    <>
      <Nav />
      <Section img={photographer} />
    </>
  )
}
