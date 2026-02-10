import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: 'Please enter a valid email', variant: 'destructive' });
      return;
    }
    toast({ title: 'Message sent!', description: 'Thank you for reaching out.' });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll mb-12 text-center">
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Get In Touch</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="animate-on-scroll space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Email</p>
                <a href="mailto:usamaahmed30@yahoo.com" className="text-sm font-medium hover:text-primary transition-colors">
                  usamaahmed30@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">Location</p>
                <p className="text-sm font-medium">Karachi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/usamaahmed30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  linkedin.com/in/usamaahmed30
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono">GitHub</p>
                <a
                  href="https://github.com/UsamaAhmed22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  github.com/UsamaAhmed22
                </a>
              </div>
            </div>
          </div>

          <Card className="animate-on-scroll border-border/50 bg-card/80 backdrop-blur">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                />
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
