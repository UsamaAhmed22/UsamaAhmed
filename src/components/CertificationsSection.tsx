import { Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const certs = [
  { title: 'Introduction to Git & GitHub', issuer: 'Coursera' },
  { title: 'Docker for Beginners', issuer: 'KodeKloud' },
  { title: 'Bash Shell and Basic Scripting in Linux', issuer: 'Coursera' },
  { title: 'Scrum Foundation Professional Certificate (SFPC)', issuer: 'CertiProf' },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll mb-12 text-center">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">Certifications</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Credentials</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {certs.map((c) => (
            <Card key={c.title} className="animate-on-scroll border-border/50 bg-card/80 backdrop-blur transition-all hover:glow">
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{c.title}</p>
                  <p className="text-xs text-muted-foreground font-mono">{c.issuer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
