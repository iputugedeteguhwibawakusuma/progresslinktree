import { Button } from "@/components/ui/button";

interface SocialMediaCardProps {
  href: string;
  icon: string;
  iconColor: string;
  platform: string;
  onClick?: () => void;
}

export function SocialMediaCard({ 
  href, 
  icon, 
  iconColor, 
  platform, 
  onClick 
}: SocialMediaCardProps) {
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
      className="link-card h-auto bg-card border border-border rounded-lg p-4 text-center shadow-sm transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:bg-card/80"
      data-testid={`social-${platform.toLowerCase()}`}
    >
      <div className="flex flex-col items-center">
        <i className={`${icon} text-2xl ${iconColor} mb-2`}></i>
        <div className="text-xs font-semibold text-foreground">{platform}</div>
      </div>
    </Button>
  );
}
