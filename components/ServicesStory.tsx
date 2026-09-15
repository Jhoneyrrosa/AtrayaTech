"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ServicesStory.module.css";

const services = [
  { title: "Sites de alta performance", text: "Experiências digitais construídas para posicionar marcas, comunicar com clareza e converter atenção em oportunidade.", label: "PRESENÇA DIGITAL", detail: "Design / Desenvolvimento / Experiência" },
  { title: "Sistemas personalizados", text: "Software desenvolvido em torno da operação real da empresa, conectando processos, dados e pessoas.", label: "OPERAÇÃO CONECTADA", detail: "Processos / Dados / Pessoas" },
  { title: "Automação e inteligência artificial", text: "Automação aplicada a tarefas, atendimento e fluxos para reduzir trabalho manual e ampliar capacidade.", label: "INTELIGÊNCIA APLICADA", detail: "Integrações / Atendimento / Automação" },
  { title: "Soluções digitais sob medida", text: "Quando o problema não cabe em uma solução pronta, desenhamos tecnologia em torno do negócio.", label: "ARQUITETURA SOB MEDIDA", detail: "Estratégia / Arquitetura / Produto" },
];

// Native interface studies driven by normalized chapter scroll progress.
function Visual({ index }: { index: number }) {
  if (index === 0) return <div className={styles.atrayaPreview}>
    <div className={styles.desktopPreview}><div className={styles.chrome}><span>○ ○ ○</span><span>ATRAYA / TECNOLOGIA PARA NEGÓCIOS</span><span>↗</span></div>
      <div className={styles.previewScene}><Image src="/sequences/scene-03/frame-0100.webp" alt="" fill sizes="(max-width: 767px) 90vw, 45vw" className={styles.previewPhoto} /><div className={styles.previewShade} />
        <div className={styles.previewNav}><span className={styles.previewLogo}><Image src="/images/atraya-logo.png" alt="" width={2172} height={724} /></span><span>Falar com a Atraya ↗</span></div>
        <div className={styles.previewCopy}><small>ATRAYA / TECNOLOGIA PARA NEGÓCIOS</small><strong>Construímos tecnologia<br />para empresas<br />em movimento.</strong><p>Sites, sistemas e automações sob medida.</p><span>Falar com a Atraya ↗</span></div>
      </div>
    </div>
    <div className={styles.mobilePreview}><div className={styles.mobileSpeaker} /><Image src="/sequences/scene-03/frame-0100.webp" alt="" fill sizes="180px" className={styles.previewPhoto} /><div className={styles.previewShade} /><span className={styles.previewLogo}><Image src="/images/atraya-logo.png" alt="" width={2172} height={724} /></span><strong>Construímos<br />tecnologia para<br />empresas em<br />movimento.</strong><span className={styles.mobileCta}>Falar com a Atraya ↗</span></div>
  </div>;
  if (index === 1) return <div className={styles.dashboard}>
    <div className={styles.chrome}><span>WORKSPACE / OPERAÇÃO</span><span>Visão geral</span></div>
    <div className={styles.dashbody}><aside><b>AX /</b><span>Overview</span><span>Projetos</span><span>Equipe</span><span>Relatórios</span><i>Workspace 01</i></aside>
      <div className={styles.dashmain}><div className={styles.dashheading}><strong>Visão da operação</strong><small>ESTE MÊS</small></div><div className={styles.metrics}><div><small>PROJETOS</small><b>24</b></div><div><small>ENTREGAS</small><b>128</b></div><div><small>EM DIA</small><b>96<span>%</span></b></div></div>
      <div className={styles.chart}><div><small>FLUXO DE ENTREGAS</small><span>Últimas 8 semanas</span></div><div className={styles.bars}>{[32,48,40,65,55,74,68,92].map((height,i)=><i key={i} style={{height:`${height}%`}} />)}</div></div>
      <div className={styles.table}>{[["PROJETO","EQUIPE","STATUS"],["Plataforma digital","Produto","Em revisão"],["Integração de dados","Operação","Concluído"],["Portal de clientes","Design","Em andamento"]].map((row,i)=><div key={i}>{row.map(cell=><span key={cell}>{cell}</span>)}</div>)}</div></div>
    </div>
  </div>;
  if (index === 2) return <div className={styles.automation}>
    <div className={styles.flowheader}><small>FLUXO / ATENDIMENTO</small><span>● Ativo</span></div>
    <div className={styles.message}><small>01 / LEAD</small><p>“Quero conhecer as soluções<br />para minha empresa.”</p><span>Nova conversa recebida</span></div>
    <div className={styles.connector} /><div className={styles.engine}><span>02 / ANÁLISE → 03 / AUTOMAÇÃO</span><strong>Entender. Organizar. Conectar.</strong><div><i>Intenção</i><i>Contexto</i><i>Próxima ação</i></div></div>
    <div className={styles.branch}><div><small>04 / ATENDIMENTO</small><strong>Equipe comercial</strong><span>Contexto disponível</span></div><div><small>05 / RESULTADO</small><strong>CRM atualizado</strong><span>Histórico sincronizado</span></div></div>
    <div className={styles.flowfooter}><span>EVENTO RECEBIDO</span><i /><span>AÇÃO CONECTADA</span></div>
  </div>;
  return <div className={styles.architecture}>
    <div className={styles.archheader}><span>MAPA DA SOLUÇÃO</span><span>VERSÃO 01.0</span></div>
    <div className={styles.archinputs}><span>Experiência</span><span>Operação</span><span>Dados</span></div>
    <div className={styles.archcore}><small>SEU NEGÓCIO NO CENTRO</small><strong>Uma arquitetura.<br />Suas possibilidades.</strong><span>ESTRUTURA MODULAR / INTEGRAÇÃO CONTÍNUA</span></div>
    <div className={styles.archoutputs}><div><small>01</small><b>Interface</b><span>Web / Mobile</span></div><div><small>02</small><b>Integrações</b><span>APIs / Serviços</span></div><div><small>03</small><b>Inteligência</b><span>Dados / Decisões</span></div></div>
    <div className={styles.archscale}><span>CONTEXTO</span><i /><span>SOLUÇÃO</span><i /><span>EVOLUÇÃO</span></div>
  </div>;
}

export default function ServicesStory() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const node = section.current;
    if (!node) return;
    const media = window.matchMedia("(min-width: 1024px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    function update() {
      frame = 0;
      if (!node) return;
      node.dataset.enhanced = String(media.matches);
      if (!media.matches) return;
      const distance = node.offsetHeight - (window.innerHeight - 72);
      const progress = Math.max(0, Math.min(1, (72 - node.getBoundingClientRect().top) / Math.max(1, distance)));
      const current = Math.min(3, Math.floor(progress * 4));
      node.style.setProperty("--service-progress", String(progress));
      node.querySelectorAll<HTMLElement>("[data-chapter]").forEach(layer => {
        const index = Number(layer.dataset.chapter);
        const local = progress * 4 - index;
        const entrance = Math.max(0, Math.min(1, (local + .18) / .32));
        const exit = index === 3 ? 1 : Math.max(0, Math.min(1, (1.08 - local) / .32));
        const visibility = index === 0 && local < .14 ? exit : Math.min(entrance, exit);
        layer.style.setProperty("--reveal", String(visibility));
        layer.style.setProperty("--travel", String((1 - entrance) * 45 - (1 - exit) * 35) + "px");
        layer.style.setProperty("--local", String(Math.max(0, Math.min(1, local))));
        layer.style.setProperty("--page-y", String(-Math.max(0, Math.min(1, local)) * 65) + "px");
      });
      setActive(previous => previous === current ? previous : current);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    media.addEventListener("change", schedule);
    schedule();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); media.removeEventListener("change", schedule); delete node.dataset.enhanced; };
  }, []);

  function select(index: number) {
    const node = section.current;
    if (!node || node.dataset.enhanced !== "true") return;
    const distance = node.offsetHeight - (window.innerHeight - 72);
    window.scrollTo({ top: window.scrollY + node.getBoundingClientRect().top - 72 + distance * ((index + .08) / 4), behavior: "instant" });
  }

  return <section ref={section} id="servicos" aria-labelledby="services-story-title" className={styles.section}>
    <div className={styles.stage}>
      <header className={styles.heading}><p>02 / O QUE FAZEMOS</p><h2 id="services-story-title">Da presença digital<br />à operação do negócio<span>.</span></h2><span className={styles.hint}>QUATRO FRENTES.<br />UM MESMO PROPÓSITO.</span></header>
      <div className={styles.layout}>
        <div className={styles.list}>{services.map((service,index)=><div key={service.title} data-chapter={index} className={`${styles.service} ${active===index ? styles.active : ""}`}>
          <span className={styles.chapterNumber} aria-hidden="true">0{index+1}</span><h3><button type="button" onClick={()=>select(index)} className={styles.selector} aria-current={active===index ? "step" : undefined}><span>0{index+1}</span><span>{service.title}</span></button><span className={styles.staticTitle}><small>0{index+1}</small>{service.title}</span></h3>
          <div className={styles.description}><p>{service.text}</p><small>{service.detail}</small></div>
          <div className={styles.mobileVisual} aria-hidden="true"><Visual index={index} /><span className={styles.illustration}>COMPOSIÇÃO ILUSTRATIVA</span></div>
        </div>)}</div>
        <div className={styles.visualArea} aria-hidden="true"><div className={styles.visualMeta}><span>{services[active].label}</span><span>0{active+1} / 04</span></div><div className={styles.visualStage}>{services.map((service,index)=><div key={service.title} data-chapter={index} className={`${styles.layer} ${active===index ? styles.visible : ""}`}><Visual index={index} /></div>)}</div><div className={styles.visualFooter}><span>INTERFACES EM MOVIMENTO / ATRAYA</span><span>ROLE PARA EXPLORAR ↓</span></div><div className={styles.progress} /></div>
      </div>
      <nav className={styles.chapterNav} aria-label="Escolher serviço">{services.map((service,index)=><button key={service.title} onClick={()=>select(index)} aria-label={service.title} aria-current={active===index ? "step" : undefined}><span>0{index+1}</span><i /></button>)}</nav>
    </div>
  </section>;
}
