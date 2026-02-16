import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const vpnFeatures = [
  {
    icon: "FileX",
    title: "Без логов",
    description: "Строгая политика отсутствия логирования. Мы не храним, не продаём и не передаём данные о вашей активности",
  },
  {
    icon: "UserX",
    title: "Полная анонимность",
    description: "Ваш реальный IP-адрес скрыт. Сайты видят только адрес нашего защищённого сервера",
  },
  {
    icon: "ShieldOff",
    title: "Защита от утечек",
    description: "Защита от утечек DNS, WebRTC и IPv6 — ваш настоящий IP никогда не будет раскрыт",
  },
];

const VpnSection = () => {
  return (
    <section id="vpn" className="py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <Icon name="Wifi" size={14} className="text-cyan-400" />
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Встроенный VPN</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              VPN, который{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                просто работает
              </span>
            </h2>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Один клик — и вы защищены. Без регистрации, без подписок, без ограничений. VPN встроен прямо в браузер и готов к работе с первой секунды.
            </p>

            <div className="space-y-6">
              {vpnFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-500/20 flex items-center justify-center">
                    <Icon name={feature.icon} size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 text-base px-8 py-6 rounded-xl"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Попробовать сейчас
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm p-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-muted-foreground">Статус VPN</span>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-400">Подключено</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/40">
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={18} className="text-cyan-400" />
                    <span className="text-sm">Локация</span>
                  </div>
                  <span className="text-sm font-medium">Швейцария 🇨🇭</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/40">
                  <div className="flex items-center gap-3">
                    <Icon name="Gauge" size={18} className="text-cyan-400" />
                    <span className="text-sm">Скорость</span>
                  </div>
                  <span className="text-sm font-medium">142 Мбит/с</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/40">
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={18} className="text-cyan-400" />
                    <span className="text-sm">Пинг</span>
                  </div>
                  <span className="text-sm font-medium">12 мс</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/40">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={18} className="text-emerald-400" />
                    <span className="text-sm">Утечки IP</span>
                  </div>
                  <span className="text-sm font-medium text-emerald-400">Нет утечек</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/40">
                <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground">
                  <Icon name="Lock" size={12} />
                  <span>AES-256 шифрование • WireGuard протокол</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VpnSection;
