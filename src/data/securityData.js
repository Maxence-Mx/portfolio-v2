// src/data/securityData.js

export const securitySkills = [
  { name: 'Pentest / Tests d\'intrusion', level: 60, color: '#9FEF00' },
  { name: 'Analyse de vulnérabilités', level: 70, color: '#9FEF00' },
  { name: 'OSINT', level: 55, color: '#9FEF00' },
  { name: 'Cryptographie', level: 30, color: '#9FEF00' },
  { name: 'Sécurité réseaux (TCP/IP, Firewall)', level: 55, color: '#9FEF00' },
  { name: 'Forensique numérique', level: 65, color: '#9FEF00' },
  { name: 'Sécurité Web & Mobile', level: 80, color: '#9FEF00' },
]

export const securityTools = [
  { name: 'Nmap', category: 'Reconnaissance' },
  { name: 'Burp Suite', category: 'Web Pentest' },
  { name: 'Wireshark', category: 'Analyse réseau' },
  { name: 'Kali Linux', category: 'OS Sécurité' },
  { name: 'Metasploit', category: 'Exploitation' },
  { name: 'Zabbix', category: 'Monitoring' },
  { name: 'Grafana', category: 'Visualisation' },
  { name: 'Google VirusTotal', category: 'Analyse malware' },
  { name: 'Darktrace', category: 'IA Sécurité' },
  { name: 'Microsoft Copilot Security', category: 'IA Sécurité' },
]

export const securityProjects = [
  {
    id: 'sec-1',
    title: 'Audit de vulnérabilités Web',
    description: 'Réalisation d\'un audit complet de sécurité sur une application web : injection SQL, XSS, CSRF, mauvaises configurations.',
    tools: ['Burp Suite', 'Nmap', 'OWASP'],
    type: 'Pentest Web',
    color: 'cyan',
  },
  {
    id: 'sec-2',
    title: 'Analyse de trafic réseau',
    description: 'Capture et analyse de paquets réseau pour détecter des anomalies, intrusions et comportements suspects.',
    tools: ['Wireshark', 'Nmap', 'tcpdump'],
    type: 'Analyse réseau',
    color: 'violet',
  },
  {
    id: 'sec-3',
    title: 'OSINT Investigation',
    description: 'Investigation en sources ouvertes pour reconstituer le profil numérique d\'une cible dans un cadre éthique et légal.',
    tools: ['Maltego', 'Shodan', 'TheHarvester'],
    type: 'OSINT',
    color: 'cyan',
  },
  {
    id: 'sec-4',
    title: 'Hardening système Linux',
    description: 'Sécurisation d\'un serveur Debian : configuration firewall, désactivation services inutiles, gestion des permissions.',
    tools: ['Debian', 'iptables', 'fail2ban', 'SSH'],
    type: 'Sécurité système',
    color: 'violet',
  },
  {
    id: 'sec-5',
    title: 'CTF Challenges',
    description: 'Participation à des challenges Capture The Flag pour développer les compétences en exploitation et reverse engineering.',
    tools: ['Kali Linux', 'GDB', 'Python', 'Metasploit'],
    type: 'CTF',
    color: 'cyan',
  },
]