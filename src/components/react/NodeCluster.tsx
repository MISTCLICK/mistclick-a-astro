import { useState } from "react";
import {
  BinaryIcon,
  BookOpenIcon,
  PocketKnifeIcon,
  RadarIcon,
  SparklesIcon,
} from "lucide-react";

import Node from "./Node";
import { cn, SectionContext } from "../../util";
import "../../styles/nodes.css";

const NodeCluster: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState(NaN);

  return (
    <SectionContext value={selectedNode}>
      <div
        id="node-supercontainer"
        className="h-150 flex flex-col justify-end gap-y-10 w-full"
      >
        <p
          className={cn(
            "text-center group-hover/hero:opacity-100 opacity-0 transition-opacity text-xl tracking-wide",
            !Number.isNaN(selectedNode) ? "opacity-0!" : ""
          )}
        >
          I am a...
        </p>

        <div
          id="node-container"
          className="flex justify-around items-end flex-wrap"
        >
          <button
            className={cn(
              !Number.isNaN(selectedNode) && selectedNode !== 0
                ? "pointer-events-none"
                : ""
            )}
            onClick={() =>
              selectedNode === 0 ? setSelectedNode(NaN) : setSelectedNode(0)
            }
          >
            <Node
              id={0}
              Icon={SparklesIcon}
              description="Creative Problem-Solver"
              animationDelay={500}
            />
          </button>
          <button
            className={cn(
              !Number.isNaN(selectedNode) && selectedNode !== 1
                ? "pointer-events-none"
                : ""
            )}
            onClick={() =>
              selectedNode === 1 ? setSelectedNode(NaN) : setSelectedNode(1)
            }
          >
            <Node
              id={1}
              Icon={PocketKnifeIcon}
              description="Mechatronics Engineering Student"
              animationDelay={1500}
            />
          </button>
          <button
            className={cn(
              !Number.isNaN(selectedNode) && selectedNode !== 2
                ? "pointer-events-none"
                : ""
            )}
            onClick={() =>
              selectedNode === 2 ? setSelectedNode(NaN) : setSelectedNode(2)
            }
          >
            <Node
              id={2}
              Icon={BinaryIcon}
              description="Full-Stack Software Engineer"
              animationDelay={7500}
            />
          </button>
          <button
            className={cn(
              !Number.isNaN(selectedNode) && selectedNode !== 3
                ? "pointer-events-none"
                : ""
            )}
            onClick={() =>
              selectedNode === 3 ? setSelectedNode(NaN) : setSelectedNode(3)
            }
          >
            <Node
              id={3}
              Icon={RadarIcon}
              description="Aviation Educator"
              animationDelay={2500}
            />
          </button>
          <button
            className={cn(
              !Number.isNaN(selectedNode) && selectedNode !== 4
                ? "pointer-events-none"
                : ""
            )}
            onClick={() =>
              selectedNode === 4 ? setSelectedNode(NaN) : setSelectedNode(4)
            }
          >
            <Node
              id={4}
              Icon={BookOpenIcon}
              description="Teacher & Tutor"
              animationDelay={5000}
            />
          </button>
        </div>
      </div>
    </SectionContext>
  );
};

export default NodeCluster;
