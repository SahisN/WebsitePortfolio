import { motion } from "framer-motion";
import {
  DATABASES,
  DELOYPMENTS,
  FRAMEWORKS,
  LANGANGUES,
  TOOLS,
} from "../../const";
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
            name={language.language_name}
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
            key={i}
          />
        ))}
      </div>
    </section>
  );
}
