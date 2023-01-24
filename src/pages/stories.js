import Nav from "@/components/Nav/Nav";
import Featured from "@/components/Stories/Featured";
import mountains from "@/assets/picture (2).jpg";
import Footer from "@/components/Footer/Footer";

const API_KEY = "33059658-8a1fcafabbd31d09bccb159b7";
const PIXABAY = " https://pixabay.com/api/?key=";

export async function getServerSideProps() {
    let request = await fetch(PIXABAY + API_KEY);
    let images = await request.json();
    return {
        props: {
            images: images, 
        },
    };
}

function Stories({images}) {
    return <>
        <Nav />
        <Featured   images={images} img={mountains} title={"Hazy full moon of appalachia"} author={"John Appleseed"} text={"The dissected plateau area, while not actually made up of geological mountains, is popularly called mountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."} />
        <Footer />
    </>
}

export default Stories;