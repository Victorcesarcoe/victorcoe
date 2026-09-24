import { createFileRoute } from "@tanstack/react-router";
import victorPhoto from "@/assets/victor-coe.png.asset.json";
import logoVictorCoe from "@/assets/logo-victor-coe-white.png.asset.json";
import portfolioVideo from "@/assets/video-institucional-ia.mp4.asset.json";
import allouProject from "@/assets/prospec-ALLOU.png.asset.json";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Camera,
  Clock,
  ExternalLink,
  Gauge,
  Headphones,
  LayoutTemplate,
  MessageCircle,
  Phone,
  Globe,
  Video,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/5521992232661?text=Ol%C3%A1%20Victor!%20Quero%20saber%20mais%20sobre%20Agentes%20de%20IA%20para%20minha%20empresa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victor Cóe | Consultoria de Marketing Digital" },
      {
        name: "description",
        content:
          "Consultoria de marketing digital para empresas: sites profissionais, social media, vídeos, Google Meu Negócio e tráfego pago — com ferramentas de Inteligência Artificial para acelerar resultados. Fale com Victor Cóe no WhatsApp.",
      },
      { property: "og:title", content: "Victor Cóe | Consultoria de Marketing Digital" },
      {
        property: "og:description",
        content:
          "Consultoria de marketing digital para empresas com sites profissionais, social media, vídeos, Google Meu Negócio, tráfego pago e Inteligência Artificial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const beneficios = [
  { icon: Users, title: "Atrair mais clientes", desc: "Captação ativa e atendimento 24/7 sem perder oportunidade." },
  { icon: TrendingUp, title: "Aumentar as vendas", desc: "Follow-up automático e qualificação inteligente de leads." },
  { icon: Clock, title: "Economizar tempo", desc: "Tarefas repetitivas automatizadas de ponta a ponta." },
  { icon: Wallet, title: "Reduzir custos", desc: "Mais resultado por operação, com menos esforço manual." },
  { icon: Headphones, title: "Melhorar o atendimento", desc: "Respostas rápidas, consistentes e no tom da sua marca." },
  { icon: Gauge, title: "Ganhar produtividade", desc: "Sua equipe focada no que realmente gera resultado." },
];

const servicos = [
  { icon: Globe, title: "Sites profissionais" },
  { icon: LayoutTemplate, title: "Landing pages de alta conversão" },
  { icon: Camera, title: "Social media" },
  { icon: Video, title: "Produção de vídeos para marketing" },
  { icon: BadgeCheck, title: "Google Meu Negócio otimizado" },
  { icon: Bot, title: "Automações e Agentes de IA" },
];

const etapas = [
  { n: "01", title: "Diagnóstico", desc: "Entendo seu negócio, seu público e onde estão as oportunidades perdidas." },
  { n: "02", title: "Estratégia", desc: "Desenho o plano de marketing certo para o seu momento — site, conteúdo, tráfego ou automação." },
  { n: "03", title: "Execução", desc: "Produção e implementação com qualidade e ferramentas de IA para agilidade." },
  { n: "04", title: "Resultado", desc: "Mais visibilidade, mais contatos e mais vendas." },
];

const projetos = [
  {
    title: "Locação por temporada",
    desc: "Landing page para apresentar apartamentos de temporada no Rio de Janeiro, com foco em vídeo-tour dos ambientes como principal ferramenta de conversão.",
    href: "https://www.mcapartments.com.br",
  },
  {
    title: "Nutricionista",
    desc: "Landing page de alta conversão para consultório de nutrição especializado em emagrecimento e reeducação alimentar, transformando seguidores do Instagram em agendamentos diretos via WhatsApp.",
    href: "https://www.nathaliafonseca.com.br",
  },
  {
    title: "Rede de bazares",
    desc: "Site institucional premium para rede com mais de 6 unidades físicas, com identidade visual própria e estrutura pensada para converter visitantes em clientes de loja física.",
    href: "https://www.estacaobazar.com.br",
  },
  {
    title: "Barbearia",
    desc: "Landing page para rede de barbearia com duas unidades, integrando agendamento direto e contato via WhatsApp, reduzindo a fricção entre visitar a página e marcar horário.",
    href: "https://www.onmen.com.br",
  },
];

function CTA({ label = "Vamos conversar" }: { label?: string }) {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      className="glow inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
    >
      <MessageCircle className="size-5" />
      {label}
      <ArrowRight className="size-4" />
    </a>
  );
}

function Landing() {
  return (
    <main className="bg-hero min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center">
          <img
            src={logoVictorCoe.url}
            alt="Victor Cóe"
            className="h-16 w-auto"
          />
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="inline-flex items-center justify-center rounded-full bg-whatsapp p-3 text-whatsapp-foreground shadow-lg transition-transform hover:scale-105"
        >
          <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-9.202c-3.037 0-5.539 2.325-5.808 5.287-.026.289-.04.579-.04.869 0 .29.014.58.04.869l-.596-.297C4.972 12.078 4 10.305 4 8.33 4 5.493 6.493 3 9.33 3c2.836 0 5.33 2.493 5.33 5.33 0 1.975-.972 3.748-2.462 4.837l.596.297c-.027-.29-.04-.58-.04-.87 0-2.936 2.371-5.312 5.308-5.312S20.692 8.394 20.692 11.33c0 2.936-2.376 5.311-5.312 5.311-.29 0-.58-.014-.87-.04l.298.596c1.09-1.49 4.837-2.462 4.837-2.462 2.838 0 5.33-2.494 5.33-5.33 0-2.838-2.492-5.331-5.33-5.331h-.173zM12 21.75c-1.613 0-3.17-.472-4.505-1.36l-.322-.214-3.347.879.893-3.261-.21-.335C3.165 14.823 2.5 13.215 2.5 11.5 2.5 6.701 6.701 2.5 11.5 2.5S20.5 6.701 20.5 11.5 16.299 20.5 11.5 20.5c-.684 0-1.355-.076-2.004-.22l-.496.22z" />
          </svg>
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-8 pb-20 md:grid-cols-2 md:pt-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-muted-foreground">
            <BadgeCheck className="size-4 text-accent" /> CONSULTORIA DE MARKETING DIGITAL
          </span>
          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl">
            Sua empresa vendendo mais, com <span className="text-gradient">marketing que funciona</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Ajudo negócios a crescerem com sites profissionais, presença digital forte e criativos que convertem —
            usando ferramentas de Inteligência Artificial para produzir mais rápido e com mais precisão.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <CTA />
            <a
              href="tel:+5521992232661"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 font-medium transition-colors hover:bg-secondary/50"
            >
              <Phone className="size-4" /> (21) 99223-2661
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/20 blur-3xl" aria-hidden />
          <img
            src={victorPhoto.url}
            alt="Victor Cóe, consultor de marketing digital"
            className="relative w-full rounded-[2rem] border border-border object-cover shadow-card"
            loading="eager"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">O que você ganha</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <div key={b.title} className="glass-card rounded-2xl p-6">
              <b.icon className="size-6 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">Soluções completas</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Da automação inteligente à presença digital que converte.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="flex items-center gap-4 rounded-2xl border border-border bg-secondary/30 p-5"
            >
              <span className="rounded-xl bg-primary/20 p-3">
                <s.icon className="size-5 text-primary" />
              </span>
              <span className="font-medium">{s.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16" aria-labelledby="portfolio-title">
        <h2 id="portfolio-title" className="text-3xl font-bold sm:text-4xl">
          Projetos que já entreguei
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Resultado real para negócios reais.</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projetos.map((projeto) => (
            <article key={projeto.title} className="glass-card flex min-h-64 flex-col rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{projeto.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{projeto.desc}</p>
              <a
                href={projeto.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver projeto ${projeto.title} em uma nova aba`}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Ver projeto <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </article>
          ))}

          <article className="glass-card overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2">
            <div className="grid h-full md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
              <video
                className="aspect-[9/16] h-full max-h-[34rem] w-full bg-secondary/30 object-contain"
                src={portfolioVideo.url}
                controls
                playsInline
                preload="metadata"
                aria-label="Vídeo institucional produzido com Inteligência Artificial"
              />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h3 className="text-xl font-semibold">Vídeo institucional com IA</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Vídeo institucional produzido com Inteligência Artificial para campanha publicitária de uma rede
                  de farmácia — mostrando como a tecnologia pode acelerar produção audiovisual profissional com
                  qualidade e agilidade.
                </p>
              </div>
            </div>
          </article>
        </div>

        <article className="glass-card glow mt-5 overflow-hidden rounded-2xl">
          <div className="grid md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-stretch">
            <img
              src={allouProject.url}
              alt="Allou, sistema de agendamento e gestão para negócios"
              className="aspect-[1.19/1] h-full w-full object-cover"
              loading="lazy"
            />
            <div className="flex flex-col justify-center p-7 sm:p-9">
              <h3 className="text-xl font-semibold sm:text-2xl">Allou — Tecnologia para negócios que não param</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Sistema de agendamento online próprio, com agenda inteligente, atendimento automático via WhatsApp,
                painel administrativo completo e relatórios de faturamento em tempo real. Ideal para barbearias,
                salões e clínicas que ainda organizam horários manualmente.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold sm:text-4xl">Como trabalhamos</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {etapas.map((e) => (
            <div key={e.n} className="glass-card rounded-2xl p-6">
              <span className="font-display text-3xl font-extrabold text-primary">{e.n}</span>
              <h3 className="mt-3 font-semibold">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="glass-card glow rounded-3xl p-10 text-center sm:p-14">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Pronto para vender mais?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Vamos conversar e eu mostro exatamente como estruturar o marketing do seu negócio.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA label="Falar no WhatsApp" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        Victor Cóe · Consultoria de Marketing Digital · (21) 99223-2661
      </footer>
    </main>
  );
}
