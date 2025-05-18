import { CustomNavBar } from "../widgets/CustomNavBar";
import { Intro } from "./subpage/Introduction";
import { Projects } from "./subpage/Projects";
import { Skills } from "./subpage/Skills";

export function HomePage() {
  return (
    <div>
      <CustomNavBar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}
