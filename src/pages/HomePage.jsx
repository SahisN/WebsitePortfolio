import { CustomNavBar } from "../widgets/CustomNavBar";
import { Intro } from "./subpage/Introduction";

export function HomePage() {
  return (
    <div>
      <CustomNavBar />
      <Intro />
    </div>
  );
}
