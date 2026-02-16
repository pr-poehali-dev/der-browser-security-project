import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
              <Icon name="Globe" size={14} className="text-white" />
            </div>
            <span className="font-semibold">Der Browser</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2026 Der Browser. Все права защищены.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
