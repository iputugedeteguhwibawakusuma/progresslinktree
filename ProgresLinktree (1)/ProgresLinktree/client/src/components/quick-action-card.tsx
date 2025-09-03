import { Button } from "@/components/ui/button";

interface QuickActionCardProps {
  href: string;
  icon: string;
  title: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function QuickActionCard({ 
  href, 
  icon, 
  title, 
  variant = "primary",
  onClick 
}: QuickActionCardProps) {
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
      className={`
        link-card h-auto p-4 text-center shadow-sm transition-all duration-300 hover:transform hover:-translate-y-0.5
        ${variant === "primary" 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
        }
      `}
      data-testid={`quick-action-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-col items-center">
        <i className={`${icon} text-xl mb-2`}></i>
        <div className="text-sm font-semibold">{title}</div>
      </div>
    </Button>
  );
}
