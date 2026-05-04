import Link from "next/link"
import { ArrowLeft, Cookie, Settings, BarChart3, Target, Globe, Shield } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function CookiePolicyPage() {
  const sections = [
    {
      icon: Cookie,
      title: "1. O Que São Cookies?",
      content: `Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo (computador, smartphone ou tablet) quando visita um website. São amplamente utilizados para que os sites funcionem de forma eficiente, para melhorar a experiência de navegação e para fornecer informações analíticas aos operadores do site.

Os cookies podem ser "persistentes" — permanecem após fechar o navegador durante um período definido — ou "de sessão" — eliminados automaticamente quando termina a sessão de navegação.`,
    },
    {
      icon: Settings,
      title: "2. Como Utilizamos Cookies",
      content: `O PortugalSitesDeApostas utiliza cookies para os seguintes fins:

• Preservar as suas preferências de navegação e configurações
• Analisar o comportamento dos visitantes para melhorar o site
• Personalizar o conteúdo apresentado com base no seu perfil de uso
• Rastrear cliques em links de parceiros afiliados para efeitos de comissionamento
• Garantir o correto funcionamento de funcionalidades interativas`,
    },
    {
      icon: BarChart3,
      title: "3. Categorias de Cookies Utilizados",
      content: `Cookies Estritamente Necessários
Indispensáveis ao funcionamento técnico do site. Sem eles, serviços essenciais não podem ser prestados. Não requerem consentimento.

Cookies de Desempenho e Análise
Recolhem dados anónimos sobre como os visitantes navegam no site, permitindo-nos identificar erros e melhorar o desempenho.

Cookies de Funcionalidade
Permitem que o site recorde as suas preferências (idioma, região, consentimentos) entre visitas.

Cookies de Marketing e Afiliados
Utilizados para rastrear cliques em links de parceiros e medir a eficácia de campanhas. Podem ser colocados por terceiros.`,
    },
    {
      icon: Globe,
      title: "4. Cookies de Terceiros",
      content: `Para além dos nossos cookies próprios, utilizamos tecnologias de terceiros que podem colocar os seus próprios cookies:

• Google Analytics — análise de tráfego e comportamento de utilizadores
• Redes de Afiliados — rastreamento de cliques e conversões para operadores parceiros
• Plataformas de Publicidade — exibição de anúncios contextuais e medição de campanhas

Estes terceiros têm as suas próprias políticas de privacidade, que recomendamos que consulte.`,
    },
    {
      icon: Target,
      title: "5. Cookies de Afiliados e Transparência Comercial",
      content: `Como comparador de casas de apostas, utilizamos cookies de afiliados para registar quando um utilizador clica num link para um operador parceiro e subsequentemente realiza um registo ou depósito. Estes cookies permitem-nos receber uma comissão comercial.

Esta relação comercial não afeta o preço que paga, as condições do bónus que recebe, nem a nossa avaliação editorial dos operadores. A nossa política de classificação é independente das parcerias comerciais.`,
    },
    {
      icon: Shield,
      title: "6. Gestão e Controlo de Cookies",
      content: `Pode gerir, restringir ou eliminar cookies através das definições do seu navegador:

• Google Chrome: Definições → Privacidade e Segurança → Cookies e outros dados de sites
• Mozilla Firefox: Opções → Privacidade e Segurança → Cookies e dados de sites
• Safari: Preferências → Privacidade → Gerir dados de sites
• Microsoft Edge: Definições → Cookies e permissões do site

Pode igualmente revogar o seu consentimento a qualquer momento através do nosso painel de preferências de cookies.

Atenção: a desativação de determinados cookies pode limitar a funcionalidade de algumas secções do site.

Contacto: cookies@portugalsitesdeapostas.com`,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para PortugalSitesDeApostas
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/20 mb-4">
            <Cookie className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Documento Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 font-serif">
            Política de Cookies
          </h1>
          <p className="text-sm text-gray-500">
            PortugalSitesDeApostas — Última atualização:{" "}
            {new Date().toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <div className="space-y-4">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-white rounded-xl border border-gray-200 hover:border-primary/30 transition-colors overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50">
                <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-4 h-4 text-primary" />
                </div>
                <h2 className="text-sm font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="px-6 py-5 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
