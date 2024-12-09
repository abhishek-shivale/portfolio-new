import { Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card } from "./card";
import ShineBorder from "./shine-border";
import { BorderBeam } from "./border-beam";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  // demoUrl: string;
  githubUrl: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  // demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 z-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover z-50 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-4">
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          {/* <Button size="sm" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button> */}
        </div>
      </div>
    </Card>
  );
}
