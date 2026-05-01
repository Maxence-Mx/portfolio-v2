// src/sections/security/SecuritySection.jsx

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { securitySkills } from '../../data/securityData'

// Icône Sécurité (navbar)
const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
)

// Couleurs des outils
const toolColors = {
  'Burp Suite': { bg: 'rgba(255,102,0,0.15)', color: '#FF6600', border: 'rgba(255,102,0,0.4)' },
  'Nmap': { bg: 'rgba(0,255,136,0.12)', color: '#00FF88', border: 'rgba(0,255,136,0.3)' },
  'OWASP': { bg: 'rgba(0,114,206,0.15)', color: '#0072CE', border: 'rgba(0,114,206,0.4)' },
  'Wireshark': { bg: 'rgba(26,163,220,0.15)', color: '#1AA3DC', border: 'rgba(26,163,220,0.4)' },
  'Metasploit': { bg: 'rgba(30,144,255,0.15)', color: '#1E90FF', border: 'rgba(30,144,255,0.4)' },
  'Kali Linux': { bg: 'rgba(89,0,255,0.15)', color: '#5900FF', border: 'rgba(89,0,255,0.4)' },
  'SQLMap': { bg: 'rgba(255,50,50,0.15)', color: '#FF3232', border: 'rgba(255,50,50,0.4)' },
  'Maltego': { bg: 'rgba(255,165,0,0.15)', color: '#FFA500', border: 'rgba(255,165,0,0.4)' },
  'Shodan': { bg: 'rgba(255,0,0,0.12)', color: '#FF4444', border: 'rgba(255,0,0,0.3)' },
  'TheHarvester': { bg: 'rgba(0,255,136,0.12)', color: '#00FF88', border: 'rgba(0,255,136,0.3)' },
  'tcpdump': { bg: 'rgba(100,100,100,0.15)', color: '#aaaaaa', border: 'rgba(100,100,100,0.4)' },
  'Debian': { bg: 'rgba(215,10,83,0.15)', color: '#D70A53', border: 'rgba(215,10,83,0.4)' },
  'iptables': { bg: 'rgba(255,136,0,0.15)', color: '#FF8800', border: 'rgba(255,136,0,0.4)' },
  'fail2ban': { bg: 'rgba(255,50,50,0.15)', color: '#FF3232', border: 'rgba(255,50,50,0.4)' },
  'SSH': { bg: 'rgba(0,200,100,0.12)', color: '#00C864', border: 'rgba(0,200,100,0.3)' },
  'GDB': { bg: 'rgba(150,100,50,0.15)', color: '#c8a060', border: 'rgba(150,100,50,0.4)' },
  'Python': { bg: 'rgba(55,118,171,0.15)', color: '#3776ab', border: 'rgba(55,118,171,0.4)' },
  'Zabbix': { bg: 'rgba(220,0,0,0.15)', color: '#DC0000', border: 'rgba(220,0,0,0.4)' },
  'Grafana': { bg: 'rgba(242,143,54,0.15)', color: '#F28F36', border: 'rgba(242,143,54,0.4)' },
  'XSStrike': { bg: 'rgba(200,0,200,0.15)', color: '#CC00CC', border: 'rgba(200,0,200,0.4)' },
  'OWASP ZAP': { bg: 'rgba(0,114,206,0.15)', color: '#0072CE', border: 'rgba(0,114,206,0.4)' },
}

const severityColors = {
  'Critique': { bg: 'rgba(255,30,30,0.15)', color: '#FF1E1E', border: 'rgba(255,30,30,0.4)' },
  'Élevée': { bg: 'rgba(255,100,0,0.15)', color: '#FF6400', border: 'rgba(255,100,0,0.4)' },
  'Moyenne': { bg: 'rgba(255,180,0,0.15)', color: '#FFB400', border: 'rgba(255,180,0,0.4)' },
  'Faible': { bg: 'rgba(0,255,136,0.12)', color: '#00FF88', border: 'rgba(0,255,136,0.3)' },
}

// Composant carte mission sécurité
const SecurityMissionCard = ({ mission, index }) => {
  const [expanded, setExpanded] = useState(false)

  const accentColor = mission.color || '#00FF88'
  const accentBg = `${accentColor}12`
  const accentBorder = `${accentColor}30`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-project-id={mission.id}
      className="relative rounded-sm overflow-hidden"
      style={{
        background: 'rgba(5,10,30,0.95)',
        border: `1px solid ${accentBorder}`,
        boxShadow: `0 0 30px ${accentBg}, 0 0 60px rgba(0,0,0,0.5)`,
      }}
    >
      {/* Glow top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`, boxShadow: `0 0 10px ${accentColor}` }}
      />

      {/* === HEADER — Contexte mission === */}
      <div
        className="relative px-5 pt-5 pb-4"
        style={{ borderBottom: `3px solid ${accentBorder}` }}
      >
        {/* Scan line animée */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 5 }}
          className="absolute top-0 bottom-0 w-16 pointer-events-none opacity-5"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
        />

        {/* Type + statut */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <div
              className="p-1.5 rounded-sm"
              style={{ background: accentBg, border: `0.5px solid ${accentBorder}` }}
            >
              {mission.typeIcon}
            </div>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: accentColor }}>
               {mission.type}
            </span>
          </div>
          <span
            className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1.5"
            style={{
              background: mission.status === 'Terminé' ? 'rgba(0,255,136,0.1)' : 'rgba(255,180,0,0.1)',
              border: `1px solid ${mission.status === 'Terminé' ? 'rgba(0,255,136,0.3)' : 'rgba(255,180,0,0.3)'}`,
              color: mission.status === 'Terminé' ? '#00FF88' : '#FFB400',
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: mission.status === 'Terminé' ? '#00FF88' : '#FFB400' }}
            />
            {mission.status}
          </span>
        </div>

        {/* Titre */}
        <h3
          className="font-black text-lg mb-2"
          style={{ fontFamily: 'Orbitron, monospace', color: '#e2e8ff' }}
        >
          {mission.title}
        </h3>

        {/* Description */}
        <p className="font-mono text-xs text-gray-500 leading-relaxed mb-4">{mission.description}</p>

        {/* Image réelle */}
<div
  className="relative rounded-sm overflow-hidden mb-4"
  style={{ height: '180px', border: `0.1px solid ${accentBorder}` }}
>
  <img
    src={mission.image}
    alt={mission.title}
    className="w-full h-full object-cover"
  />
  <div
    className="absolute inset-0 pointer-events-none"
    style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(5,10,30,0.8) 100%)' }}
  />
  <motion.div
    animate={{ x: ['-100%', '200%'] }}
    transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 5 }}
    className="absolute top-0 bottom-0 w-16 pointer-events-none opacity-10"
    style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
  />
</div>

        {/* Meta infos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {mission.meta.map((m, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 px-3 py-2 rounded-sm"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            >
              <span className="font-mono text-xs text-gray-700">{m.label}</span>
              <span className="font-mono text-xs font-semibold" style={{ color: accentColor }}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* === CORPS — Méthodologie + Objectif + Outils === */}
      <div className="px-5 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Méthodologie */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: accentColor }}>Méthodologie</span>
          </div>
          <div className="space-y-2">
            {mission.methodology.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 rounded-sm px-3 py-2.5"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
              >
                <div
                  className="w-5 h-5 rounded-sm flex items-center justify-center font-mono text-xs font-black flex-shrink-0 mt-0.5"
                  style={{ background: accentBg, color: accentColor, border: `1px solid ${accentBorder}`, fontFamily: 'Orbitron, monospace' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p className="font-mono text-xs font-bold text-white mb-0.5">{step.title}</p>
                  <p className="font-mono text-xs text-gray-600 leading-tight">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Objectif + Impact */}
        <div className="flex flex-col gap-4">
          {/* Objectif */}
          <div
            className="rounded-sm p-4"
            style={{ background: `${accentColor}06`, border: `1px solid ${accentBorder}` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: accentColor }}>Objectif</span>
            </div>
            <p className="font-mono text-xs text-gray-400 leading-relaxed">{mission.objective}</p>
          </div>

          {/* Résultats / Vulnérabilités */}
          {mission.findings && (
            <div
              className="rounded-sm p-4"
              style={{ background: 'rgba(5,10,30,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF6400" strokeWidth="1.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-widest text-orange-400">Findings</span>
              </div>
              <div className="space-y-1.5">
                {mission.findings.map((f, i) => (
                  <div key={i} className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-gray-500 flex-1">{f.name}</span>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-sm flex-shrink-0"
                      style={{
                        background: severityColors[f.severity]?.bg || 'rgba(255,255,255,0.05)',
                        color: severityColors[f.severity]?.color || '#888',
                        border: `1px solid ${severityColors[f.severity]?.border || 'rgba(255,255,255,0.1)'}`,
                      }}
                    >
                      {f.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact business */}
          <div
            className="rounded-sm p-4"
            style={{ background: 'rgba(5,10,30,0.8)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
              </svg>
              <span className="font-mono text-xs uppercase tracking-widest text-violet-400">Impact</span>
            </div>
            <ul className="space-y-1">
              {mission.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#a78bfa' }} />
                  <span className="font-mono text-xs text-gray-600 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* === FOOTER — Outils === */}
      <div
        className="px-5 py-4"
        style={{ borderTop: `1px solid ${accentBorder}` }}
      >
        <div className="flex items-center gap-2 mb-3">
          <svg viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="1.5" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: accentColor }}>Outils utilisés</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {mission.tools.map((tool, i) => {
            const tc = toolColors[tool] || { bg: 'rgba(255,255,255,0.05)', color: '#888', border: 'rgba(255,255,255,0.1)' }
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -1 }}
                className="font-mono text-xs px-3 py-1.5 rounded-sm font-semibold cursor-default"
                style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}`, boxShadow: `0 0 8px ${tc.bg}` }}
              >
                {tool}
              </motion.span>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

// Données des missions
const missions = [
  {
    id: 'sec-1',
    type: 'Pentest Web',
    title: 'Audit de vulnérabilités Web',
    description: 'Réalisation d\'un audit complet de sécurité sur une application web. Détection et exploitation de vulnérabilités, analyse des risques et recommandations de remédiation.',
    color: '#FF6600',
    status: 'Terminé',
    image: '/images/pemtest.png',
    typeIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" />
      </svg>
    ),
    meta: [
      { label: 'Période', value: 'Novembre. 2025' },
      { label: 'Durée', value: '5 jours' },
      { label: 'Type', value: 'Audit de sécurité' },
      { label: 'Cible', value: 'Web App' },
    ],
    imagePlaceholder: 'Capture Burp Suite — Requêtes interceptées & vulnérabilités détectées',
    imagePlaceholderIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    methodology: [
      { title: 'Reconnaissance', desc: 'Collecte d\'informations et cartographie du périmètre cible.' },
      { title: 'Scan & Énumération', desc: 'Scan des ports, services et technologies avec Nmap et Burp.' },
      { title: 'Analyse des vulnérabilités', desc: 'Détection des failles OWASP Top 10, tests manuels et automatisés.' },
      { title: 'Exploitation contrôlée', desc: 'Validation des failles critiques identifiées en environnement de test.' },
      { title: 'Reporting', desc: 'Rédaction du rapport d\'audit avec recommandations priorisées.' },
    ],
    objective: 'Identifier les failles de sécurité critiques sur une application web et proposer des correctifs adaptés pour renforcer la posture de sécurité.',
    findings: [
      { name: 'Injection SQL', severity: 'Critique' },
      { name: 'Cross-Site Scripting (XSS)', severity: 'Élevée' },
      { name: 'Cross-Site Request Forgery', severity: 'Élevée' },
      { name: 'Mauvaise configuration serveur', severity: 'Moyenne' },
      { name: 'Absence d\'en-têtes de sécurité', severity: 'Faible' },
    ],
    impact: [
      'Risque de compromission des données utilisateurs',
      'Usurpation de session possible',
      'Atteinte à la réputation de l\'application',
      'Non-conformité OWASP Top 10',
    ],
    tools: ['Burp Suite', 'Nmap', 'OWASP', 'SQLMap', 'XSStrike'],
  },
  {
    id: 'sec-2',
    type: 'Analyse Réseau',
    title: 'Analyse de trafic réseau',
    description: 'Capture et analyse de paquets réseau pour détecter des anomalies, intrusions et comportements suspects sur un réseau local.',
    color: '#1AA3DC',
    status: 'Terminé',
    image: '/images/analysereseau.png',
    typeIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1AA3DC" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    meta: [
      { label: 'Période', value: 'Janvier 2026' },
      { label: 'Durée', value: '2 jours' },
      { label: 'Type', value: 'Analyse réseau' },
      { label: 'Protocoles', value: 'TCP/IP, HTTP' },
    ],
    imagePlaceholder: 'Capture Wireshark — Analyse de paquets, trafic suspect mis en évidence',
    imagePlaceholderIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1AA3DC" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    methodology: [
      { title: 'Configuration', desc: 'Mise en place de la capture réseau sur l\'interface cible.' },
      { title: 'Capture de trafic', desc: 'Enregistrement du trafic réseau avec Wireshark et tcpdump.' },
      { title: 'Filtrage & Analyse', desc: 'Application de filtres BPF pour isoler le trafic suspect.' },
      { title: 'Détection d\'anomalies', desc: 'Identification des patterns inhabituels et comportements malveillants.' },
      { title: 'Rapport d\'analyse', desc: 'Documentation des anomalies et recommandations de sécurisation.' },
    ],
    objective: 'Détecter des anomalies, intrusions ou comportements malveillants dans le trafic réseau en analysant les paquets capturés.',
    findings: [
      { name: 'Trafic non chiffré détecté', severity: 'Élevée' },
      { name: 'Scan de ports suspect', severity: 'Élevée' },
      { name: 'Fuites d\'informations HTTP', severity: 'Moyenne' },
      { name: 'ARP Spoofing potentiel', severity: 'Critique' },
    ],
    impact: [
      'Interception possible des communications',
      'Compromission du réseau local',
      'Exfiltration de données sensibles',
      'Attaque Man-in-the-Middle facilitée',
    ],
    tools: ['Wireshark', 'Nmap', 'tcpdump'],
  },
  {
    id: 'sec-3',
    type: 'OSINT',
    title: 'Investigation OSINT',
    description: 'Investigation en sources ouvertes pour reconstituer le profil numérique d\'une cible et évaluer son exposition dans un cadre éthique et légal.',
    color: '#00FF88',
    status: 'Terminé',
    image: '/images/osint.png',
    typeIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    meta: [
      { label: 'Période', value: 'Decembre 2025' },
      { label: 'Durée', value: '8 jours' },
      { label: 'Type', value: 'OSINT éthique' },
      { label: 'Sources', value: 'Web, Réseaux' },
    ],
    imagePlaceholder: 'Capture Maltego — Graphe de relations et empreinte numérique de la cible',
    imagePlaceholderIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    methodology: [
      { title: 'Définition du périmètre', desc: 'Identification de la cible et des sources à investiguer.' },
      { title: 'Collecte passive', desc: 'Recherche sur moteurs, réseaux sociaux, WHOIS, Shodan.' },
      { title: 'Cartographie', desc: 'Visualisation des relations avec Maltego.' },
      { title: 'Analyse de l\'exposition', desc: 'Évaluation des données sensibles publiquement accessibles.' },
      { title: 'Rapport OSINT', desc: 'Synthèse des découvertes et recommandations de réduction d\'exposition.' },
    ],
    objective: 'Évaluer l\'exposition numérique d\'une cible via des sources ouvertes et identifier les informations sensibles accessibles publiquement.',
    findings: [
      { name: 'Données personnelles exposées', severity: 'Élevée' },
      { name: 'Infrastructure technique visible', severity: 'Moyenne' },
      { name: 'Métadonnées de documents', severity: 'Moyenne' },
      { name: 'Emails professionnels indexés', severity: 'Faible' },
    ],
    impact: [
      'Facilitation d\'attaques de phishing ciblées',
      'Reconnaissance préalable à un pentest',
      'Atteinte potentielle à la vie privée',
      'Cartographie de l\'infrastructure exposée',
    ],
    tools: ['Maltego', 'Shodan', 'TheHarvester'],
  },
  {
    id: 'sec-4',
    type: 'CTF Challenge',
    title: 'CTF Challenges — Hack The Box',
    description: 'Participation à des challenges Capture The Flag pour développer les compétences en exploitation, reverse engineering et cryptographie.',
    color: '#9FEF00',
    status: 'En cours',
    image: '/images/ctf.jpeg',
    typeIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#9FEF00" strokeWidth="1.5" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l8.735 8.735m0 0a.374.374 0 11.53.53m-.53-.53l.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 010 5.304m2.121-7.425a6.75 6.75 0 010 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 01-1.06-2.122m-1.061 4.243a6.75 6.75 0 01-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12z" />
      </svg>
    ),
    meta: [
      { label: 'Plateforme', value: 'Hack The Box' },
      { label: 'Niveau', value: 'Easy → Medium' },
      { label: 'Type', value: 'CTF / Labs' },
      { label: 'Statut', value: 'En cours' },
    ],
    imagePlaceholder: 'Capture HTB Dashboard — Machines complétées et progression de rang',
    imagePlaceholderIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#9FEF00" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    methodology: [
      { title: 'Reconnaissance', desc: 'Enumération des services, ports et technologies de la machine cible.' },
      { title: 'Exploitation', desc: 'Exploitation des vulnérabilités identifiées pour obtenir un accès initial.' },
      { title: 'Privilege Escalation', desc: 'Élévation de privilèges pour obtenir un accès root/admin.' },
      { title: 'Post-exploitation', desc: 'Capture du flag et analyse des artefacts laissés.' },
      { title: 'Write-up', desc: 'Rédaction du write-up documentant la méthodologie complète.' },
    ],
    objective: 'Développer et valider les compétences offensives en conditions réelles via des machines virtuelles vulnérables et des challenges CTF.',
    impact: [
      'Amélioration continue des compétences offensives',
      'Validation pratique de la méthodologie pentest',
      'Développement du mindset attaquant',
      'Constitution d\'un portfolio technique démontrable',
    ],
    tools: ['Kali Linux', 'Nmap', 'Metasploit', 'Python', 'GDB'],
  },
]

const SecuritySection = () => {
  const [activeTab, setActiveTab] = useState('Compétences')
  const tabs = ['Compétences', 'Missions', 'Outils']

  const skills = [
    { name: 'Pentest / Tests d\'intrusion', level: 65 },
    { name: 'Analyse de vulnérabilités', level: 70 },
    { name: 'OSINT', level: 72 },
    { name: 'Cryptographie', level: 60  },
    { name: 'Sécurité réseaux (TCP/IP, Firewall)', level: 65 },
    { name: 'Forensique numérique', level: 58  },
    { name: 'Sécurité Web & Mobile', level: 70 },
  ]

  const toolGroups = [
    {
      category: 'Pentest Web',
      color: '#FF6600',
      tools: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'XSStrike'],
    },
    {
      category: 'Reconnaissance',
      color: '#00FF88',
      tools: ['Nmap', 'Shodan', 'TheHarvester', 'Maltego'],
    },
    {
      category: 'Analyse réseau',
      color: '#1AA3DC',
      tools: ['Wireshark', 'tcpdump'],
    },
    {
      category: 'Exploitation',
      color: '#9FEF00',
      tools: ['Metasploit', 'Kali Linux', 'GDB', 'Python'],
    },
    {
      category: 'Sécurité système',
      color: '#D70A53',
      tools: ['Debian', 'iptables', 'fail2ban', 'SSH'],
    },
    {
      category: 'Monitoring',
      color: '#FFA500',
      tools: ['Zabbix', 'Grafana'],
    },
  ]

  return (
    <section id="security" className="relative section-padding overflow-hidden">

      {/* Glows */}
      <div className="absolute top-3/3 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #9FEF00, transparent)' }} />
      <div className="absolute bottom-0 left-4/4 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #FF6600, transparent)' }} />

      <div className="max-w-7xl mx-auto">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#f43f5e' }}>
            <span style={{ color: '#f43f5e' }}><SecurityIcon /></span>
            <span>Sécurité Informatique</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            SÉCURITÉ
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Missions d'audit, tests d'intrusion et analyse de vulnérabilités — une approche méthodique et éthique de la cybersécurité.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-400" />
            <div className="w-2 h-2 rounded-full bg-red-400" style={{ boxShadow: '0 0 8px #f43f5e' }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-400" />
          </div>
        </motion.div>

        {/* Badge niveau */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div
            className="glass px-6 py-4 rounded-sm max-w-2xl text-center"
            style={{ border: '1px solid rgba(159,239,0,0.2)', boxShadow: '0 0 30px rgba(159,239,0,0.05)' }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ background: 'rgba(159,239,0,0.1)', border: '1px solid rgba(159,239,0,0.3)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#9FEF00" strokeWidth="1.5" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="font-mono text-sm font-bold" style={{ color: '#9FEF00' }}>Praticien Sécurité — Niveau Intermédiaire</span>
            </div>
            <p className="font-mono text-xs text-gray-600">
              Étudiant spécialisé en Sécurité Informatique à l'ESGIS • Approche offensive & défensive • Hack The Box
            </p>
          </div>
        </motion.div>

        {/* TABS */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className="font-mono text-sm px-6 py-3 rounded-sm transition-all duration-300"
              style={
                activeTab === tab
                  ? { background: 'rgba(244,63,94,0.1)', border: '1px solid #f43f5e', color: '#f43f5e', boxShadow: '0 0 15px rgba(244,63,94,0.2)' }
                  : { background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#6b7280' }
              }
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* TAB Missions */}
        {activeTab === 'Missions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {missions.map((mission, i) => (
              <SecurityMissionCard key={mission.id} mission={mission} index={i} />
            ))}
          </motion.div>
        )}

        {/* TAB Compétences */}
        {activeTab === 'Compétences' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto space-y-5"
          >
            {securitySkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col gap-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-sm text-gray-300">{skill.name}</span>
                  <span className="font-mono text-xs" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.08, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`, boxShadow: `0 0 8px ${skill.color}60` }}
                  />
                </div>
              </motion.div>
            ))}


{/* Domaines */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
  {[
    {
      title: 'Offensif',
      items: ['Pentest Web', 'Tests d\'intrusion', 'Exploitation', 'CTF'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M14.25 6.087c0-.894.726-1.62 1.62-1.62h2.043c.894 0 1.62.726 1.62 1.62v2.043c0 .894-.726 1.62-1.62 1.62h-2.043a1.62 1.62 0 0 1-1.62-1.62V6.087zM9.75 17.913c0 .894-.726 1.62-1.62 1.62H6.087a1.62 1.62 0 0 1-1.62-1.62v-2.043c0-.894.726-1.62 1.62-1.62H8.13c.894 0 1.62.726 1.62 1.62v2.043zM14.25 14.25l5.25 5.25M9.75 9.75L4.5 4.5" />
        </svg>
      ),
      color: '#FF6600'
    },
    {
      title: 'Défensif',
      items: ['Hardening', 'Monitoring', 'Forensique', 'Firewall'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 3l7.5 4.5v6c0 5.25-3.75 7.5-7.5 9-3.75-1.5-7.5-3.75-7.5-9v-6L12 3z" />
        </svg>
      ),
      color: '#1AA3DC'
    },
    {
      title: 'Analyse',
      items: ['OSINT', 'Vulnérabilités', 'Trafic réseau', 'Reporting'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
        </svg>
      ),
      color: '#9FEF00'
    }
  ].map((domain, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + i * 0.1 }}
      className="glass rounded-sm p-4 text-center"
      style={{ border: `1px solid ${domain.color}20` }}
    >
      {/* Icon container parfaitement centré */}
      <div className="mb-3 flex items-center justify-center">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ background: `${domain.color}15`, color: domain.color }}
        >
          {domain.icon}
        </div>
      </div>

      <h4
        className="font-mono text-sm mb-3 font-bold"
        style={{ color: domain.color }}
      >
        {domain.title}
      </h4>

      <ul className="space-y-1">
        {domain.items.map((item, j) => (
          <li key={j} className="font-mono text-xs text-gray-600">
            <span style={{ color: `${domain.color}60` }} className="mr-1">›</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>
 </motion.div>
 )}



        {/* TAB Outils */}
        {activeTab === 'Outils' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {toolGroups.map((group, gi) => (
              <div key={gi} className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${group.color}40, transparent)` }} />
                  <p className="font-mono text-xs tracking-widest uppercase px-3" style={{ color: group.color }}>
                    ||{group.category}||
                  </p>
                  <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${group.color}40)` }} />
                </div>
                <div className="flex flex-wrap gap-3">
                  {group.tools.map((tool, i) => {
                    const tc = toolColors[tool] || { bg: 'rgba(255,255,255,0.05)', color: '#888', border: 'rgba(255,255,255,0.1)' }
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="glass px-4 py-3 rounded-sm font-mono text-sm cursor-default flex items-center gap-2"
                        style={{ border: `1px solid ${tc.border}`, boxShadow: `0 0 10px ${tc.bg}` }}
                      >
                        <span style={{ color: tc.color }}>▸</span>
                        <span style={{ color: tc.color }}>{tool}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Méthodologies */}
            <div className="mt-10 glass rounded-sm p-6" style={{ border: '1px solid rgba(159,239,0,0.15)' }}>
              <p className="font-mono text-xs text-gray-600 tracking-widest uppercase mb-4">// Méthodologies & Frameworks</p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {['OWASP Top 10', 'Kill Chain', 'MITRE ATT&CK', 'ISO 27001', 'CIS Benchmark'].map((m, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="font-mono text-xs py-2 px-3 rounded-sm"
                      style={{ background: 'rgba(159,239,0,0.05)', border: '1px solid rgba(159,239,0,0.15)', color: '#9FEF00' }}
                    >
                      {m}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default SecuritySection