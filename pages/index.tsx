import { Inter } from "@next/font/google";
import Picturedbox from "./components/Picturedbox"
import TestBox from "./components/test.js"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="unit-section" id="featured-work-sec" >
      <TestBox></TestBox>
      <div id="featured-work-sec-text-container">
        <h1>FEATURED WORK</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p> 
        <button>SEE ALL WORK</button>
      </div>
      <div id="featured-work-sec-img-container">
        <div className="big-img">
          <img  src="img/featured-work-sec-img-1.png" alt="Dangcing Stars" />
          <p>Dangcing Stars</p>
          <p>2022</p>
        </div>
        <Picturedbox></Picturedbox>
        <div className="small-img">
          <img src="" alt="Enjoy Silence" />
          <p>Enjoy Silence</p>
          <p>2022</p>
        </div>
        <div className="small-img">
        <img src="" alt="Pure Vision" />
          <p>Pure Vision</p>
          <p>2022</p>
        </div>
        <div className="small-img">
          <img src="" alt="Boring Brand" />
          <p>Boring Brand</p>
          <p>2022</p>
        </div>
        <div className="small-img">
          <img src="" alt="New Culture" />
          <p>New Culture</p>
          <p>2022</p>
        </div>
      </div>
    </div>
  );
}
