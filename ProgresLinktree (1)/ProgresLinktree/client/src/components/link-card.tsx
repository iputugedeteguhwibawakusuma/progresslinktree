import { Button } from "@/components/ui/button";

interface LinkCardProps {
  href: string;
  icon: string;
  iconBgColor: string;
  title: string;
  description: string;
  onClick?: () => void;
}

export function LinkCard({ 
  href, 
  icon, 
  iconBgColor, 
  title, 
  description, 
  onClick 
}: LinkCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      className="link-card w-full h-auto bg-card border border-border rounded-lg p-4 shadow-sm transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:bg-card/80"
      data-testid={`link-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center space-x-3 w-full">
        <div className={`w-10 h-10 ${iconBgColor} rounded-lg flex items-center justify-center`}>
          <i className={`${icon} text-white`}></i>
        </div>
        <div className="flex-1 text-left">
          <div className="font-semibold text-foreground">{title}</div>
          <div className="text-sm text-muted-foreground">{description}</div>
        </div>
        <i className="fas fa-chevron-right text-muted-foreground"></i>
      </div>
    </Button>
  );
}
