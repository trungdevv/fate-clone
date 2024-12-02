import { Faq } from "./component/faq";
import Intro from "./component/intro";
import SliderShow from "./component/silder-show";
import { Video } from "./component/video";

export default function Home() {
  return (
    <>
      <Intro />
      <SliderShow />
      <Video />
      <Faq />
    </>
  );
}
