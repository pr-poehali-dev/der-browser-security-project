import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
            <Icon name="Globe" size={18} className="text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Der Browser</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Безопасность
          </a>
          <a href="#vpn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            VPN
          </a>
        </nav>

        <Button className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white border-0 text-sm px-6">
          Скачать
        </Button>
      </div>
    </header>
  );
};

export default Header;
