import { MailIcon, type SparklesIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cn, useSectionContext } from "../../util";

const About: React.FC = () => (
  <div className="flex max-2_5xl:flex-col justify-between w-full pr-10 gap-10 pb-5 2_5xl:text-lg">
    <div className="max-w-200 space-y-2">
      <p>
        I come from Latvia - a small country in eastern Europe and all my life I
        have lived by the idea that perspective is key. From a young age I was
        the so-called gifted child: excellence at school, various contests,
        olympiads, extracurriculars, all those things were about me. The
        difference that makes me stand out is that I managed to avoid burnout in
        a way that might surprise some and terrify others.
      </p>
      <p>
        I was quick to pick up that doing everything everywhere and all at once
        was an endeavour for Hermione Granger with a time turner, but not for
        me. As a result, I learnt to plan, delegate, and multitask; I learnt to
        look at any task or problem from a different perspective which allowed
        me to succeed both academically and in my personal interests. Over the
        years I have formed a few core principles: do no harm, gain the most
        progress by applying the least effort, and do as much benefit to others
        as possible by your limited effort.
      </p>
      <p>
        And now here I am: a mechatronics engineering student with a passion for
        high-quality and accessible software that became a tutor at 16 and a
        secondary school teacher at just 18. I have been a national champion in
        physics olympiads for many years and got numerous awards, including a
        personal note of gratitude from the Prime Minister of Latvia for my
        academic achievements. In my spare time I help to run and maintain a
        community of aviation enthusiasts and work as a volunteer educator for
        that same organisation.
      </p>
      <p>
        I advance my skills and keep myself informed; I expand my scope of
        knowledge by observing and teaching; I do not suffer from insanity, I
        enjoy every minute of it.
      </p>
    </div>
    <div className="2_5xl:self-center space-y-4 [&>*>a]:space-x-3 [&>*>a>*]:align-middle [&>*>a]:hover:opacity-80 [&>*>a]:transition-opacity">
      <p>Wish to connect with me or see what I do?</p>
      <div>
        <a
          href="mailto:ari@mistclick.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailIcon className="inline" />
          <span>ari@mistclick.me</span>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/MISTCLICK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="inline size-6"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <title></title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/ari-v/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/cdn/InBug-White.png" alt="" className="inline size-6" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  </div>
);

const Engineer: React.FC = () => (
  <div className="flex max-2_5xl:flex-col justify-between w-full pr-10 gap-10 pb-5 2_5xl:text-lg">
    <div className="max-w-200 space-y-2">
      <p>
        In 2024 I was admitted to the <em>BSc in Engineering (Mechatronics)</em>{" "}
        programme at the <em>University of Southern Denmark (SDU)</em>. In my
        studies I am continuing to follow the path of academic excellence and am
        especially focusing on maths and embedded systems.
      </p>
      <p>
        My choice to study mechatronics engineering might seem counterintuitive
        given my expertise as a software engineer, however, a large part of the
        field I am studying is to do with development of embedded systems and
        programming of microcontrollers. I strongly believe that expansion of my
        knowledge across different paradigms of software engineering will help
        me become a true expert in building and analysing software at all levels
        of user interaction and complexity.
      </p>
      <p>
        In project work - part of my studies at SDU, I especially focus on
        developing the electronics and software parts. Among projects of note
        completed by me are a railcar and a motor test stand.
      </p>
      <p>
        To further broaden my skills in November of 2024 I joined{" "}
        <em>The Als Rocketry Club</em> - a student organisation at SDU. My role
        in the club is that of a Systems Administrator. I maintain the club's
        website, inventory tracking system, and am developing applications for
        rocket tracking and control.
      </p>
    </div>
    <div className="2_5xl:self-center space-y-8 [&>*>a]:space-x-5 [&>*>a>*]:align-middle [&>*>a]:hover:opacity-80 [&>*>a]:transition-opacity">
      <div>
        <a href="https://sdu.dk" target="_blank" rel="noopener noreferrer">
          <img
            src="/cdn/SDU.png"
            alt="SDU logo"
            className="2_5xl:h-9 h-6 inline"
          />
          <span>sdu.dk</span>
        </a>
      </div>
      <div>
        <a href="https://the-arc.dk" target="_blank" rel="noopener noreferrer">
          <img
            src="/cdn/arc.png"
            alt="Als Rocketry Club logo"
            className="2_5xl:h-9 h-6 inline"
          />
          <span>the-arc.dk</span>
        </a>
      </div>
    </div>
  </div>
);

const Developer: React.FC = () => <></>;

const Aviation: React.FC = () => (
  <div className="flex max-2_5xl:flex-col justify-between w-full pr-10 gap-10 pb-5 2_5xl:text-lg">
    <div className="max-w-200 space-y-2">
      <p>
        For many years I have been a part of a Virtual Air Traffic Simulation
        Network - VATSIM which lets around 200 000 people around the world
        partake in simulating realistic aeronautical procedures as either pilots
        or air traffic controllers.
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
    <div className="2_5xl:self-center space-y-8 [&>*>a]:space-x-5 [&>*>a>*]:align-middle [&>*>a]:hover:opacity-80 [&>*>a]:transition-opacity">
      <div>
        <a href="https://vatsim.net" target="_blank" rel="noopener noreferrer">
          <img
            src="/cdn/VATSIM_Logo_Official_1000px.png"
            alt="VATSIM logo"
            className="2_5xl:w-45 w-35 bg-white px-3 py-2 rounded-md"
          />
        </a>
      </div>
      <div>
        <a href="https://lv-vacc.org" target="_blank" rel="noopener noreferrer">
          <img
            src="/cdn/lv_white.png"
            alt="Latvia vACC logo, white background"
            className="2_5xl:size-10 size-6 inline"
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
            className="2_5xl:size-10 size-6 inline"
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
            className="2_5xl:size-10 size-6 inline"
          />
          <span>kb.lv-vacc.org</span>
        </a>
      </div>
    </div>
  </div>
);

const Teacher: React.FC = () => <></>;

const insetList = [
  "inset-x-[-45%_0]",
  "inset-x-[-25%_0]",
  "inset-x-[0_0]",
  "inset-x-[25%_0]",
  "inset-x-[45%_0]",
];

const avatarList = ["about.jpg", "engineer.jpg", "", "atc.jpg", ""];
const contentList = [
  <About />,
  <Engineer />,
  <Developer />,
  <Aviation />,
  <Teacher />,
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
        "group/node mb-6 duration-300 transition-[height_width] max-w-[1920px] cursor-pointer",
        insetList[id],
        id !== selectedNode
          ? "animate-nimbus px-8 py-3"
          : "mx-auto bg-linear-to-br absolute from-primary to-primary/60 animate-article-expand rounded-tl-3xl! rounded-md p-0 flex flex-col gap-y-5 z-10 min-h-120!",
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
            "group-data-[selected=true]/node:text-white group-data-[selected=true]/node:text-xl lg:group-data-[selected=true]/node:text-2xl group-data-[selected=true]/node:mt-3 group-data-[selected=true]/node:mx-4 group-data-[selected=true]/node:tracking-wider group-data-[selected=true]/node:font-medium",
            id === selectedNode ? "animate-fade-in" : ""
          )}
        >
          {description}
        </h2>
      </div>
      <article
        className={cn(
          "w-full grow group-data-[selected=false]/node opacity-0 text-white *:first:self-start flex max-lg:flex-col-reverse lg:justify-between px-4 md:px-8 text-start gap-10",
          id === selectedNode ? "animate-fade-in" : "hidden"
        )}
      >
        {contentList[id]}
        <img
          src={`./cdn/${avatarList[id]}`}
          alt="A photo of Arina"
          className="rounded-full max-h-60 lg:max-h-80 self-center bg-black"
        />
      </article>
    </section>
  );
};

export default Node;
