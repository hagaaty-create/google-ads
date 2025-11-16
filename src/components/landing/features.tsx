import { Target, BarChart3, Wallet, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'الوصول لجمهور أوسع',
    description:
      'تصل إعلانات جوجل إلى ملايين المستخدمين يومياً. تساعدك Hagaaty على استهداف الجمهور المناسب لعملك بدقة.',
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: 'نتائج قابلة للقياس',
    description:
      'تتبع أداء حملاتك لحظة بلحظة. تقدم لك منصتنا تحليلات مفصلة لفهم عائد استثمارك واتخاذ قرارات أفضل.',
  },
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: 'تحكم كامل في الميزانية',
    description:
      'أنت من يحدد ميزانية الإعلانات. لا توجد مفاجآت، ويمكنك تعديل إنفاقك في أي وقت حسب الحاجة.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: 'مساعدة الذكاء الاصطناعي',
    description:
      'يقدم مساعدنا الافتراضي إجابات فورية ونصائح مخصصة لتحسين حملاتك الإعلانية على مدار الساعة.',
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-accent/20"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
            المميزات
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
            لماذا تختار إعلانات جوجل مع Hagaaty؟
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            نجمع بين قوة إعلانات جوجل والذكاء الاصطناعي لنقدم لك تجربة إعلانية
            فريدة تحقق لك النمو والنجاح.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
