import type { SparklesIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { cn, useSectionContext } from "../../util";

type NodeProps = {
  id: number;
  Icon: React.FC<ComponentProps<typeof SparklesIcon>>;
  description: string;
  animationDelay?: number;
};

const Node: React.FC<NodeProps> = ({
  id,
  Icon,
  description,
  animationDelay = 0,
}) => {
  const selectedNode = useSectionContext();

  return (
    <section
      id="node"
      className={cn(
        "group/node mb-6 transition-all duration-300 relative max-w-[1920px]",
        id !== selectedNode
          ? "animate-nimbus"
          : "-translate-y-120 absolute bg-linear-to-br from-primary to-primary/60 animate-article-expand rounded-tl-3xl! rounded-md p-0! flex-row! justify-between! items-start!",
        id === selectedNode
          ? id === 1
            ? "-translate-x-[25%]"
            : id === 2
            ? "-translate-x-[55%]"
            : id === 3
            ? "flex-row-reverse! -translate-x-[80%] bg-linear-to-bl rounded-tr-3xl! rounded-tl-md!"
            : id === 4
            ? "flex-row-reverse! -translate-x-[100%] bg-linear-to-bl rounded-tr-3xl! rounded-tl-md!"
            : ""
          : "",
        !Number.isNaN(selectedNode) && id !== selectedNode
          ? "blur-xs opacity-60"
          : ""
      )}
      style={{ animationDelay: `-${animationDelay}ms` }}
      data-selected={id === selectedNode}
    >
      <div id="node-label">
        <Icon color="#fff" />
      </div>
      <span
        id="node-description"
        className={cn(
          "group-data-[selected=true]/node:text-white group-data-[selected=true]/node:text-2xl group-data-[selected=true]/node:mt-3 group-data-[selected=true]/node:mx-4 group-data-[selected=true]/node:tracking-wider group-data-[selected=true]/node:font-medium",
          id === selectedNode ? "animate-fade-in" : ""
        )}
      >
        {description}
      </span>
      {/* <article className=""></article> */}
    </section>
  );
};

export default Node;
