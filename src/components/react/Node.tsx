import type { SparklesIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cn, useSectionContext } from "../../util";

const Aviation: React.FC = () => (
  <div className="flex justify-between w-full pr-10">
    <div className="max-w-200 space-y-2">
      <p>
        For many years at this point I have been a part of a Virtual Air Traffic
        Simulation Network - VATSIM which lets around 200 000 people around the
        world partake in simulating realistic aeronautical procedures as either
        pilots or air traffic controllers.
      </p>
      <p>
        Since 2021 I have been working in various staff positions as a volunteer
        across the network, most notably including the VATSIM Europe Division
        and Latvia vACC - the Latvian subdivision of the network. At the moment
        I hold the positions of Latvia vACC ATC Training Director and Technical
        Director.
      </p>
      <p>
        As ATC Training Director I coordinate the work of the the entire
        department, uphold the subdivision's training standards, and maintain
        the educational resources we provide to our trainees and staff; while as
        Technical Director I develop, update, and maintain all of the vACC's web
        services and automation protocols, including, but not limited to our
        main website, internal training platform, knowledgebase, our servers,
        and various public and internal bots/service workers.
      </p>
    </div>
    <div className="self-center space-y-8 [&>*>a]:space-x-5">
      <div>
        <a href="https://lv-vacc.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/cdn/lv_white.png"
            alt="Latvia vACC logo, white background"
            className="size-10 inline"
          />
          <span>lv-vacc.org</span>
        </a>
      </div>
      <div>
        <a
          href="https://training.lv-vacc.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/cdn/lv_flag.ico"
            alt="Latvia vACC OneTest logo, the Latvian flag emoji"
            className="size-10 inline"
          />
          <span>training.lv-vacc.org</span>
        </a>
      </div>
      <div>
        <a
          href="https://kb.lv-vacc.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/cdn/lv_red.png"
            alt="Latvia vACC logo, carmine background"
            className="size-10 inline"
          />
          <span>kb.lv-vacc.org</span>
        </a>
      </div>
    </div>
  </div>
);

const insetList = [
  "inset-x-[-45%_0]",
  "inset-x-[-25%_0]",
  "inset-x-[0_0]",
  "inset-x-[25%_0]",
  "inset-x-[45%_0]",
];

const avatarList = ["", "", "", "atc.jpg", ""];
const contentList = [null, null, null, <Aviation />, null];

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
        "group/node mb-6 transition-all duration-300 max-w-[1920px] cursor-pointer",
        insetList[id],
        id !== selectedNode
          ? "animate-nimbus px-8 py-3"
          : "mx-auto bg-linear-to-br absolute from-primary to-primary/60 overflow-hidden animate-article-expand rounded-tl-3xl! rounded-md p-0 flex flex-col gap-y-5",
        id === selectedNode
          ? id >= 3
            ? "bg-linear-to-bl rounded-tr-3xl! rounded-tl-md!"
            : id === 4
          : "",
        !Number.isNaN(selectedNode) && id !== selectedNode
          ? "blur-xs opacity-60"
          : ""
      )}
      style={{ animationDelay: `-${animationDelay}ms` }}
      data-selected={id === selectedNode}
    >
      <div
        className={cn(
          id === selectedNode
            ? "justify-between items-start"
            : "flex-col justify-end items-center gap-y-6",
          id === selectedNode
            ? id >= 3
              ? "flex-row-reverse"
              : "flex-row"
            : "",
          "flex"
        )}
      >
        <div id="node-label">
          <Icon color="#fff" />
        </div>
        <h2
          id="node-description"
          className={cn(
            "group-data-[selected=true]/node:text-white group-data-[selected=true]/node:text-2xl group-data-[selected=true]/node:mt-3 group-data-[selected=true]/node:mx-4 group-data-[selected=true]/node:tracking-wider group-data-[selected=true]/node:font-medium",
            id === selectedNode ? "animate-fade-in" : ""
          )}
        >
          {description}
        </h2>
      </div>
      <article
        className={cn(
          "w-full grow group-data-[selected=false]/node opacity-0 text-white *:first:self-start flex justify-between px-8 text-start gap-x-10 text-lg",
          id === selectedNode ? "animate-fade-in" : "hidden"
        )}
      >
        {contentList[id]}
        <img
          src={`./cdn/${avatarList[id]}`}
          alt="A photo of Arina"
          className="rounded-full max-h-80 self-center"
        />
      </article>
    </section>
  );
};

export default Node;
