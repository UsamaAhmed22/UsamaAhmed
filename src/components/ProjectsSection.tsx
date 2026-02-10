import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

const projects = [
  {
    title: 'CI/CD and GitOps Pipeline on Azure',
    tools: ['Jenkins', 'Docker', 'DockerHub', 'ArgoCD', 'GitHub', 'SonarQube', 'Trivy', 'OWASP', 'K3s'],
    description:
      'Designed and deployed an end-to-end CI/CD pipeline on Azure VMs. Automated build, testing, Docker image creation, vulnerability scanning, dependency scanning, and code quality gates. Implemented GitOps deployments on K3s using Argo CD with automated sync and self-healing.',
  },
  {
    title: 'Full-Stack App with Docker & Docker Compose',
    tools: ['Docker', 'Node.js', 'MongoDB', 'Nginx'],
    description:
      'Designed a multi-container full-stack web application using Docker. Orchestrated services using Docker Compose, reducing setup time by 70%. Configured Nginx reverse proxy for routing and load handling.',
  },
  {
    title: 'AWS Cloud Architecture Design',
    tools: ['AWS', 'EC2', 'VPC'],
    description:
      'Designed a scalable and secure cloud environment for a sample workload, focusing on networking, isolation, and resilience. Led peer-review sessions and improved the architecture using feedback.',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll mb-12 text-center">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">Projects</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Featured Work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="animate-on-scroll flex flex-col border-border/50 bg-card/80 backdrop-blur transition-all hover:glow hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs font-mono">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" variant="outline" className="gap-1.5">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </Button>
                <Button size="sm" variant="ghost" className="gap-1.5">
                  <ExternalLink className="h-3.5 w-3.5" /> Case Study
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
