import { Intro } from "./subpage/Introduction";
import { CustomNavBar } from "../widgets/navbar/CustomNavBar";

export function HomePage() {
  return (
    <div>
      <CustomNavBar />
      <Intro />
    </div>
  );
}
