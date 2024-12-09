import { Card } from "./card";
import { CheckCircle2 } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

export function EducationCard({
  degree,
  institution,
  period,
  description,
  achievements,
}: EducationCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">{degree}</h3>
          <p className="text-muted-foreground">{institution}</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2 md:mt-0">{period}</p>
      </div>
      <p className="mb-4 text-muted-foreground">{description}</p>
      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-sm">{achievement}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}