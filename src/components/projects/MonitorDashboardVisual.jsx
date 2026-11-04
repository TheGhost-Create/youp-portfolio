import {
  Activity,
  AlertTriangle,
  Cpu,
  HardDrive,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const mockProcesses = [
  { pid: 1, name: 'systemd', user: 'root', cpu: 0.1, mem: 14.2, port: '-' },
  { pid: 842, name: 'sshd', user: 'root', cpu: 0.2, mem: 22.8, port: ':22 [TCP]' },
  { pid: 1204, name: 'monitor_server.py', user: 'youp-youp', cpu: 2.1, mem: 46.5, port: ':8443 [TCP]' },
  { pid: 1540, name: 'psutil_daemon', user: 'youp-youp', cpu: 1.4, mem: 31.0, port: '-' },
  { pid: 2180, name: 'connection_monitor', user: 'youp-youp', cpu: 0.8, mem: 19.4, port: ':8080 [TCP]' },
  { pid: 3102, name: 'alert_engine', user: 'youp-youp', cpu: 0.5, mem: 16.7, port: '-' }
];

export default function MonitorDashboardVisual() {
  const [activeTab, setActiveTab] = useState('metrics'); // 'metrics' | 'processes' | 'alerts'
  const [cpuVal, setCpuVal] = useState(34);
  const [ramVal, setRamVal] = useState(41);
  const [netSpeed, setNetSpeed] = useState(1.4);

  // Simulation légère de pulsation télémétrique
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuVal(prev => Math.min(85, Math.max(22, prev + (Math.random() * 8 - 4))));
      setRamVal(prev => Math.min(70, Math.max(38, prev + (Math.random() * 2 - 1))));
      setNetSpeed(prev => +(Math.max(0.6, prev + (Math.random() * 0.4 - 0.2))).toFixed(2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl glass-panel border border-[#FF7138]/20 bg-[#0C1017] p-4 sm:p-6 shadow-2xl relative overflow-hidden font-mono text-xs">
      {/* Background Matrix Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF7138]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#FF7138] animate-ping" />
          <span className="font-heading font-bold text-sm text-[#F2F1ED] tracking-wider">
            MONITOR_PRO :: TELEMETRY DAEMON
          </span>
          <span className="hidden sm:inline px-2 py-0.5 rounded bg-[#16202C] text-[10px] text-[#969DA8] border border-white/5">
            HOST: kali-audit-01
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-[#151C26] p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3 py-1 rounded text-[11px] transition-all flex items-center gap-1.5 ${
              activeTab === 'metrics'
                ? 'bg-[#FF7138] text-[#080A0E] font-bold'
                : 'text-[#969DA8] hover:text-[#F2F1ED]'
            }`}
          >
            <Activity className="w-3 h-3" /> Métriques
          </button>
          <button
            onClick={() => setActiveTab('processes')}
            className={`px-3 py-1 rounded text-[11px] transition-all flex items-center gap-1.5 ${
              activeTab === 'processes'
                ? 'bg-[#FF7138] text-[#080A0E] font-bold'
                : 'text-[#969DA8] hover:text-[#F2F1ED]'
            }`}
          >
            <Server className="w-3 h-3" /> Processus
          </button>
          <button
            onClick={() => setActiveTab('alerts')}
            className={`px-3 py-1 rounded text-[11px] transition-all flex items-center gap-1.5 ${
              activeTab === 'alerts'
                ? 'bg-[#FF7138] text-[#080A0E] font-bold'
                : 'text-[#969DA8] hover:text-[#F2F1ED]'
            }`}
          >
            <ShieldCheck className="w-3 h-3" /> Alertes (0)
          </button>
        </div>
      </div>

      {/* Tab 1: Live Metrics */}
      {activeTab === 'metrics' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* CPU Metric Card */}
            <div className="p-3.5 rounded-xl bg-[#131922] border border-white/5">
              <div className="flex items-center justify-between text-[#969DA8] mb-2">
                <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-[#FF7138]" /> CPU Multi-Cœurs</span>
                <span className="text-[#FF7138] font-bold">{cpuVal.toFixed(1)}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#1E2633] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF7138] to-[#FFA070] transition-all duration-500"
                  style={{ width: `${cpuVal}%` }}
                />
              </div>
              <div className="mt-2 text-[10px] text-[#969DA8] flex justify-between">
                <span>8 cœurs actifs</span>
                <span>Linux 6.6</span>
              </div>
            </div>

            {/* RAM Metric Card */}
            <div className="p-3.5 rounded-xl bg-[#131922] border border-white/5">
              <div className="flex items-center justify-between text-[#969DA8] mb-2">
                <span className="flex items-center gap-1.5"><HardDrive className="w-3.5 h-3.5 text-[#C5A16A]" /> RAM Système</span>
                <span className="text-[#C5A16A] font-bold">{(16 * (ramVal / 100)).toFixed(1)} GB / 16 GB</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#1E2633] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#C5A16A] to-[#E5C795] transition-all duration-500"
                  style={{ width: `${ramVal}%` }}
                />
              </div>
              <div className="mt-2 text-[10px] text-[#969DA8] flex justify-between">
                <span>Swap: 1.2%</span>
                <span>Cache: 3.1 GB</span>
              </div>
            </div>

            {/* Network Metric Card */}
            <div className="p-3.5 rounded-xl bg-[#131922] border border-white/5">
              <div className="flex items-center justify-between text-[#969DA8] mb-2">
                <span className="flex items-center gap-1.5"><Network className="w-3.5 h-3.5 text-emerald-400" /> Flux Réseau [eth0]</span>
                <span className="text-emerald-400 font-bold">{netSpeed} MB/s</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#1E2633] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 transition-all duration-500"
                  style={{ width: `${Math.min(100, netSpeed * 30)}%` }}
                />
              </div>
              <div className="mt-2 text-[10px] text-[#969DA8] flex justify-between">
                <span>TX: {(netSpeed * 0.65).toFixed(2)} MB/s</span>
                <span>RX: {(netSpeed * 0.35).toFixed(2)} MB/s</span>
              </div>
            </div>
          </div>

          {/* Sockets in real time */}
          <div className="p-3 rounded-xl bg-[#0F141C] border border-white/5 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[#969DA8]">Sockets en écoute :</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-0.5 rounded bg-[#1A2433] text-[#F2F1ED] border border-[#C5A16A]/30">TCP 22 (SSH)</span>
              <span className="px-2 py-0.5 rounded bg-[#1A2433] text-[#F2F1ED] border border-[#FF7138]/30">TCP 8443 (API Daemon)</span>
              <span className="px-2 py-0.5 rounded bg-[#1A2433] text-[#F2F1ED] border border-emerald-500/30">TCP 443 (HTTPS)</span>
            </div>
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Ports filtrés
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: Process correlation table */}
      {activeTab === 'processes' && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[#969DA8] text-[10px] uppercase">
                <th className="py-2 px-3">PID</th>
                <th className="py-2 px-3">Processus</th>
                <th className="py-2 px-3">Utilisateur</th>
                <th className="py-2 px-3">CPU</th>
                <th className="py-2 px-3">Mémoire</th>
                <th className="py-2 px-3">Socket Associé</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[#F2F1ED]">
              {mockProcesses.map((proc) => (
                <tr key={proc.pid} className="hover:bg-white/[0.02]">
                  <td className="py-2 px-3 text-[#FF7138]">{proc.pid}</td>
                  <td className="py-2 px-3 font-semibold">{proc.name}</td>
                  <td className="py-2 px-3 text-[#969DA8]">{proc.user}</td>
                  <td className="py-2 px-3 text-[#C5A16A]">{proc.cpu}%</td>
                  <td className="py-2 px-3 text-[#969DA8]">{proc.mem} MB</td>
                  <td className="py-2 px-3 text-emerald-400">{proc.port}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Security & Alerts */}
      {activeTab === 'alerts' && (
        <div className="p-4 rounded-xl bg-[#0F151E] border border-emerald-500/20 text-center space-y-2">
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <p className="font-heading font-bold text-sm text-[#F2F1ED]">
            Aucune intrusion ni dérive de seuil détectée
          </p>
          <p className="text-[#969DA8] text-xs max-w-md mx-auto">
            Le module <code className="text-[#FF7138]">alert_manager.py</code> scrute en continu les sockets, les connexions non autorisées et les saturations de processus.
          </p>
        </div>
      )}

      {/* Bottom Terminal Footnote */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-[#969DA8]">
        <span className="flex items-center gap-1.5">
          <Terminal className="w-3 h-3 text-[#C5A16A]" /> Python 3.11 + psutil 5.9 + Rich Terminal Output
        </span>
        <span className="flex items-center gap-1 text-[#38A169]">
          <RefreshCw className="w-2.5 h-2.5 animate-spin" /> Stream actif
        </span>
      </div>
    </div>
  );
}
