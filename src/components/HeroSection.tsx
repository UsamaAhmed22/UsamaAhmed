import { ArrowDown, Mail } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const badges = ['Jenkins', 'Docker', 'Kubernetes', 'GitOps', 'AWS', 'Azure', 'Linux'];

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-sm font-medium tracking-widest uppercase text-primary">
          DevOps Engineer
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          CI/CD{' '}
          <span className="text-gradient">•</span> Docker{' '}
          <span className="text-gradient">•</span> Kubernetes{' '}
          <span className="text-gradient">•</span> Cloud
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Fresh graduate Computer Science student turned DevOps Engineer with hands-on internship
          experience in Jenkins pipelines, Docker containerization, Kubernetes deployments, and
          GitOps using Argo CD.
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" /> View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {badges.map((b, i) => (
            <Badge
              key={b}
              variant="secondary"
              className="px-3 py-1 text-xs font-mono animate-fade-in"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
            >
              {b}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
