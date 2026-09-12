import Image from "next/image";

const frame = "mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20";
const label = "text-[11px] font-medium uppercase tracking-[0.18em] text-[#79bfb8]";
const heading = "text-[clamp(2rem,4.1vw,3.8rem)] font-medium leading-[1.12] tracking-[-0.045em] text-balance";
const button = "inline-flex min-h-14 items-center justify-between gap-10 rounded-[3px] border border-white/25 px-6 py-4 text-sm font-medium text-[#e7eae6] transition-colors hover:border-[#79bfb8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79bfb8] motion-reduce:transition-none";

const services = [
  { title: "Sites de alta performance", text: "Presença digital com propósito. Sites que conectam clareza de conteúdo, identidade visual e uma experiência ágil em qualquer tela.", detail: "Estratégia de conteúdo · Design · Desenvolvimento" },
  { title: "Sistemas personalizados", text: "Software pensado a partir da sua operação. Organizamos fluxos, conectamos informações e construímos ferramentas para as necessidades do seu negócio.", detail: "Plataformas web · Integrações · Gestão" },
  { title: "Automação e inteligência artificial", text: "Menos tarefas repetitivas, mais espaço para o que exige atenção. Aplicamos automação e IA onde elas fazem sentido, com objetivos e limites claros.", detail: "Processos · Atendimento · Dados" },
  { title: "Soluções digitais sob medida", text: "Nem todo desafio cabe em uma categoria. Partimos do problema para definir a combinação de tecnologia, experiência e integração que o projeto precisa.", detail: "Diagnóstico · Produto digital · Evolução" },
];

type Project = {
  name: string;
  segment: string;
  problem: string;
  solution: string;
  image?: { src: string; alt: string };
  href?: string;
  placeholder?: boolean;
};

// Replace these explicitly marked slots with approved, real project information.
const projects: Project[] = [
  { name: "Projeto a apresentar", segment: "Segmento a informar", problem: "O contexto e o desafio deste projeto serão publicados aqui.", solution: "Este espaço receberá a solução desenvolvida e seu escopo.", placeholder: true },
  { name: "Projeto a apresentar", segment: "Segmento a informar", problem: "Espaço reservado para o problema atendido em um projeto real.", solution: "A abordagem e as entregas serão detalhadas na apresentação.", placeholder: true },
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
    <>
      <section id="sobre" aria-labelledby="manifesto-title" className="atraya-perspective scroll-mt-24">
        <div className="perspective-frame">
          <div className="perspective-index"><p>01 / NOSSA PERSPECTIVA</p><span aria-hidden="true">ATRAYA — VISÃO & IMPACTO</span></div>
          <h2 id="manifesto-title" className="perspective-heading">
            <span className="perspective-premise">Tecnologia não<br />é o produto.</span>
            <span className="perspective-answer">É o que ela faz<br />pelo negócio<span className="perspective-period">.</span></span>
          </h2>
          <div className="perspective-bottom">
            <span className="perspective-number" aria-hidden="true">01</span>
            <div className="perspective-copy"><p>Criamos soluções digitais para transformar processos, fortalecer marcas e abrir novas possibilidades de crescimento.</p><div className="perspective-topics" aria-hidden="true"><span>PROCESSOS</span><span>MARCAS</span><span>CRESCIMENTO</span></div></div>
          </div>
        </div>
      </section>

      <section id="servicos" aria-labelledby="services-title" className="scroll-mt-24 bg-[#09121b] py-24 md:py-32">
        <div className={frame}>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className={label}>02 / O que fazemos</p>
            <h2 id="services-title" className="max-w-lg text-3xl leading-tight font-medium tracking-[-0.035em] md:text-4xl">Da presença digital à operação do negócio.</h2>
          </div>
          {services.map((service, index) => (
            <article key={service.title} className="grid gap-6 border-t border-white/15 py-12 md:grid-cols-12 md:gap-8 md:py-16">
              <span className="text-xs tabular-nums text-[#79bfb8] md:col-span-1">0{index + 1}</span>
              <h3 className={`max-w-lg text-[clamp(1.8rem,3.2vw,3rem)] leading-[1.15] font-medium tracking-[-0.04em] ${index % 2 ? "md:col-span-5 md:col-start-7 md:row-start-1" : "md:col-span-5"}`}>{service.title}</h3>
              <div className={index % 2 ? "md:col-span-4 md:col-start-2 md:row-start-1" : "md:col-span-4 md:col-start-8"}>
                <p className="max-w-md text-base leading-[1.85] text-[#a9b5bf]">{service.text}</p>
                <p className="mt-6 text-xs leading-6 text-[#768c9b]">{service.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" aria-labelledby="projects-title" className="scroll-mt-24 py-24 md:py-36">
        <div className={frame}>
          <p className={label}>03 / Projetos</p>
          <h2 id="projects-title" className={`${heading} mt-8 max-w-[800px]`}>Projetos construídos para funcionar no mundo real.</h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-[#a9b5bf]">Estamos preparando a apresentação dos nossos projetos. Os espaços abaixo são temporários.</p>
          <div className="mt-16 grid items-start gap-16 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
            {projects.map((project, index) => (
              <article key={index} className={index === 1 ? "md:mt-32" : ""}>
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#0d1923]">
                  {project.image ? <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /> : <div className="text-center"><span className="block text-[10px] tracking-[0.22em] text-[#6c8494] uppercase">Imagem do projeto</span><span className="mt-3 block text-sm text-[#99aab5]">Em breve</span></div>}
                </div>
                <div className="mt-6 flex items-start justify-between gap-6"><h3 className="text-xl font-medium tracking-[-0.025em]">{project.name}</h3><span className="pt-1 text-xs text-[#8296a3]">{project.segment}</span></div>
                <dl className="mt-7 space-y-5 text-sm leading-7"><div><dt className="text-[#d2dadc]">O problema</dt><dd className="text-[#91a2af]">{project.problem}</dd></div><div><dt className="text-[#d2dadc]">A solução</dt><dd className="text-[#91a2af]">{project.solution}</dd></div></dl>
                {project.href && !project.placeholder && <a href={project.href} className={`${button} mt-6`}>Ver projeto <span aria-hidden="true">↗</span></a>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-title" className="border-y border-white/10 py-24 md:py-32">
        <div className={frame}>
          <div className="grid gap-8 md:grid-cols-2"><p className={label}>04 / Como trabalhamos</p><h2 id="process-title" className={`${heading} max-w-lg`}>Clareza em cada etapa.</h2></div>
          <ol className="mt-16 grid gap-0 md:mt-24 md:grid-cols-4">
            {steps.map(([title, text], index) => <li key={title} className="relative border-l border-[#31454e] pb-12 pl-8 last:pb-0 md:border-t md:border-l-0 md:pt-10 md:pr-8 md:pb-0 md:pl-0"><span aria-hidden="true" className="absolute top-0 -left-[3px] h-[5px] w-[5px] bg-[#79bfb8] md:-top-[3px] md:left-0" /><span className="text-[11px] text-[#718895]">0{index + 1}</span><h3 className="mt-3 text-2xl font-medium tracking-[-0.03em]">{title}</h3><p className="mt-4 max-w-xs text-sm leading-7 text-[#a9b5bf]">{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section id="assistente" aria-labelledby="assistant-title" className="scroll-mt-24 bg-[#0a191f] py-24 md:py-36">
        <div className={`${frame} grid items-center gap-16 md:grid-cols-[1.2fr_0.8fr] md:gap-24`}>
          <div><p className={label}>05 / Assistente Atraya</p><h2 id="assistant-title" className={`${heading} mt-8 max-w-[650px]`}>Tecnologia que conversa com o seu negócio.</h2><p className="mt-8 max-w-lg text-base leading-8 text-[#a9b5bf]">O Assistente Atraya será uma demonstração real de IA aplicada ao atendimento e à orientação de clientes. Uma forma de explorar como a tecnologia pode ajudar nas conversas do dia a dia.</p>
            <details className="mt-9"><summary className={`${button} w-fit cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>Conhecer o Assistente Atraya <span aria-hidden="true" className="text-[#79bfb8]">+</span></summary><p className="mt-5 max-w-md text-sm leading-7 text-[#a9b5bf]">A demonstração está em preparação. Em breve, você poderá conhecer o assistente e experimentar suas possibilidades aqui.</p></details>
          </div>
          <div className="border-l border-[#79bfb8]/30 py-4 pl-8 md:pl-12"><p className="text-[10px] tracking-[0.2em] text-[#79bfb8] uppercase">Em breve</p><p className="mt-8 text-3xl leading-[1.3] font-medium tracking-[-0.035em] text-[#cad5d7]">Uma boa conversa começa com a pergunta certa.</p><p className="mt-10 text-xs text-[#8296a3]">Atendimento / Orientação / Possibilidades</p></div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24 py-24 md:py-36">
        <div className={`${frame} grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20`}>
          <div><p className={label}>06 / Perguntas frequentes</p><h2 id="faq-title" className={`${heading} mt-8`}>Antes de começar.</h2></div>
          <div className="border-t border-white/15">{questions.map(([question, answer]) => <details key={question} name="atraya-faq" className="group border-b border-white/15"><summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-medium transition-colors hover:text-[#79bfb8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79bfb8] motion-reduce:transition-none [&::-webkit-details-marker]:hidden">{question}<span aria-hidden="true" className="shrink-0 text-xl font-normal text-[#79bfb8] group-open:rotate-45 motion-safe:transition-transform">+</span></summary><p className="max-w-xl pr-8 pb-7 text-sm leading-7 text-[#a9b5bf]">{answer}</p></details>)}</div>
        </div>
      </section>

      <section id="contato" aria-labelledby="contact-title" className="scroll-mt-24 border-t border-white/10 py-24 md:py-36">
        <div className={`${frame} flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end`}>
          <div><p className={label}>Vamos conversar</p><h2 id="contact-title" className={`${heading} mt-8 max-w-[730px]`}>Seu próximo projeto pode começar aqui.</h2></div>
          <div className="shrink-0">{contactHref ? <a href={contactHref} className={button}>Falar com a Atraya <span aria-hidden="true" className="text-[#79bfb8]">↗</span></a> : <><button type="button" disabled aria-describedby="contact-status" className={`${button} cursor-not-allowed`}>Falar com a Atraya <span aria-hidden="true" className="text-[#79bfb8]">↗</span></button><p id="contact-status" className="mt-4 text-xs text-[#91a2af]">Canal de contato disponível em breve.</p></>}</div>
        </div>
      </section>

      <footer className="border-t border-white/15 bg-[#040a10] py-14">
        <div className={frame}>
          <div className="flex flex-col justify-between gap-12 md:flex-row"><div><p className="text-xl font-medium tracking-[0.12em]">ATRAYA</p><p className="mt-3 text-sm text-[#91a2af]">Tecnologia para negócios.</p></div><nav aria-label="Navegação do rodapé" className="grid grid-cols-3 gap-x-8 gap-y-5 text-sm text-[#b4c0c7]">{[["Início", "inicio"], ["Serviços", "servicos"], ["Projetos", "projetos"], ["Sobre", "sobre"], ["FAQ", "faq"], ["Contato", "contato"]].map(([text, id]) => <a key={id} href={`#${id}`} className="transition-colors hover:text-[#79bfb8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#79bfb8] motion-reduce:transition-none">{text}</a>)}</nav></div>
          <div className="mt-14 border-t border-white/10 pt-6 text-xs text-[#8296a3]">atrayatech.com.br</div>
        </div>
      </footer>
    </>
  );
}
