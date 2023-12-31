import { FaComment } from "react-icons/fa6";
import { MainProps, ProductRequestsProps } from "../../App";
import Upvotes from "../productcard/Upvotes";
import { Link } from "react-router-dom";

interface RoadmapCard extends ProductRequestsProps {
  handleCounter: (value: number) => void;
}

export default function RoadmapCard(props: RoadmapCard) {
  const {
    category,
    description,
    id,
    status,
    title,
    upvotes,
    comments,
    handleCounter,
  } = props;
  //  change color based on status text

  const statusColor =
    status === "planned"
      ? "bg-[#f49f85]"
      : status === "in-progress"
      ? "bg-[#ad1fea]"
      : status === "live"
      ? "bg-[#62bcfa]"
      : "";

  const statusColorBorder =
    status === "planned"
      ? "border-[#f49f85]"
      : status === "in-progress"
      ? "border-[#ad1fea]"
      : status === "live"
      ? "border-[#62bcfa]"
      : "";

  return (
    <div
      className={`space-y-3  text-[#647196] border-t-[8px]  ${statusColorBorder}  bg-white h-[260px] p-6 rounded-lg`}
    >
      {/* color of live text */}
      <div className="flex gap-x-3 items-center">
        <div
          className={` w-2 h-2 ${statusColor} rounded-full`}
        ></div>
        <h1>{status.slice(0, 1).toUpperCase() + status.slice(1)}</h1>
      </div>
      <Link
        to={`/comment/${id}`}
        className="font-bold hover:text-blue-500 duration-300"
      >
        {title}
      </Link>
      <p className="text-sm">{description}</p>
      <div className="text-[#4661e6] font-semibold text-[15px] bg-[#f2f4ff] w-fit p-1 px-3 rounded-lg">
        {category.slice(0, 1).toUpperCase() + category.slice(1)}
      </div>

      <div className="flex">
        <Upvotes
          isRoadmap={true}
          id={id}
          upvotes={upvotes}
          handleCounter={handleCounter}
        />
        <div className="flex justify-end gap-x-2 flex-1 items-center">
          <FaComment className="text-lg text-[#CDD2EE]" />
          <span className="font-bold">
            {comments?.length ? comments?.length : "0"}
          </span>
        </div>
      </div>
    </div>
  );
}
