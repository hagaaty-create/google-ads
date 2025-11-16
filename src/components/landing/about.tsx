import { Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            عن خدماتنا
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline mt-2">
            ما هي خدمة Hagaaty؟
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hagaaty هي منصة مبتكرة تساعدك على إدارة حملاتك الإعلانية على جوجل بكل
            سهولة وفعالية. نوفر لك الأدوات الذكية والتحليلات اللازمة لتحقيق أفضل
            النتائج والوصول إلى جمهورك المستهدف بدقة، كل ذلك بمساعدة الذكاء
            الاصطناعي.
          </p>
        </div>
      </div>
    </section>
  );
}
