import { Briefcase } from 'lucide-react';

const responsibilities = [
  'Assisted in building and maintaining CI/CD pipelines using Jenkins',
  'Containerized applications using Docker for consistent environments',
  'Supported Kubernetes deployments by updating manifests and monitoring pods',
  'Worked in Linux-based environments with cloud-native DevOps practices',
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll mb-12 text-center">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">Experience</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Work History</h2>
        </div>

        <div className="animate-on-scroll relative border-l-2 border-primary/30 pl-8">
          <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Briefcase className="h-3 w-3" />
          </div>

          <div>
            <h3 className="text-xl font-semibold">DevOps Intern</h3>
            <p className="mb-1 font-mono text-sm text-primary">Beenco Lab — Karachi</p>
            <p className="mb-4 text-sm text-muted-foreground">Dec 2025 – Present</p>

            <ul className="space-y-2">
              {responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
