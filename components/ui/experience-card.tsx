import { Card } from "./card";
import { Badge } from "./badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{company}</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2 md:mt-0">{period}</p>
      </div>
      <div className="mb-4 text-muted-foreground">
        <ul>
          {description.map((paragraph, index) => (
              <li key={index} className="text-sm">{paragraph}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
}