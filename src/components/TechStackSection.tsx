import {
  GitBranch, Box, Ship, RefreshCw, Cloud, Shield, CheckCircle,
  Terminal, Wrench, FileCode,
} from 'lucide-react';

const stack = [
  { icon: GitBranch, label: 'Jenkins' },
  { icon: Box, label: 'Docker' },
  { icon: Ship, label: 'Kubernetes' },
  { icon: RefreshCw, label: 'ArgoCD' },
  { icon: Cloud, label: 'AWS' },
  { icon: Cloud, label: 'Azure' },
  { icon: Shield, label: 'Trivy' },
  { icon: CheckCircle, label: 'SonarQube' },
  { icon: Terminal, label: 'Linux' },
  { icon: FileCode, label: 'Bash' },
  { icon: Wrench, label: 'Git' },
  { icon: Shield, label: 'OWASP' },
];

export function TechStackSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll mb-10 text-center">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">Tech Stack</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Tools I Work With</h2>
        </div>

        <div className="animate-on-scroll flex flex-wrap items-center justify-center gap-6">
          {stack.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1.5 transition-transform hover:scale-110">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-card border border-border/50 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <span className="text-xs font-mono text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
