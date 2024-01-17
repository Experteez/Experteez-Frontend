"use client";
import ProjectCard from "@/components/project/ProjectCard";

interface ListProjectProps {
  data: any;
}

export default function ListProject({ data }: ListProjectProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16">
      {data.map((project: any) => {
        const deadline: Date = new Date(project.deadline);
        const now: Date = new Date();

        const durationInMilliseconds: number = deadline.getTime() - now.getTime();
        const days: number = Math.floor(durationInMilliseconds / (1000 * 60 * 60 * 24));

        let duration: string;
        if (days < 30) {
          duration = `${days} days`;
        } else {
          const months: number = Math.floor(days / 30);
          duration = `${months} months`;
        }

        return (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.description}
            image={project.image ?? "/mentor/google.png"}
            category={project.category ?? ["Technology", "Software"]}
            location={project.location ?? "Indonesia"}
            duration={duration ?? "1 month"}
          />
        );
      })}
    </div>
  );
}
