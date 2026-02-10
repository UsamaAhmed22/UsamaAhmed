import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  GitBranch, Box, Ship, RefreshCw, Cloud, Shield, CheckCircle,
  Terminal, Wrench, Users,
} from 'lucide-react';

const skills = [
  { icon: GitBranch, title: 'CI/CD', items: ['Jenkins', 'GitHub', 'DockerHub'] },
  { icon: Box, title: 'Containerization', items: ['Docker', 'Docker Compose', 'Nginx Reverse Proxy'] },
  { icon: Ship, title: 'Kubernetes', items: ['K3s', 'Manifests', 'Deployments', 'Services', 'ConfigMaps', 'Pod Monitoring'] },
  { icon: RefreshCw, title: 'GitOps', items: ['Argo CD', 'Auto Sync', 'Self Healing'] },
  { icon: Cloud, title: 'Cloud', items: ['AWS (EC2, VPC)', 'Azure (VMs)'] },
  { icon: Shield, title: 'Security Tools', items: ['Trivy', 'OWASP Dependency Check'] },
  { icon: CheckCircle, title: 'Code Quality', items: ['SonarQube Quality Gates'] },
  { icon: Terminal, title: 'OS & Scripting', items: ['Linux (Ubuntu)', 'Bash Scripting'] },
  { icon: Wrench, title: 'Tools', items: ['Git', 'GitHub', 'Jira'] },
  { icon: Users, title: 'Processes', items: ['Agile / Scrum', 'Documentation'] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll mb-12 text-center">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">Skills</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Technical Expertise</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Card
              key={s.title}
              className="animate-on-scroll border-border/50 bg-card/80 backdrop-blur transition-all hover:glow hover:-translate-y-1"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-base">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
