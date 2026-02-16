import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-secondary/40 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-muted-foreground">Встроенный VPN • Без логов • Без рекламы</span>
            </div>
          </div>

          <h1 className="opacity-0 animate-fade-in-delay-1 text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Интернет без
            <br />
            <span className="gradient-text">компромиссов</span>
          </h1>

          <p className="opacity-0 animate-fade-in-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Der Browser — современный браузер с полным функционалом, высокой безопасностью и встроенным VPN, который защищает вашу конфиденциальность
          </p>

          <div className="opacity-0 animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white border-0 text-base px-8 py-6 rounded-xl"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать бесплатно
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border/60 text-foreground hover:bg-secondary/60 text-base px-8 py-6 rounded-xl"
            >
              Узнать больше
              <Icon name="ArrowDown" size={18} className="ml-2" />
            </Button>
          </div>

          <div className="mt-16 opacity-0 animate-fade-in-delay-3">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-2xl blur-2xl" />
              <img
                src="https://cdn.poehali.dev/projects/0fa9a96c-534c-43ce-afad-2cd3f221caa2/files/68201c76-c4b4-45b7-910a-d875ca755003.jpg"
                alt="Der Browser Interface"
                className="relative rounded-2xl border border-border/40 shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
