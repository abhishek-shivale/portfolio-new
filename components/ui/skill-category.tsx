import { Card } from "./card";
import { Progress } from "./progress";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export function SkillCategory({ title, icon: Icon, skills }: SkillCategoryProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="h-6 w-6" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
}