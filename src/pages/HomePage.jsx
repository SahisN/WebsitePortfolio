import { Intro } from "../widgets/Introduction";
import { CustomNavBar } from "./navbar/CustomNavBar";

export function HomePage() {
  return (
    <div>
      <CustomNavBar />
      <Intro />
    </div>
  );
}
