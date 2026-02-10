import { Card, CardContent } from './ui/card';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">About Me</p>
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl">Usama Ahmed</h2>
        </div>

        <Card className="animate-on-scroll border-border/50 bg-card/50 backdrop-blur glow">
          <CardContent className="p-6 sm:p-8">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Usama Ahmed is a fresh graduate in Computer Science from Mohammad Ali Jinnah University
              with strong practical experience in CI/CD automation, containerization, GitOps workflows,
              and cloud infrastructure. He has worked as a DevOps Intern at Beenco Lab and has built
              end-to-end DevOps pipelines using Jenkins, DockerHub, SonarQube, Trivy, OWASP Dependency
              Check, ArgoCD, and Kubernetes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
