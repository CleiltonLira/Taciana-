import React, { useState } from 'react';
import { useApp } from '../store';
import { motion, AnimatePresence } from 'motion/react';
import { Smartphone, Download, X, CheckCircle2, ShieldCheck, Zap, Heart } from 'lucide-react';

export function AndroidApkModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { settings, showToast } = useApp();
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      showToast('Baixando assistente APK para Android...', 'success');
      // Simula o download do arquivo de instalação do PWA / WebAPK
      const blob = new Blob([`# ${settings?.name || 'Studio Bella Beauty'} - Android App Wrapper\n\nInstale nosso app oficial no seu celular Android para acesso rápido, notificações em tempo real e experiência fluida.\n\nAcesse pelo Chrome no Android e selecione "Adicionar à Tela Inicial" ou "Instalar Aplicativo".`], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${(settings?.name || 'studio_bella').toLowerCase().replace(/\s+/g, '_')}_app_android.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          className="bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-rose-200 dark:border-stone-800 p-6 sm:p-8 w-full max-w-md text-stone-900 dark:text-stone-100 relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-1 rounded-full cursor-pointer"
          >
            <X size={20} />
          </button>

          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-100 dark:bg-emerald-950/40 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center space-y-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <Smartphone size={32} />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <Heart size={12} className="fill-emerald-500 text-emerald-500" />
              <span>{settings?.name || 'Studio Bella Beauty'} • App Android</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
              Baixe o Aplicativo para Android
            </h3>

            <p className="text-xs text-stone-600 dark:text-stone-400 max-w-sm mx-auto leading-relaxed">
              Tenha acesso rápido e fluido direto na tela inicial do seu celular Android, com notificações instantâneas de agendamentos e chat em tempo real.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 space-y-2 text-xs text-stone-600 dark:text-stone-300">
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-emerald-500 shrink-0" />
                <span>Desempenho otimizado e fluido</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                <span>100% Seguro e sem anúncios</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                <span>Instalação instantânea em segundos</span>
              </div>
            </div>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-95"
            >
              {downloading ? (
                <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : downloaded ? (
                <>
                  <CheckCircle2 size={18} />
                  <span>Download Concluído!</span>
                </>
              ) : (
                <>
                  <Download size={18} />
                  <span>Baixar APK / Instalar App Android</span>
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-stone-400">
              Disponível para todos os smartphones e tablets Android.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
