import type { SparklesIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { cn, useSectionContext } from "../../util";

const insetList = [
  "inset-x-[-45%_0]",
  "inset-x-[-25%_0]",
  "inset-x-[0_0]",
  "inset-x-[25%_0]",
  "inset-x-[45%_0]",
];

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
        "group/node mb-6 transition-all duration-300 max-w-[1920px]",
        insetList[id],
        id !== selectedNode
          ? "animate-nimbus"
          : "mx-auto bg-linear-to-br absolute from-primary to-primary/60 animate-article-expand rounded-tl-3xl! rounded-md p-0! flex-row! justify-between! items-start!",
        id === selectedNode
          ? id >= 3
            ? "flex-row-reverse! bg-linear-to-bl rounded-tr-3xl! rounded-tl-md!"
            : id === 4
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
