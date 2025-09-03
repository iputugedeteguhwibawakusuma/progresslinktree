import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { CountdownTimer } from "@/components/countdown-timer";
import { QuickActionCard } from "@/components/quick-action-card";
import { LinkCard } from "@/components/link-card";
import { SocialMediaCard } from "@/components/social-media-card";
import { ToastNotification } from "@/components/toast-notification";
import logoImage from "@assets/download_1756865095788.jpg";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [toast, setToast] = useState({ message: "", isVisible: false, type: "success" as "success" | "error" });

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, isVisible: true, type });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link berhasil disalin!");
    } catch (error) {
      showToast("Gagal menyalin link", "error");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'UKM Progress STIKOM Bali',
          text: 'Bergabunglah dengan UKM Progress - Wadah Inovasi & Kreativitas Mahasiswa',
          url: window.location.href
        });
        showToast("Link berhasil dibagikan!");
      } catch (error) {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleLinkClick = (linkName: string) => {
    showToast(`Mengarahkan ke ${linkName}...`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Theme Toggle Button */}
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        size="icon"
        variant="outline"
        className="fixed top-4 right-4 z-50 rounded-full shadow-lg floating-btn transition-all duration-300 hover:scale-105"
        data-testid="theme-toggle"
      >
        <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"} text-muted-foreground`}></i>
      </Button>

      {/* Share Button */}
      <Button
        onClick={handleShare}
        size="icon"
        variant="outline"
        className="fixed top-4 left-4 z-50 rounded-full shadow-lg floating-btn transition-all duration-300 hover:scale-105"
        data-testid="share-button"
      >
        <i className="fas fa-share-alt text-muted-foreground"></i>
      </Button>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 max-w-md">
        
        {/* Profile Section */}
        <div className="text-center mb-8">
          {/* Profile Image */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-bg p-1 animate-float" data-testid="profile-image">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src={logoImage} 
                alt="UKM Progress Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
          </div>
          
          {/* Profile Info */}
          <h1 className="text-2xl font-bold mb-2" data-testid="organization-name">UKM Progress</h1>
          <p className="text-lg font-semibold text-primary mb-2" data-testid="organization-location">STIKOM Bali</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid="organization-description">
            Wadah Inovasi & Kreativitas Mahasiswa<br />
            Bergabunglah dengan komunitas teknologi terdepan!
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-6 mb-6">
            <div className="text-center">
              <div className="text-lg font-bold text-primary" data-testid="stat-members">500+</div>
              <div className="text-xs text-muted-foreground">Anggota</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-secondary" data-testid="stat-events">50+</div>
              <div className="text-xs text-muted-foreground">Event</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-accent" data-testid="stat-years">3</div>
              <div className="text-xs text-muted-foreground">Tahun</div>
            </div>
          </div>
        </div>

        {/* Event Countdown */}
        <CountdownTimer 
          eventDate="2024-02-15T00:00:00+08:00"
          eventName="Open Recruitment 2024"
        />

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <QuickActionCard
            href="https://forms.google.com/ukm-progress-registration"
            icon="fas fa-user-plus"
            title="Daftar Sekarang"
            variant="primary"
            onClick={() => handleLinkClick("Form Pendaftaran")}
          />
          
          <QuickActionCard
            href="https://calendar.google.com/ukm-progress"
            icon="fas fa-calendar-alt"
            title="Jadwal Kegiatan"
            variant="secondary"
            onClick={() => handleLinkClick("Jadwal Kegiatan")}
          />
        </div>

        {/* Main Links */}
        <div className="space-y-3 mb-6">
          <LinkCard
            href="https://progress-stikombali.org/"
            icon="fas fa-globe"
            iconBgColor="bg-blue-600"
            title="Website Resmi"
            description="Informasi lengkap UKM Progress"
            onClick={() => handleLinkClick("Website Resmi")}
          />

          <LinkCard
            href="https://forms.google.com/ukm-progress-registration"
            icon="fas fa-clipboard-list"
            iconBgColor="bg-primary"
            title="Form Pendaftaran"
            description="Bergabung dengan UKM Progress"
            onClick={() => handleLinkClick("Form Pendaftaran")}
          />

          <LinkCard
            href="https://wa.me/6281234567890"
            icon="fab fa-whatsapp"
            iconBgColor="bg-green-500"
            title="WhatsApp Group"
            description="Grup diskusi & info terbaru"
            onClick={() => handleLinkClick("WhatsApp Group")}
          />

          <LinkCard
            href="https://ukmprogress.stikom-bali.ac.id/trial-class"
            icon="fas fa-graduation-cap"
            iconBgColor="bg-accent"
            title="Trial Class"
            description="Kelas gratis untuk pemula"
            onClick={() => handleLinkClick("Trial Class")}
          />

          <LinkCard
            href="https://maps.google.com/stikom-bali"
            icon="fas fa-map-marker-alt"
            iconBgColor="bg-red-500"
            title="Lokasi Kampus"
            description="STIKOM Bali, Denpasar"
            onClick={() => handleLinkClick("Lokasi Kampus")}
          />

          <LinkCard
            href="mailto:ukmprogress@stikom-bali.ac.id"
            icon="fas fa-envelope"
            iconBgColor="bg-blue-500"
            title="Email Resmi"
            description="ukmprogress@stikom-bali.ac.id"
            onClick={() => handleLinkClick("Email Resmi")}
          />
        </div>

        {/* Social Media Links */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 text-center">
            Ikuti Media Sosial Kami
          </h3>
          <div className="grid grid-cols-4 gap-3">
            <SocialMediaCard
              href="https://instagram.com/ukmprogress.stikombali"
              icon="fab fa-instagram"
              iconColor="text-pink-500"
              platform="Instagram"
              onClick={() => handleLinkClick("Instagram")}
            />
            
            <SocialMediaCard
              href="https://youtube.com/@ukmprogressstikombali"
              icon="fab fa-youtube"
              iconColor="text-red-500"
              platform="YouTube"
              onClick={() => handleLinkClick("YouTube")}
            />
            
            <SocialMediaCard
              href="https://line.me/R/ti/p/@ukmprogress"
              icon="fab fa-line"
              iconColor="text-green-500"
              platform="LINE"
              onClick={() => handleLinkClick("LINE")}
            />
            
            <SocialMediaCard
              href="https://tiktok.com/@ukmprogress.stikombali"
              icon="fab fa-tiktok"
              iconColor="text-gray-800 dark:text-white"
              platform="TikTok"
              onClick={() => handleLinkClick("TikTok")}
            />
          </div>
        </div>

        {/* Copy Link Button */}
        <Button
          onClick={handleCopyLink}
          variant="secondary"
          className="w-full bg-muted text-muted-foreground rounded-lg p-3 text-center font-semibold mb-6 transition-colors hover:bg-muted/80"
          data-testid="copy-link-button"
        >
          <i className="fas fa-copy mr-2"></i>
          Salin Link Halaman
        </Button>

        {/* Footer */}
        <footer className="text-center text-muted-foreground text-xs space-y-2">
          <div className="border-t border-border pt-4">
            <p className="font-semibold" data-testid="footer-organization">UKM Progress STIKOM Bali</p>
            <p data-testid="footer-description">Unit Kegiatan Mahasiswa Bidang Teknologi & Inovasi</p>
            <p className="mt-2" data-testid="footer-email">📧 ukmprogress@stikom-bali.ac.id</p>
            <p data-testid="footer-phone">📱 +62 812-3456-7890</p>
            <p className="mt-2" data-testid="footer-copyright">© 2024 UKM Progress. Semua hak dilindungi.</p>
          </div>
          
          {/* Management Info */}
          <div className="mt-4 pt-3 border-t border-border">
            <p className="font-semibold text-xs mb-1" data-testid="management-title">Pengurus 2024</p>
            <p data-testid="management-president">Ketua: <span>I Made Arya Putra</span></p>
            <p data-testid="management-secretary">Sekretaris: <span>Ni Putu Sari Dewi</span></p>
            <p data-testid="management-treasurer">Bendahara: <span>I Gede Bagus Wijaya</span></p>
          </div>
        </footer>
      </div>

      {/* Toast Notification */}
      <ToastNotification
        message={toast.message}
        isVisible={toast.isVisible}
        type={toast.type}
        onHide={hideToast}
      />
    </div>
  );
}
