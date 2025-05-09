import { motion } from "framer-motion";
import { LANGANGUES } from "../../const";
import { ImageCatalog } from "../../widgets/ImageCatalog";

export function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
        <div>
          <motion.div className="text-center text-6xl text-white max-w-[800px]">
            <span className="text-center">My Technology Stack</span>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-row justify-raround flex-wrap mt-4 gap-5 items-center text-white">
        {LANGANGUES.map((language, i) => (
          <ImageCatalog
            image_src={language.image_path}
            height={language.height}
            width={language.width}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}
