import Nav from "@/components/Nav/Nav";
import Featured from "@/components/Stories/Featured";
import mountains from "@/assets/picture (2).jpg";
import Footer from "@/components/Footer/Footer";

function Stories(){
    return <>
        <Nav />
        <Featured img={mountains} title={"Hazy full moon of appalachia"} author={"John Appleseed"} text={"The dissected plateau area, while not actually made up of geological mountains, is popularly called mountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."}/>
        <Footer />
    </>
}

export default Stories;