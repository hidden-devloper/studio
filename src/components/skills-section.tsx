import { Card, CardHeader, CardTitle } from './ui/card';
import { Code, CodeXml, Brush, Smartphone, Palette, Film } from 'lucide-react';

const skills = [
  { name: 'C Programming', icon: <Code size={32} /> },
  { name: 'HTML', icon: <CodeXml size={32} /> },
  { name: 'CSS', icon: <Brush size={32} /> },
  { name: 'Android Development', icon: <Smartphone size={32} /> },
  { name: 'Logo Design', icon: <Palette size={32} /> },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center bg-background/50 hover:bg-background transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
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
