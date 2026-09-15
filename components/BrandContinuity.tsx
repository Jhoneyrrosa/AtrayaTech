"use client";

import { useState } from "react";
import styles from "./BrandContinuity.module.css";

export function SearchPresence() {
  return <section className={styles.section} aria-labelledby="presence-title">
    <div className={styles.split}><div><p className={styles.eyebrow}>PRESENÇA DIGITAL / DESCOBERTA</p><h2 id="presence-title">Seu negócio.<br />No caminho de<br /><em>quem procura.</em></h2><p className={styles.copy}>Um site conecta o que sua empresa faz às pessoas que estão buscando uma solução. Com informações claras e um próximo passo fácil de encontrar.</p><a className={styles.link} href="#contato">Construir minha presença digital ↗</a></div>
    <div className={styles.search}><div className={styles.searchbar}><span aria-hidden="true">⌕</span> psiquiatra <span aria-hidden="true">↵</span></div><p className={styles.micro}>EXEMPLO ILUSTRATIVO DE RESULTADO DE BUSCA</p><div className={styles.result}><small>drataismantelli.com.br</small><h3>Dra. Tais Mantelli — Psiquiatra</h3><p>Psiquiatria com escuta acolhedora. Conheça a abordagem, encontre informações e entre em contato para agendar.</p><div>Atendimento <span>·</span> Sobre <span>·</span> Contato</div></div><div className={styles.searchNote}><span>01 / SER ENCONTRADO</span><span>02 / GERAR CONFIANÇA</span><span>03 / INICIAR UMA CONVERSA</span></div><p className={styles.micro}>Representação da experiência de busca, sem promessa de posição no Google.</p></div></div>
  </section>;
}

const voices = [
  ["O site ficou pronto rápido e já apareceu no Google. Os clientes agora me acham sem depender só de indicação.", "Selecell", "Assistência Técnica"],
  ["Profissionalismo do início ao fim. O site representa exatamente o que a gente faz na oficina e trouxe contatos novos.", "JB Racing RJ", "Oficina de Motos"],
  ["Te indiquei pro meu sócio. Ele vai te chamar. Já falei que vc é top!!! 😊", "Joyce Boroto", "Advogada"],
  ["Trabalho excelente. O site ficou profissional e a comunicação foi muito clara durante todo o processo. Recomendo com certeza!", "Gerosa", "Empresário"],
  ["Já te indiquei para uns 8 colegas rs. Você está de parabéns, continue assim! Principalmente pelo atendimento e atenção.", "Dra. Tais Mantelli", "Psiquiatra"],
];
export function ClientVoices() {
  return <section className={styles.section} aria-labelledby="voices-title"><p className={styles.eyebrow}>RELAÇÕES / CONFIANÇA</p><div className={styles.voicesHeading}><h2 id="voices-title">O trabalho fica.<br /><em>A confiança também.</em></h2><p className={styles.copy}>Relatos de clientes que fazem parte da nossa trajetória, desde a SaborSite.</p></div><div className={styles.voices}>{voices.map(([quote,name,role],i)=><figure key={name}><span className={styles.quoteMark} aria-hidden="true">“</span><blockquote>{quote}</blockquote><figcaption><span>0{i+1} / {name}</span><small>{role}</small></figcaption></figure>)}</div></section>;
}

export function ContactConversation({ contactHref = "https://wa.me/5544997491549" }: { contactHref?: string }) {
  const [name,setName]=useState("");
  const [intro,setIntro]=useState(false);
  const [need,setNeed]=useState("");
  const message=`Olá, Jhonny! Sou ${name.trim()}. Vim pelo site da Atraya. ${need.trim()}`;
  return <section id="contato" className={styles.section} aria-labelledby="contact-title"><div className={styles.split}><div><p className={styles.eyebrow}>VAMOS CONVERSAR</p><h2 id="contact-title">Uma conversa.<br /><em>Novas possibilidades.</em></h2><p className={styles.copy}>Conte o que você quer construir ou melhorar. O próximo passo é uma conversa com Jhonny sobre o seu negócio.</p><a className={styles.link} href={contactHref}>Prefiro ir direto ao WhatsApp ↗</a></div><div className={styles.chat}><header><span className={styles.avatar}>J</span><div><strong>Jhonny / Atraya</strong><small>Contato guiado · continue no WhatsApp</small></div></header><div className={styles.conversation} aria-live="polite"><p>Olá! Vamos falar sobre o seu próximo projeto?</p><p>Como posso te chamar?</p>{intro && <><p className={styles.reply}>{name}</p><p>Prazer, {name}! O que você quer construir ou melhorar?</p></>}</div>{!intro ? <form onSubmit={event=>{event.preventDefault();if(name.trim())setIntro(true);}}><label htmlFor="contact-name">Seu nome</label><div className={styles.inputRow}><input id="contact-name" autoComplete="given-name" required maxLength={80} value={name} onChange={event=>setName(event.target.value)} placeholder="Como posso te chamar?" /><button type="submit">Continuar ↗</button></div></form> : <div className={styles.chatDetails}><label htmlFor="contact-need">Conte um pouco sobre o projeto</label><textarea id="contact-need" maxLength={1000} value={need} onChange={event=>setNeed(event.target.value)} placeholder="Preciso de um site, sistema ou automação…" /><a className={styles.send} href={`${contactHref}?text=${encodeURIComponent(message)}`}>Continuar no WhatsApp ↗</a><button type="button" className={styles.edit} onClick={()=>setIntro(false)}>Editar nome</button></div>}<p className={styles.privacy}>A mensagem fica aqui até você abrir o WhatsApp e enviá-la.</p></div></div></section>;
}
