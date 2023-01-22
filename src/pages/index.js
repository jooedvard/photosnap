import Nav from "@/components/Nav/Nav";
import Section from "@/components/Section/Section";

import photographer from "@/assets/photographer.jpg";
import laptop from "@/assets/laptop.jpg";
import everyone from "@/assets/everyone.jpg";

export default function Home() {
  return (
    <>
      <Nav />
      <Section img={photographer} type={"section__black"} gradient={true} heading={<h1>CREATE AND<br />SHARE YOUR<br /> PHOTO STORIES.</h1>} text={<p>
        Photosnap is a platform for photographers and visual <br />storytellers.
        We make it easy to share photos, tell <br />stories and connect with
        others.
      </p>} />
      <Section img={laptop} type={"section__white"} gradient={false} heading={<h1>
        Beautiful <br />
        stories <br />
        every time
      </h1>} text={
        <p>
          We provide design templates to ensure your stories <br />look terrific.
          Easily add photos, text, embed maps and <br />media from other networks.
          Then share your story with<br /> everyone.
        </p>} />
      <Section img={everyone} gradient={false} type={"section__black"} bg={"white"} heading={<h1>Designed for<br /> everyone</h1>} text={<p>Photosnap can help you create stories that resonate<br />with your audience. Our tool is designed for<br />photographers of all levels, brands, businesses you<br />name it.</p>} />
    </>
  )
}
