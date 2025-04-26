import { useParams } from "react-router-dom";
import gdprojects from "./data/graphicdesignprojects";

function GraphicDesignSeeMore() {
  const { id } = useParams();
  const project = gdprojects[id];

  if (!project) return <div>Project not found</div>;

  return (
    <div className="px-4">
      <h1 className="text-[40px] font-bold">{project.title}</h1>
      <div className="flex flex-row flex-wrap justify-between">
        {project.allImages.map((img, index) => {
          return (
            <div key={index} className='w-[49%] flex items-center justify-center'>
              <img
                src={img}
                alt=""
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
