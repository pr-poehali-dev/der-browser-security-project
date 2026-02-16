import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Shield",
    title: "Защита от трекеров",
    description: "Автоматическая блокировка рекламных трекеров, сторонних cookies и скрытых скриптов слежения",
  },
  {
    icon: "Lock",
    title: "Шифрование данных",
    description: "Все ваши данные защищены сквозным шифрованием — даже мы не имеем к ним доступа",
  },
  {
    icon: "Fingerprint",
    title: "Антифингерпринт",
    description: "Продвинутая защита от цифровых отпечатков браузера, чтобы сайты не могли вас идентифицировать",
  },
  {
    icon: "ShieldCheck",
    title: "Безопасный DNS",
    description: "Встроенный DNS-over-HTTPS предотвращает перехват и подмену DNS-запросов",
  },
  {
    icon: "KeyRound",
    title: "Менеджер паролей",
    description: "Надёжное хранилище паролей с генератором сложных комбинаций и автозаполнением",
  },
  {
    icon: "Eye",
    title: "Приватный режим",
    description: "Режим инкогнито с усиленной защитой — никаких следов даже на вашем устройстве",
  },
];

const SecuritySection = () => {
  return (
    <section id="security" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
            <Icon name="Shield" size={14} className="text-purple-400" />
            <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">Безопасность</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Ваша защита —{" "}
            <span className="gradient-text">наш приоритет</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Многоуровневая система безопасности, которая работает незаметно
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-purple-500/30 hover:bg-card/80 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-purple-600/30 group-hover:to-cyan-500/30 transition-all duration-300">
                <Icon name={feature.icon} size={22} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
