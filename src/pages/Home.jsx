
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, MessageSquare, Search, Award, Smartphone, Users, Zap, ShieldCheck, PenTool, BrainCircuit, XCircle, Star, Heart, Church, Globe, Calendar } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20site%20de%20igreja%20ou%20projeto%20social.";

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ea2d7c4d3_portfolio-1-a-50-Prancheta-8-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6ab0a2868_portfolio-1-a-50-Prancheta-19.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0ccf2b463_portfolio-1-a-50-Prancheta-33.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/72d84a195_portfolio-1-a-50-Prancheta-43.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4df5041b8_portfolio-51-a-100-Prancheta-24.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9fb4f7b07_portfolio-51-a-100-Prancheta-57.png"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Toaster />
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/50b82900a_edward-cisneros-QSa-uv4WJ0k-unsplash.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2070&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Heart className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Fé, serviço e transformação — também precisam ser visíveis.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Quando alguém procura por uma igreja próxima ou um projeto para se voluntariar, sua igreja ou projeto aparece no Google? Seu site comunica com verdade o impacto que vocês geram?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Igrejas e projetos sociais transformam vidas todos os dias. Mas para isso, precisam ser encontrados.</h2>
             <p className="text-xl text-zinc-300 mt-6">Na Mati Studio, criamos sites e landing pages profissionais com um só objetivo: Fortalecer sua missão e expandir o alcance da sua mensagem.</p>
          </div>
        </section>

        {/* Who we serve */}
        <section className="py-20 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Criamos sites para:</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Church, title: "Igrejas evangélicas, católicas e comunidades cristãs" },
                        { icon: Heart, title: "Projetos sociais ligados à fé ou ações independentes" },
                        { icon: Users, title: "ONGs, associações, centros comunitários e iniciativas locais" },
                    ].map(item => (
                         <div key={item.title} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                            <item.icon className="w-12 h-12 text-[#FF004D] mx-auto mb-4"/>
                            <p className="text-lg text-zinc-300">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What a site can do */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que um site pode fazer por sua missão:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Mostrar sua igreja ou projeto com clareza, propósito e acolhimento",
                        "Transmitir confiança para novos membros, apoiadores e voluntários",
                        "Facilitar doações com segurança e simplicidade",
                        "Compartilhar sua agenda, cultos, encontros, eventos e ações",
                        "Aumentar a visibilidade no Google com SEO local",
                        "Conectar sua comunidade digitalmente — com fé e profissionalismo",
                    ].map(item => (
                         <div key={item} className="flex items-start gap-4 bg-black p-6 rounded-lg border border-zinc-800">
                            <CheckCircle className="w-6 h-6 text-[#FF004D] shrink-0 mt-1"/>
                            <p className="text-lg text-zinc-300">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md::text-4xl font-bold text-white">O que entregamos para você</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-zinc-900 border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Globe className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Site completo para igrejas e projetos sociais</h3>
                        </div>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Página inicial com mensagem inspiradora e visão da missão",
                               "Apresentação institucional com história, valores e liderança",
                               "Página de programação com horários de cultos, reuniões, eventos",
                               "Área de atuação social (projetos, comunidades atendidas, causas)",
                               "Galeria com fotos das ações e cultos",
                               "Área para doações (PIX, PagSeguro, PayPal ou outra integração)",
                               "Formulário de contato e botão para WhatsApp",
                               "SEO para ser encontrado em buscas locais",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>

                    <Card className="bg-zinc-900 border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Target className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Landing Page para campanhas específicas</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Ideal para divulgar e captar apoio em ações estratégicas.</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Campanhas de arrecadação",
                               "Eventos beneficentes, retiros e encontros religiosos",
                               "Projetos de evangelismo ou ação comunitária",
                               "Programas de doação contínua",
                               "Cadastro de voluntários e intercessores",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        {/* Differentials Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Diferenciais da Mati Studio</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: Heart, title: "Design com Sensibilidade", description: "Clareza, acolhimento e propósito" },
                    { icon: Users, title: "Fácil Navegação", description: "Ideal para públicos diversos" },
                    { icon: Smartphone, title: "100% Responsivo", description: "Funciona bem em todos os dispositivos" },
                    { icon: Search, title: "SEO Local", description: "Para ser encontrado na sua região" },
                ].map(item => (
                     <div key={item.title} className="bg-black p-6 rounded-lg border border-zinc-800">
                        <item.icon className="w-8 h-8 text-[#FF004D] mx-auto mb-3"/>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Site tradicional vs. Site feito com propósito</h2>
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                        <h3 className="font-bold text-xl text-red-500 mb-4 flex items-center gap-2"><XCircle/> Problemas comuns</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li>Site antigo, desatualizado ou parado</li>
                            <li>Dificuldade de entender os projetos ou missões</li>
                            <li>Falta de canal direto para contato ou doação</li>
                            <li>Presença tímida ou inexistente no Google</li>
                            <li>Pouco envolvimento da comunidade online</li>
                        </ul>
                    </div>
                    <div className="p-8 bg-black">
                        <h3 className="font-bold text-xl text-green-400 mb-4 flex items-center gap-2"><CheckCircle/> Soluções da Mati Studio</h3>
                         <ul className="space-y-2 text-zinc-300">
                            <li>Design atual, bonito e funcional</li>
                            <li>Estrutura clara e objetiva</li>
                            <li>WhatsApp, formulários e botão de doação integrados</li>
                            <li>SEO local aplicado desde a primeira página</li>
                            <li>Site pensado para inspirar participação e conexão</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Resultados reais que você pode esperar:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Maior envolvimento da comunidade local e online",
                        "Facilidade para receber doações ou apoio logístico",
                        "Clareza sobre a missão e as ações realizadas",
                        "Apoio de pessoas que compartilham seus valores",
                        "Inspiração para novos membros, parceiros ou voluntários",
                        "Presença digital que fortalece o propósito e amplia o alcance",
                    ].map(result => (
                         <div key={result} className="flex items-center gap-4 bg-black p-6 rounded-lg border border-zinc-800">
                            <Star className="w-6 h-6 text-[#FF004D] shrink-0"/>
                            <p className="text-lg text-zinc-300">{result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Portfólio de Sites para Igrejas e Projetos Sociais</h2>
              <p className="text-zinc-400 mt-4">Sites que transmitem fé, propósito e acolhimento</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50 bg-white"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Exemplo de site ${i + 1}`} className="w-full h-auto"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Heart className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Sua igreja ou projeto social já transforma vidas. Agora é hora de transformar sua presença online.</h2>
                <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-10">Vamos criar juntos um site que reforce sua fé, expanda sua ação e mostre ao mundo que propósito também pode ser acessado com um clique.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero um site para minha missão agora
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites estratégicos para igrejas e projetos sociais que querem fortalecer sua presença digital.</p>
        </div>
      </footer>
    </>
  );
}
