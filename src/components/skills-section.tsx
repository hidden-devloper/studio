import { Card, CardHeader, CardTitle } from './ui/card';
import { Code, Smartphone, Rocket, Film } from 'lucide-react';

const skills = [
  { name: 'Web Development', icon: <Code size={32} /> },
  { name: 'App Development', icon: <Smartphone size={32} /> },
  { name: 'SEO', icon: <Rocket size={32} /> },
  { name: 'Video Editing', icon: <Film size={32} /> },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl">My Skills</h2>
          <p className="mt-4 text-lg text-foreground/80">A showcase of my technical and creative abilities.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center bg-background/50 transition-all duration-300 transform hover:-translate-y-2 shadow-xl shadow-primary/20">
              <div className="mb-4 text-primary">{skill.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="text-lg font-semibold font-headline">{skill.name}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
