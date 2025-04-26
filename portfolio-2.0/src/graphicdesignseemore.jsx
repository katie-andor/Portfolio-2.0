import { Link, useParams } from "react-router-dom";
import gdprojects from "./data/graphicdesignprojects";
import backarrow from "../public/images/backarrowicon.svg";

function GraphicDesignSeeMore() {
  const { id } = useParams();
  const project = gdprojects[id];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="px-4">
      <div className="flex flex-row items-center">
        <Link to='/'>
          <img
            tabIndex={0}
            src={backarrow}
            alt="a back arrow icon"
            className="h-[40px] md:h-[50px] mr-4"
          />
        </Link>
        <h1 className="text-[30px] sm:text-[40px] font-bold">
          {project.title}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-between">
        {project.allImages.map((img, index) => {
          return (
            <div
              key={index}
              tabIndex={0}
              className="w-[100%] sm:w-[49%] flex items-center justify-center"
            >
              <img
                src={img}
                alt={project.allAlt}
                className="w-full my-4 border-2 border-black flex flex-row items-center justify-between"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GraphicDesignSeeMore;
