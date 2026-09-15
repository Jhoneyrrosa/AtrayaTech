import Image from "next/image";
import ServicesStory from "./ServicesStory";
import { SearchPresence, ClientVoices, ContactConversation } from "./BrandContinuity";

const frame = "mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20";
const label = "text-[11px] font-medium uppercase tracking-[0.18em] text-[#79bfb8]";
const heading = "text-[clamp(2rem,4.1vw,3.8rem)] font-medium leading-[1.12] tracking-[-0.045em] text-balance";
const button = "inline-flex min-h-14 items-center justify-between gap-10 rounded-[3px] border border-white/25 px-6 py-4 text-sm font-medium text-[#e7eae6] transition-colors hover:border-[#79bfb8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79bfb8] motion-reduce:transition-none";

type Project = {
  name: string;
  segment: string;
  problem: string;
  solution: string;
  image?: { src: string; alt: string };
  href?: string;
  placeholder?: boolean;
};

const projects: Project[] = [
  { name: "Selecell", segment: "Assistência técnica / RJ", problem: "Apresentar serviços e facilitar o contato com a assistência.", solution: "Site com serviços e atendimento pelo WhatsApp.", image: { src: "/images/projects/selecell.webp", alt: "Site da Selecell" }, href: "https://selecell.com.br/" },
  { name: "JB Racing RJ", segment: "Oficina de motos / RJ", problem: "Organizar a apresentação dos serviços da oficina.", solution: "Landing page com serviços, fotos e orçamento pelo WhatsApp.", image: { src: "/images/projects/jbracing.webp", alt: "Site da JB Racing RJ" }, href: "https://jbracingrj.com/" },
  { name: "Joyce Boroto", segment: "Advocacia / ES", problem: "Comunicar a atuação em direito previdenciário.", solution: "Site institucional com contato pelo WhatsApp e conteúdo voltado ao INSS.", image: { src: "/images/projects/joyce.webp", alt: "Site de Joyce Boroto" }, href: "https://joyceboroto.adv.br/" },
  { name: "Gerosa Veículos", segment: "Veículos / PR", problem: "Apresentar o estoque e facilitar consultas comerciais.", solution: "Site com catálogo, informações de financiamento e atendimento direto.", image: { src: "/images/projects/gerosa.webp", alt: "Site da Gerosa Veículos" }, href: "https://gerosaveiculos.com.br/" },
  { name: "Dra. Tais Mantelli", segment: "Psiquiatria / SP", problem: "Apresentar uma abordagem acolhedora de atendimento.", solution: "Site institucional com informações e agendamento pelo WhatsApp.", image: { src: "/images/projects/tais.png", alt: "Site da Dra. Tais Mantelli" }, href: "https://drataismantelli.com.br/" },
];

const steps = [
  ["Entender", "Ouvimos sua equipe e investigamos o contexto, as necessidades e as prioridades."],
  ["Planejar", "Definimos escopo, abordagem e etapas para orientar as decisões do projeto."],
  ["Construir", "Desenvolvemos e validamos a solução, com acompanhamento ao longo das entregas."],
  ["Evoluir", "Observamos o uso e identificamos melhorias para os próximos passos do produto."],
];
const questions = [
  ["Que tipo de projeto a Atraya desenvolve?", "Desenvolvemos sites, sistemas web, automações e soluções digitais sob medida. O escopo parte dos objetivos e das necessidades de cada negócio."],
  ["Vocês trabalham apenas com sites?", "Não. Também construímos ferramentas para operações internas, integrações entre sistemas e soluções de automação."],
  ["É possível criar sistemas personalizados?", "Sim. Começamos entendendo os processos da empresa para definir funcionalidades, integrações e prioridades de desenvolvimento."],
  ["A Atraya trabalha com inteligência artificial?", "Sim. Avaliamos aplicações de IA em atendimento, orientação e automação, considerando a qualidade dos dados e a necessidade de supervisão humana."],
  ["Como funciona o início de um projeto?", "Começamos com uma conversa sobre o desafio e o momento da empresa. A partir dela, alinhamos o escopo e uma proposta de trabalho."],
  ["Vocês atendem empresas de qualquer região?", "O trabalho pode ser conduzido remotamente. A disponibilidade e as necessidades de acompanhamento são alinhadas na conversa inicial."],
];

export default function HomeSections({ contactHref }: { contactHref?: string }) {
  return (
    <div className="atraya-content">
      <section id="sobre" aria-labelledby="manifesto-title" className="manifesto scroll-mt-24">
        <div className="manifesto-frame">
          <div className="manifesto-topline"><p>01 / NOSSA PERSPECTIVA</p><span>TECNOLOGIA COM PROPÓSITO</span></div>
          <div className="manifesto-composition">
            <figure className="manifesto-visual" aria-hidden="true">
              <Image src="/sequences/scene-03/frame-0100.webp" alt="" fill sizes="(max-width: 767px) 90vw, 52vw" className="manifesto-photo" />
              <figcaption><span>ATRAYA / PERSPECTIVA</span><span>01 — 03</span></figcaption>
            </figure>
            <h2 id="manifesto-title" className="manifesto-title">
              <span className="manifesto-question">Tecnologia não<br />é o produto.</span>
              <span className="manifesto-statement">É o que ela faz<br />pelo <em>negócio.</em></span>
            </h2>
            <span className="manifesto-margin" aria-hidden="true">DA IDEIA AO IMPACTO</span>
          </div>
          <div className="manifesto-note"><span aria-hidden="true">[ NOSSO PONTO DE PARTIDA ]</span><p>Criamos soluções digitais para transformar processos, fortalecer marcas e abrir novas possibilidades de crescimento.</p></div>
          <div className="manifesto-outcomes" aria-label="Nossa perspectiva em três frentes">
            <div><span>01 / PROCESSOS</span><p>Menos fricção.<br />Mais possibilidades.</p></div>
            <div><span>02 / MARCAS</span><p>Presença que traduz<br />quem você é.</p></div>
            <div><span>03 / CRESCIMENTO</span><p>Tecnologia para<br />o próximo passo.</p></div>
          </div>
        </div>
      </section>

      <ServicesStory />

      <SearchPresence />

      <section id="projetos" aria-labelledby="projects-title" className="scroll-mt-24 py-24 md:py-36">
        <div className={frame}>
          <p className={label}>03 / Projetos</p>
          <h2 id="projects-title" className={`${heading} mt-8 max-w-[800px]`}>Projetos construídos para funcionar no mundo real.</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#a9b5bf]">Uma nova marca, a mesma dedicação. Conheça trabalhos realizados na nossa trajetória como SaborSite.</p>
          <div className="project-list mt-16">
            {projects.map((project, index) => (
              <article key={index} className={project.placeholder ? "project-placeholder" : "project-entry"}>
                <div className={project.placeholder ? "project-placeholder-index" : "project-preview relative flex items-center justify-center overflow-hidden bg-[#0d1923]"}>
                  {project.image ? <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-contain" /> : <span aria-hidden="true">0{index + 1}</span>}
                </div>
                <div className="mt-6 flex items-start justify-between gap-6"><h3 className="text-xl font-medium tracking-[-0.025em]">{project.placeholder ? "Em preparação" : project.name}</h3><span className="pt-1 text-xs text-[#8296a3]">{project.placeholder ? "APRESENTAÇÃO DE PROJETO" : project.segment}</span></div>
                {!project.placeholder && <dl className="mt-7 space-y-5 text-sm leading-7"><div><dt className="text-[#d2dadc]">O problema</dt><dd className="text-[#91a2af]">{project.problem}</dd></div><div><dt className="text-[#d2dadc]">A solução</dt><dd className="text-[#91a2af]">{project.solution}</dd></div></dl>}
                {project.href && !project.placeholder && <a href={project.href} className={`${button} mt-6`}>Ver projeto <span aria-hidden="true">↗</span></a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClientVoices />

      <section id="processo" aria-labelledby="process-title" className="border-y border-white/10 py-24 md:py-32">
        <div className={frame}>
          <div className="grid gap-8 md:grid-cols-2"><p className={label}>04 / Como trabalhamos</p><h2 id="process-title" className={`${heading} max-w-lg`}>Clareza em cada etapa.</h2></div>
          <ol className="mt-16 grid gap-0 md:mt-24 md:grid-cols-4">
            {steps.map(([title, text], index) => <li key={title} className="relative border-l border-[#31454e] pb-12 pl-8 last:pb-0 md:border-t md:border-l-0 md:pt-10 md:pr-8 md:pb-0 md:pl-0"><span aria-hidden="true" className="absolute top-0 -left-[3px] h-[5px] w-[5px] bg-[#79bfb8] md:-top-[3px] md:left-0" /><span className="text-[11px] text-[#718895]">0{index + 1}</span><h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">{title}</h3><p className="mt-4 max-w-xs text-sm leading-7 text-[#a9b5bf]">{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="assistente" aria-labelledby="assistant-title" className="scroll-mt-24 bg-[#0a191f] py-24 md:py-36">
        <div className={`${frame} grid items-center gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-24`}>
          <div><p className={label}>05 / Assistente Atraya</p><h2 id="assistant-title" className={`${heading} mt-8 max-w-[650px]`}>Tecnologia que conversa com o seu negócio.</h2><p className="mt-8 max-w-lg text-base leading-8 text-[#a9b5bf]">Desenhamos assistentes para orientar clientes, organizar informações e apoiar sua equipe. Cada aplicação começa pelo entendimento do atendimento e das necessidades do negócio.</p>
            <a href="#contato" className={`${button} mt-9`}>Conversar sobre um assistente <span aria-hidden="true" className="text-[#79bfb8]">↗</span></a>
          </div>
          <div className="border-l border-[#79bfb8]/30 py-4 pl-8 md:pl-12"><p className="text-[10px] tracking-[0.2em] text-[#79bfb8] uppercase">IA aplicada ao atendimento</p><p className="mt-8 text-3xl leading-[1.3] font-medium tracking-[-0.035em] text-[#cad5d7]">Uma boa conversa começa com a pergunta certa.</p><p className="mt-10 text-xs text-[#8296a3]">Atendimento / Orientação / Possibilidades</p></div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 py-24 md:py-36">
        <div className={`${frame} grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20`}>
          <div><p className={label}>06 / Perguntas frequentes</p><h2 id="faq-title" className={`${heading} mt-8`}>Antes de começar.</h2></div>
          <div className="border-t border-white/15">{questions.map(([question, answer]) => <details key={question} name="atraya-faq" className="group border-b border-white/15"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-medium transition-colors hover:text-[#79bfb8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79bfb8] motion-reduce:transition-none [&::-webkit-details-marker]:hidden">{question}<span aria-hidden="true" className="shrink-0 text-xl font-normal text-[#79bfb8] group-open:rotate-45 motion-safe:transition-transform">+</span></summary><p className="max-w-xl pr-8 pb-7 text-sm leading-7 text-[#a9b5bf]">{answer}</p></details>)}</div>
        </div>
      </section>

      <ContactConversation contactHref={contactHref} />

      <footer className="border-t border-white/15 bg-[#040a10] py-14">
        <div className={frame}>
          <div className="flex flex-col justify-between gap-12 md:flex-row"><div><p className="text-xl font-medium tracking-[0.12em]">ATRAYA</p><p className="mt-3 text-sm text-[#91a2af]">Tecnologia para negócios.</p></div><nav aria-label="Navegação do rodapé" className="grid grid-cols-3 gap-x-8 gap-y-5 text-sm text-[#b4c0c7]">{[["Início", "inicio"], ["Serviços", "servicos"], ["Projetos", "projetos"], ["Sobre", "sobre"], ["FAQ", "faq"], ["Contato", "contato"]].map(([text, id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-[#79bfb8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79bfb8] motion-reduce:transition-none">{text}</a>)}</nav></div>
          <div className="mt-14 border-t border-white/10 pt-6 text-xs text-[#8296a3]">atrayatech.com.br</div>
        </div>
      </footer>
    </div>
  );
}
