import { motion } from "framer-motion";
import {
  DATABASES,
  DELOYPMENTS,
  FRAMEWORKS,
  LANGANGUES,
  TOOLS,
} from "../../const";
import { ImageCatalog } from "../../widgets/ImageCatalog";
import { fadeIn, slideInFromTop } from "../../lib/animations";

export function Skills() {
  return (
    <div className="py-20">
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden scroll-mt-[80px]"
      >
        <div className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              className="text-center text-6xl text-white max-w-[800px]"
            >
              <motion.span className="text-center" variants={fadeIn(1.3)}>
                My Technology Stack
              </motion.span>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-row justify-raround flex-wrap mt-4 gap-5 items-center text-white">
          {LANGANGUES.map((language, i) => (
            <ImageCatalog
              image_src={language.image_path}
              height={language.height}
              width={language.width}
              name={language.language_name}
              index={i}
              key={i}
            />
          ))}
        </div>

        <div className="flex flex-row justify-raround flex-wrap mt-4 gap-5 items-center text-white">
          {TOOLS.map((tool, i) => (
            <ImageCatalog
              image_src={tool.image_path}
              height={tool.height}
              width={tool.width}
              name={tool.tool_name}
              index={i}
              key={i}
            />
          ))}
        </div>

        <div className="flex flex-row justify-raround flex-wrap mt-4 gap-5 items-center text-white">
          {FRAMEWORKS.map((framework, i) => (
            <ImageCatalog
              image_src={framework.image_path}
              height={framework.height}
              width={framework.width}
              name={framework.framework_name}
              index={i}
              key={i}
            />
          ))}
        </div>

        <div className="flex flex-row justify-raround flex-wrap mt-4 gap-5 items-center text-white">
          {DELOYPMENTS.map((deployment, i) => (
            <ImageCatalog
              image_src={deployment.image_path}
              height={deployment.height}
              width={deployment.width}
              name={deployment.deployment_service_name}
              index={i}
              key={i}
            />
          ))}
        </div>

        <div className="flex flex-row justify-raround flex-wrap mt-4 gap-5 items-center text-white">
          {DATABASES.map((database, i) => (
            <ImageCatalog
              image_src={database.image_path}
              height={database.height}
              width={database.width}
              name={database.database_name}
              index={i}
              key={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
