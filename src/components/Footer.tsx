import { MapPin, Smartphone, Download } from 'lucide-react';
import { useApp } from '../store';
import { useState } from 'react';
import { AndroidApkModal } from './AndroidApkModal';

export function Footer() {
  const { settings } = useApp();
  const [apkModalOpen, setApkModalOpen] = useState(false);
  
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 mt-auto relative">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-white text-xl mb-2">{settings.name}</h3>
          <p className="text-sm flex items-center justify-center md:justify-start gap-2">
            <MapPin size={14} /> {settings.address}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setApkModalOpen(true)}
            className="px-4 py-2.5 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
          >
            <Smartphone size={16} />
            <span>Baixar App Android (APK)</span>
          </button>

          <div className="text-sm text-center sm:text-right">
            <span>{settings.instagram}</span> • <span>{settings.phone}</span>
          </div>
        </div>
      </div>

      <AndroidApkModal isOpen={apkModalOpen} onClose={() => setApkModalOpen(false)} />
    </footer>
  );
}
