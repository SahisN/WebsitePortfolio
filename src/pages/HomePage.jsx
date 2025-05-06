import { CustomNavBar } from "../widgets/navbar/CustomNavBar";
import { Intro } from "./subpage/Introduction";

export function HomePage() {
  return (
    <div>
      <CustomNavBar />
      <Intro />
    </div>
  );
}
