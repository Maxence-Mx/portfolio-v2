// src/sections/ai/AISection.jsx

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { aiProjects } from '../../data/aiData'

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>
)

// Logos officiels HD des outils IA
const ToolLogo = ({ name, size = 'md' }) => {
  const s = size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'

  const logos = {
    'Claude': (
      <div
        className={`${s} rounded-xl flex items-center justify-center`}
      >
        <img
          src="/logos/claude.svg"
          alt="claude logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),


    'ChatGPT': (
  <div
    className={`${s} rounded-xl flex items-center justify-center`}    
  >
    <img
      src="/logos/chatgpt.svg"
      alt="chatGPT logo"
      className="w-8 h-8 object-contain"
    />
  </div>
),


    'Gemini': (
      <div
        className={`${s} rounded-xl flex items-center justify-center`}       
      >
        <img
          src="/logos/gemini.svg"
          alt="gemini logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),


    'Grok':  (
      <div
        className={`${s} rounded-xl flex items-center justify-center`}       
      >
        <img
          src="/logos/grok.svg"
          alt="grok logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),



    'Mistral':  (
      <div
        className={`${s} rounded-xl flex items-center justify-center`}        
      >
        <img
          src="/logos/mistral.svg"
          alt="mistral logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),



    'Perplexity AI':  (
      <div
        className={`${s} rounded-xl flex items-center justify-center`}        
      >
        <img
          src="/logos/perplexity.svg"
          alt="perplexity logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),



    'GitHub Copilot': (
      <div
        className={`${s} rounded-xl flex items-center justify-center bg-white`}       
      >
        <img
          src="/logos/githubcopil.svg" 
          alt="github-copilot logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),



    'Codeium': (
      <div
        className={`${s} rounded-xl flex items-center justify-center`} 
      >
        <img
          src="/logos/codium.svg" 
          alt="codium logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),



    'Midjourney': (
      <div
        className={`${s} rounded-xl flex items-center justify-center`}
      >
        <img
          src="/logos/midjourney.svg" 
          alt="midjourney logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),


    'Leonardo AI': (
      <div
        className={`${s} rounded-xl flex items-center justify-center`}  
      >
        <img
          src="/logos/leonardo.svg" 
          alt="leonardo logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),



    'ElevenLabs':  (
      <div
        className={`${s} rounded-xl flex items-center justify-center bg-white`}  
      >
        <img
          src="/logos/elevenlabs.svg" 
          alt="elevenlabs logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),



    'Sora': (
      <div
        className={`${s} rounded-xl flex items-center justify-center bg-white`}  
      >
        <img
          src="/logos/sora.svg" 
          alt="sora logo"
          className="w-8 h-8 object-contain"
        />
      </div>
    ),
  }

  return logos[name] || (
    <div className={`${s} rounded-xl flex items-center justify-center font-black text-white text-xs`}
      style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e)', fontFamily: 'Orbitron, monospace' }}>
      {name[0]}
    </div>
  )
}

const categoryColors = {
  'LLM': '#bf00ff',
  'Code': '#00fff5',
  'Recherche': '#00FF88',
  'Image': '#FF6600',
  'Audio': '#FFB400',
  'Vidéo': '#f43f5e',
}

const llmTools = [
  { name: 'Claude', category: 'LLM', level: 85 },
  { name: 'ChatGPT', category: 'LLM', level: 80 },
  { name: 'Gemini', category: 'LLM', level: 60 },
  { name: 'Grok', category: 'LLM', level: 50 },
  { name: 'Mistral', category: 'LLM', level: 55 },
  { name: 'Perplexity AI', category: 'Recherche', level: 75 },
  { name: 'GitHub Copilot', category: 'Code', level: 70 },
  { name: 'Codeium', category: 'Code', level: 70 },
  { name: 'Midjourney', category: 'Image', level: 60 },
  { name: 'Leonardo AI', category: 'Image', level: 75 },
  { name: 'ElevenLabs', category: 'Audio', level: 80 },
  { name: 'Sora', category: 'Vidéo', level: 70 },
]

const engineeringModules = [
  {
    label: '|| PROMPT MODULE',
    title: 'Prompt Design',
    subtitle: 'Architecturer des prompts structurés pour produire des outputs production-ready',
    tags: ['Role', 'Context', 'Output Schema', 'JSON'],
    color: '#00fff5',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#00fff5" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>,
    detail: 'Context • Constraints • Output schema',
  },
  {
    label: '|| CONTEXT MODULE',
    title: 'Context Engineering',
    subtitle: 'Gérer la fenêtre de contexte, les embeddings et la récupération RAG',
    tags: ['RAG', 'Embeddings', 'Vector DB', 'Memory'],
    color: '#bf00ff',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#bf00ff" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" /></svg>,
    detail: 'Memory • Retrieval • Injection',
  },
  {
    label: '|| EVAL MODULE',
    title: 'Evaluation Loop',
    subtitle: 'Tester, scorer et itérer les outputs LLM avec des métriques objectives',
    tags: ['Scoring', 'A/B Test', 'Benchmarks', 'Feedback'],
    color: '#00FF88',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>,
    detail: 'Test • Score • Iterate',
  },
  {
    label: '|| DEPLOY MODULE',
    title: 'Integration & Deploy',
    subtitle: 'Intégrer les pipelines LLM dans des applications réelles via API',
    tags: ['API', 'Node.js', 'React', 'Webhook'],
    color: '#FF6600',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>,
    detail: 'API • Workflow • Production',
  },
]

// Prompts avancés
const promptSpecs = [
  {
    id: 'p1',
    label: 'PROMPT SPECIFICATION — SECURITY AUDIT SYSTEM v2.1',
    color: '#f43f5e',
    preview: [
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'comment', text: '// PROMPT SPECIFICATION — SECURITY AUDIT SYSTEM' },
      { type: 'comment', text: '// Version: 2.1 | Domaine: Cybersécurité | Auteur: Gnave Koffi Maxime' },
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
    ],
    full: [
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'comment', text: '// PROMPT SPECIFICATION — SECURITY AUDIT SYSTEM' },
      { type: 'comment', text: '// Version: 2.1 | Domaine: Cybersécurité | Auteur: Gnave Koffi Maxime' },
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'blank' },
      { type: 'key', key: 'ROLE', value: '"Expert en cybersécurité offensive et défensive, certifié OWASP,' },
      { type: 'value', text: ' spécialisé pentest web, analyse de vulnérabilités et durcissement."' },
      { type: 'blank' },
      { type: 'key', key: 'CONTEXT', value: '"Application web React + Node.js + JWT Auth en pré-production.' },
      { type: 'value', text: ' Surface d\'attaque : API REST, upload fichiers, auth JWT, sessions Redis."' },
      { type: 'blank' },
      { type: 'key', key: 'TASK', value: '' },
      { type: 'list', items: ['Analyser le code source fourni ligne par ligne', 'Identifier toutes les vulnérabilités OWASP Top 10', 'Évaluer la criticité selon le score CVSS 3.1', 'Proposer des correctifs avec exemples de code sécurisé', 'Générer un rapport d\'audit complet et priorisé'] },
      { type: 'blank' },
      { type: 'key', key: 'OUTPUT_SCHEMA', value: 'TypeScript Interface + Expected Output Example' },
      { type: 'code', text: `interface SecurityAuditReport {
    vulnerabilities: {
      id: string
      name: string
      severity: "Critical" | "High" | "Medium" | "Low"
      cvss_score: number
      location: string
      description: string
      exploit_scenario: string
      fix_example: string
    }[]
    overall_risk: "Critical" | "High" | "Medium" | "Low"
    risk_score: number
    executive_summary: string
    remediation_priority: string[]
    compliance_gaps: string[]
  }` },
      { type: 'code', text: `{
    "vulnerabilities": [
      {
        "id": "VULN-01",
        "name": "JWT Signature Not Verified",
        "severity": "Critical",
        "cvss_score": 9.8,
        "location": "/middleware/auth.js",
        "description": "JWT tokens are decoded without verifying signature.",
        "exploit_scenario": "Attacker forges a valid token to impersonate users.",
        "fix_example": "jwt.verify(token, process.env.JWT_SECRET)"
      }
    ],
    "overall_risk": "Critical",
    "risk_score": 9.2,
    "executive_summary": "Multiple critical authentication flaws detected.",
    "remediation_priority": ["Fix JWT verification", "Sanitize file uploads"],
    "compliance_gaps": ["OWASP A01:2021 Broken Access Control"]
  }` },
      { type: 'blank' },
      { type: 'key', key: 'CONSTRAINTS', value: '' },
      { type: 'list', items: ['Respect strictement la structure TypeScript définie', 'Produire un JSON strictement conforme à l’exemple', 'Ne jamais inventer de vulnérabilités non présentes', 'Prioriser par score CVSS décroissant', 'Fournir des correctifs réels et applicables'] },
      { type: 'blank' },
      { type: 'comment', text: '// → Output: Rapport d\'audit structuré, actionnable, priorisé CVSS' },
    ],
  },
  {
    id: 'p2',
    label: 'PROMPT SPECIFICATION — CONSEILLER EN ARCHITECTURE SYSTEME v1.3',
    color: '#00fff5',
    preview: [
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'comment', text: '// PROMPT SPECIFICATION — CONSEILLER EN ARCHITECTURE SYSTEME' },
      { type: 'comment', text: '// Version: 1.3 | Domaine: Software Architecture | Auteur: Gnave Koffi Maxime' },
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
    ],
    full: [
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'comment', text: '// PROMPT SPECIFICATION — CONSEILLER EN ARCHITECTURE SYSTEME' },
      { type: 'comment', text: '// Version: 1.3 | Domaine: Software Architecture | Auteur: Gnave Koffi Maxime' },
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'blank' },
      { type: 'key', key: 'ROLE', value: '"Architecte logiciel senior avec 10+ ans d\'expérience en systèmes' },
      { type: 'value', text: ' distribués, microservices, APIs REST/GraphQL et cloud-native applications."' },
      { type: 'blank' },
      { type: 'key', key: 'CONTEXT', value: '"Projet: {project_description}. Stack cible: {tech_stack}.' },
      { type: 'value', text: ' Contraintes: {constraints}. Budget: {budget}. Équipe: {team_size} devs."' },
      { type: 'blank' },
      { type: 'key', key: 'OUTPUT_SCHEMA', value: 'TypeScript Interface + Expected Output Example' },
      { type: 'code', text: `interface ArchitectureReport {
    architectures: {
      name: string
      pattern: string
      components: string[]
      pros: string[]
      cons: string[]
      complexity: "Low" | "Medium" | "High"
      implementation_weeks: number
      scalability_score: number
    }[]
    recommended: string
    reasoning: string
    mvp_roadmap: string[]
  }` },
      { type: 'code', text: `{
    "architectures": [
      {
        "name": "Microservices with API Gateway",
        "pattern": "Microservices",
        "components": ["React", "Node.js", "PostgreSQL", "Docker"],
        "pros": ["Scalable", "Independent deployments"],
        "cons": ["Operational complexity"],
        "complexity": "High",
        "implementation_weeks": 10,
        "scalability_score": 9
      }
    ],
    "recommended": "Microservices with API Gateway",
    "reasoning": "Best trade-off between scalability and maintainability",
    "mvp_roadmap": ["Auth service", "API Gateway", "Frontend"]
  }` },
      { type: 'blank' },
      { type: 'key', key: 'CONSTRAINTS', value: '' },
      { type: 'list', items: ['Respecter strictement la structure TypeScript', 'Suivre fidèlement le format de l’exemple', 'Adapter les choix à la taille de l’équipe', 'Fournir des estimations réalistes et cohérentes'] },
      { type: 'blank' },
      { type: 'comment', text: '// → Output: Architecture comparée, recommandation justifiée, roadmap MVP' },
    ],
  },
  {
    id: 'p3',
    label: 'PROMPT SPECIFICATION — REDACTEUR DE DOCUMENTATION TECHNIQUE v1.0',
    color: '#bf00ff',
    preview: [
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'comment', text: '// PROMPT SPECIFICATION — REDACTEUR DE DOCUMENTATION TECHNIQUE' },
      { type: 'comment', text: '// Version: 1.0 | Domaine: Rédaction technique | Auteur: Gnave Koffi Maxime' },
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
    ],
    full: [
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'comment', text: '// PROMPT SPECIFICATION — REDACTEUR DE DOCUMENTATION TECHNIQUE' },
      { type: 'comment', text: '// Version: 1.0 | Domaine: Rédaction technique | Auteur: Gnave Koffi Maxime' },
      { type: 'comment', text: '// ═══════════════════════════════════════════════════════' },
      { type: 'blank' },
      { type: 'key', key: 'ROLE', value: '"Rédacteur technique senior spécialisé en documentation d\'API,' },
      { type: 'value', text: ' README professionnels, guides d\'intégration et spécifications techniques."' },
      { type: 'blank' },
      { type: 'key', key: 'CONTEXT', value: '"Projet: {project_name}. Type: {doc_type}.' },
      { type: 'value', text: ' Audience: {target_audience}. Format: {output_format}. Langue: {language}."' },
      { type: 'blank' },
      { type: 'key', key: 'OUTPUT_SCHEMA', value: 'TypeScript Interface + Expected Output Example' },
      { type: 'code', text: `interface DocumentationOutput {
    title: string
    overview: string
    installation: {
      prerequisites: string[]
      steps: string[]
    }
    usage: {
      title: string
      description: string
      code_example: string
      language: string
    }[]
    api_reference: {
      endpoint: string
      method: string
      params: string[]
      response: string
      errors: string[]
    }[]
    examples: string[]
    faq: string[]
    changelog: string
  }` },
      { type: 'code', text: `{
    "title": "Authentication API",
    "overview": "API handling secure JWT authentication.",
    "installation": {
      "prerequisites": ["Node.js 18+", "MongoDB"],
      "steps": ["npm install", "npm run dev"]
    },
    "usage": [
      {
        "title": "Login",
        "description": "Authenticate user and return JWT",
        "code_example": "POST /login",
        "language": "bash"
      }
    ],
    "api_reference": [
      {
        "endpoint": "/login",
        "method": "POST",
        "params": ["email", "password"],
        "response": "JWT token",
        "errors": ["401 Unauthorized"]
      }
    ],
    "examples": ["curl example here"],
    "faq": ["How to refresh token?"],
    "changelog": "v1.0 Initial release"
  }` },
      { type: 'blank' },
      { type: 'key', key: 'CONSTRAINTS', value: '' },
      { type: 'list', items: ['Respecter strictement la structure TypeScript', 'Produire un contenu conforme à l’exemple', 'Rédiger en Markdown valide', 'Adapter le ton à l’audience cible'] },
      { type: 'blank' },
      { type: 'comment', text: '// → Output: Documentation technique complète, structurée, exportable Markdown' },
    ],
  },
]

// Rendu d'une ligne de prompt
const PromptLine = ({ line }) => {
  if (line.type === 'blank') return <br />
  if (line.type === 'comment') return <p><span className="text-gray-600">{line.text}</span></p>
  if (line.type === 'value') return <p><span className="text-green-400">{line.text}</span></p>
  if (line.type === 'schema_end') return <p><span className="text-yellow-400">{line.text}</span></p>
  if (line.type === 'key') return (
    <p>
      <span className="text-violet-400">{line.key}</span>
      <span className="text-gray-600">: </span>
      <span className="text-green-400">{line.value}</span>
    </p>
  )
  if (line.type === 'list') return (
    <div className="ml-2">
      {line.items.map((item, i) => (
        <p key={i}><span className="text-gray-400">  - {item}</span></p>
      ))}
    </div>
  )
  if (line.type === 'schema') return (
    <div className="ml-2">
      {line.lines.map((l, i) => (
        <p key={i}><span className="text-gray-400">  {l}</span></p>
      ))}
    </div>
  )
  return null
}

// Carte prompt
const PromptCard = ({ spec, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      className="rounded-sm overflow-hidden"
      style={{ border: `1px solid ${spec.color}25`, boxShadow: `0 0 20px ${spec.color}05` }}
    >
      {/* Terminal header */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ background: `${spec.color}08`, borderBottom: `1px solid ${spec.color}15` }}
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F56' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FFBD2E' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#27C93F' }} />
          </div>
          <span className="font-mono text-xs truncate" style={{ color: spec.color }}>{spec.label}</span>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
          <span className="font-mono text-xs text-gray-700 hidden sm:inline">JSON Schema</span>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#27C93F', boxShadow: '0 0 4px #27C93F' }}
          />
        </div>
      </div>

      {/* Contenu terminal */}
      <div className="p-4 font-mono text-xs leading-relaxed" style={{ background: 'rgba(2,5,20,0.98)', color: '#e2e8ff' }}>
        {/* Preview toujours visible */}
        {spec.preview.map((line, i) => <PromptLine key={i} line={line} />)}

        {/* Contenu dépliable */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              {spec.full.slice(spec.preview.length).map((line, i) => <PromptLine key={i} line={line} />)}
              <p className="mt-2"><span className="animate-pulse" style={{ color: spec.color }}>|</span></p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bouton voir plus */}
        {!open && (
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-px" style={{ background: `${spec.color}20` }} />
            <span className="text-gray-700 font-mono text-xs">...</span>
            <div className="flex-1 h-px" style={{ background: `${spec.color}20` }} />
          </div>
        )}
      </div>

      {/* Bouton toggle */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-center gap-2 py-3 font-mono text-xs transition-all duration-300"
        style={{
          background: open ? `${spec.color}08` : 'rgba(255,255,255,0.02)',
          borderTop: `1px solid ${spec.color}15`,
          color: spec.color,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = `${spec.color}12` }}
        onMouseLeave={(e) => { e.currentTarget.style.background = open ? `${spec.color}08` : 'rgba(255,255,255,0.02)' }}
      >
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </motion.svg>
        {open ? 'Réduire le prompt' : 'Voir le prompt complet'}
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: spec.color, boxShadow: `0 0 4px ${spec.color}` }} />
      </motion.button>
    </motion.div>
  )
}

const AISection = () => {
  const [activeTab, setActiveTab] = useState('Environnement')
  const tabs = ['Environnement', 'Méthodologie', 'Projets']

  return (
    <section id="ai" className="relative section-padding overflow-hidden">

      {/* Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 opacity-5 blur-3xl pointer-events-none" style={{ background: 'linear-gradient(90deg, #00fff5, #bf00ff)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #00fff5, transparent)' }} />

      <div className="max-w-7xl mx-auto">

        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] uppercase text-violet-400 mb-4">
            <span style={{ color: '#bf00ff' }}><AIIcon /></span>
            <span>IA & Prompt Engineering</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
            AI ENGINEERING
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            Conception de systèmes basés sur les LLMs — pas un simple utilisateur d'IA, mais un ingénieur qui structure, orchestre et déploie des pipelines intelligents. 
          </p>

          {/* AI Engineering Environment Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-3 rounded-sm mx-auto"
            style={{ background: 'rgba(1,6,38,0.8)', boxShadow: '0 0 0 1px rgba(0,255,245,0.2), 0 0 30px rgba(0,255,245,0.05)' }}
          >
            <span className="font-mono text-xs text-gray-600 mr-2"></span>
            {['Bien plus qu’un utilisateur d’IA : je conçois et orchestre des systèmes intelligents.'].map((tag, i) => (
              <span key={i} className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{ background: 'rgba(0,255,245,0.06)', color: '#00fff5', border: '1px solid rgba(0,255,245,0.15)' }}>
                {tag}
              </span>
            ))}
          </motion.div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-violet-400" />
            <div className="w-2 h-2 rounded-full bg-violet-400" style={{ boxShadow: '0 0 8px #bf00ff' }} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-violet-400" />
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
                  ? { background: 'rgba(191,0,255,0.1)', border: '1px solid #bf00ff', color: '#bf00ff', boxShadow: '0 0 15px rgba(191,0,255,0.2)' }
                  : { background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#6b7280' }
              }
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* ===== TAB : Environnement ===== */}
        {activeTab === 'Environnement' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-12">

            {/* Modules pipeline */}
            <div>
              <p className="font-mono text-xs text-gray-700 tracking-widest uppercase mb-6 text-center">// LLM Engineering Pipeline</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {engineeringModules.map((mod, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="relative rounded-sm p-5 flex flex-col gap-3"
                    style={{ background: 'rgba(5,10,30,0.9)', border: `1px solid ${mod.color}25`, boxShadow: `0 0 20px ${mod.color}08` }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px rounded-t-sm" style={{ background: `linear-gradient(90deg, transparent, ${mod.color}, transparent)` }} />
                    <span className="font-mono text-xs" style={{ color: `${mod.color}70` }}>{mod.label}</span>
                    <div className="flex items-center gap-2">{mod.icon}<h3 className="font-mono font-black text-sm text-white">{mod.title}</h3></div>
                    <p className="font-mono text-xs text-gray-600 leading-relaxed">{mod.subtitle}</p>
                    <div className="font-mono text-xs px-3 py-1.5 rounded-sm text-center" style={{ background: `${mod.color}08`, color: mod.color, border: `1px solid ${mod.color}20` }}>{mod.detail}</div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {mod.tags.map((tag, j) => (
                        <span key={j} className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{ background: `${mod.color}06`, color: `${mod.color}90`, border: `1px solid ${mod.color}15` }}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Outils IA — grille avec vrais logos */}
            <div>
              <p className="font-mono text-xs text-gray-700 tracking-widest uppercase mb-8 text-center">// LLM Stack & Tools</p>
              {Object.entries(
                llmTools.reduce((acc, tool) => {
                  if (!acc[tool.category]) acc[tool.category] = []
                  acc[tool.category].push(tool)
                  return acc
                }, {})
              ).map(([category, tools]) => (
                <div key={category} className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${categoryColors[category]}40, transparent)` }} />
                    <span className="font-mono text-xs uppercase tracking-widest" style={{ color: categoryColors[category] }}>{category}</span>
                    <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, transparent, ${categoryColors[category]}40)` }} />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {tools.map((tool, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.06 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                        className="flex flex-col items-center gap-3 px-3 py-4 rounded-sm cursor-default group"
                        style={{
                          background: 'rgba(5,10,30,0.9)',
                          border: `1px solid ${categoryColors[category]}18`,
                          boxShadow: `0 0 15px ${categoryColors[category]}05`,
                          transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.border = `1px solid ${categoryColors[category]}40`
                          e.currentTarget.style.boxShadow = `0 0 20px ${categoryColors[category]}15`
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.border = `1px solid ${categoryColors[category]}18`
                          e.currentTarget.style.boxShadow = `0 0 15px ${categoryColors[category]}05`
                        }}
                      >
                        {/* Logo */}
                        <ToolLogo name={tool.name} />

                        {/* Nom */}
                        <span className="font-mono text-xs text-center text-gray-300 font-semibold leading-tight">{tool.name}</span>

                        {/* Barre niveau */}
                        <div className="w-full flex flex-col items-center gap-1">
                          <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${tool.level}%` }}
                              transition={{ duration: 0.9, delay: i * 0.06, ease: 'easeOut' }}
                              className="h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${categoryColors[tool.category]}80, ${categoryColors[tool.category]})`,
                                boxShadow: `0 0 6px ${categoryColors[tool.category]}60`,
                              }}
                            />
                          </div>
                          <span className="font-mono text-xs" style={{ color: categoryColors[tool.category] }}>{tool.level}%</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ===== TAB : Méthodologie ===== */}
        {activeTab === 'Méthodologie' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-10">

            {/* Pipeline méthodologique */}
            <div>
              <p className="font-mono text-xs text-gray-700 tracking-widest uppercase mb-8 text-center">// AI Engineering Methodology — 4 étapes</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    step: '01', title: 'Analyse', color: '#00fff5',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#00fff5" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>,
                    desc: 'Comprendre l\'objectif, le rôle du LLM et définir le périmètre exact de la tâche.',
                    items: ['Objectif précis', 'Rôle du modèle', 'Périmètre', 'Choix du LLM'],
                    tags: ['Goal', 'Role', 'Scope'],
                  },
                  {
                    step: '02', title: 'Structuration', color: '#bf00ff',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#bf00ff" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25z" /></svg>,
                    desc: 'Rédiger le system prompt, définir les contraintes et spécifier le format de sortie.',
                    items: ['System prompt', 'Contraintes', 'Output format', 'JSON Schema'],
                    tags: ['Prompt', 'Schema', 'Format'],
                  },
                  {
                    step: '03', title: 'Itération', color: '#00FF88',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>,
                    desc: 'Tester sur des cas réels, scorer les résultats et affiner jusqu\'à l\'output optimal.',
                    items: ['Tests réels', 'Scoring', 'A/B testing', 'Ajustements'],
                    tags: ['Test', 'Score', 'Tune'],
                  },
                  {
                    step: '04', title: 'Déploiement', color: '#FF6600',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>,
                    desc: 'Intégrer le pipeline via API dans une application réelle avec monitoring.',
                    items: ['API integration', 'Workflow', 'Production', 'Monitoring'],
                    tags: ['API', 'Deploy', 'Monitor'],
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="relative rounded-sm p-5 flex flex-col gap-4"
                    style={{ background: 'rgba(5,10,30,0.95)', border: `1px solid ${step.color}25`, boxShadow: `0 0 25px ${step.color}08` }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }} />
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center font-black" style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, fontFamily: 'Orbitron, monospace', color: step.color, fontSize: '13px' }}>{step.step}</div>
                      {step.icon}
                    </div>
                    <h3 className="font-mono font-black text-base" style={{ color: step.color, fontFamily: 'Orbitron, monospace' }}>{step.title}</h3>
                    <p className="font-mono text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                    <ul className="space-y-1">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: step.color }} />
                          <span className="font-mono text-xs text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t" style={{ borderColor: `${step.color}15` }}>
                      {step.tags.map((tag, j) => (
                        <span key={j} className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{ background: `${step.color}08`, color: step.color, border: `1px solid ${step.color}20` }}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Prompt specs */}
            <div>
              <p className="font-mono text-xs text-gray-700 tracking-widest uppercase mb-6 text-center">// Prompt Specifications — Exemples avancés</p>
              <div className="space-y-4">
                {promptSpecs.map((spec, i) => (
                  <PromptCard key={spec.id} spec={spec} index={i} />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ===== TAB : Projets ===== */}
        {activeTab === 'Projets' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="relative rounded-sm p-5 flex flex-col gap-4 group"
                  style={{ background: 'rgba(5,10,30,0.95)', border: `1px solid ${project.color}25`, boxShadow: `0 0 20px ${project.color}06` }}
                >
                  {/* Top glow */}
                  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

                  {/* Label */}
                  <span className="font-mono text-xs" style={{ color: `${project.color}60` }}>{project.label}</span>

                  {/* Type badge */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-mono text-xs px-2 py-1 rounded-sm" style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}25` }}>
                      {project.type}
                    </span>
                    <span
                      className="font-mono text-xs px-2 py-1 rounded-sm flex items-center gap-1.5"
                      style={{ background: 'rgba(255,180,0,0.08)', border: '1px solid rgba(255,180,0,0.2)', color: '#FFB400' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Bientôt disponible
                    </span>
                  </div>

                  {/* Titre */}
                  <h3 className="font-mono font-black text-base text-white" style={{ fontFamily: 'Orbitron, monospace' }}>{project.title}</h3>

                  {/* Description */}
                  <p className="font-mono text-xs text-gray-500 leading-relaxed flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="font-mono text-xs px-2 py-0.5 rounded-sm" style={{ background: `${project.color}06`, color: `${project.color}90`, border: `1px solid ${project.color}15` }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div
                    className="flex items-center gap-2 pt-3 border-t"
                    style={{ borderColor: `${project.color}15` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#FFB400', boxShadow: '0 0 6px #FFB400' }} />
                    <span className="font-mono text-xs text-gray-600">En développement — Lancement prévu bientôt</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default AISection