import Link from "next/link"
import { ArrowLeft, Trophy, Shield, Users, Target, Award, CheckCircle, Globe, BarChart2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/20 mb-5">
              <Trophy className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Sobre Nós</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-5 font-serif text-balance leading-tight">
              O Comparador de Apostas de Referência em Portugal
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Desde 2019 que ajudamos apostadores portugueses a encontrar os melhores operadores licenciados. A
              nossa metodologia é independente, transparente e baseada em testes reais — não em comissões.
            </p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Users, value: "50 000+", label: "Apostadores mensais" },
              { icon: Shield, value: "100%", label: "Operadores SRIJ" },
              { icon: BarChart2, value: "5+ Anos", label: "De experiência" },
              { icon: Target, value: "99%", label: "Precisão editorial" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-black text-gray-900 leading-none">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-white container mx-auto px-4 py-14 md:py-20">
        {/* Mission Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">A Nossa Missão</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 font-serif">
                Informação Imparcial para Decisões Mais Inteligentes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                No PortugalSitesDeApostas, acreditamos que todo o apostador merece acesso a informação clara, honesta
                e atualizada. O mercado português tem dezenas de operadores licenciados e cada um tem pontos fortes e
                fracos distintos.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                A nossa equipa testa pessoalmente cada plataforma — desde o registo até ao levantamento — para que
                possa tomar uma decisão informada antes de depositar o seu dinheiro. Geramos receita através de
                parcerias de afiliados, mas isso nunca influencia as nossas classificações ou avaliações.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  icon: Shield,
                  title: "Transparência Total",
                  desc: "Divulgamos como geramos receita e os critérios exatos que usamos para classificar os operadores.",
                },
                {
                  icon: Target,
                  title: "Independência Editorial",
                  desc: "Nenhum operador pode pagar para melhorar a sua posição. As classificações baseiam-se exclusivamente no desempenho.",
                },
                {
                  icon: Globe,
                  title: "Foco no Mercado PT",
                  desc: "Especializamo-nos em Portugal: regulação SRIJ, métodos de pagamento nacionais e suporte em português.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-8 h-8 rounded bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="max-w-4xl mx-auto mb-16 py-14 border-t border-b border-gray-200">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Os Nossos Pilares</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 font-serif">
            O Que Nos Distingue de Outros Comparadores
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Testes em Primeira Mão",
                description:
                  "Cada membro da equipa cria contas reais, deposita fundos próprios e testa o suporte ao cliente antes de publicar qualquer avaliação.",
                icon: Award,
              },
              {
                title: "Atualização Mensal",
                description:
                  "O mercado muda: bónus expiram, odds evoluem, novas funcionalidades são lançadas. Revisamos todas as avaliações todos os meses.",
                icon: Target,
              },
              {
                title: "Jogo Responsável em Primeiro",
                description:
                  "Incluímos sempre recursos de jogo responsável, limites recomendados e alertas de risco em todas as nossas análises.",
                icon: Users,
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-5 bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <value.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section */}
        <section className="max-w-4xl mx-auto">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Processo de Avaliação</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 font-serif">
            Como Testamos e Classificamos Cada Operador
          </h2>
          <div className="space-y-3">
            {[
              "Verificamos a validade da licença SRIJ diretamente no portal oficial",
              "Registamos uma conta real e passamos pelo processo completo de verificação",
              "Depositamos fundos e testamos todos os métodos de pagamento disponíveis",
              "Avaliamos a profundidade e qualidade dos mercados desportivos oferecidos",
              "Analisamos os bónus, lemos os termos na íntegra e calculamos o valor real",
              "Contactamos o suporte em múltiplos canais e registamos os tempos de resposta",
              "Testamos a versão mobile e/ou aplicação nativa em iOS e Android",
              "Revemos a classificação mensalmente com base em mudanças na plataforma",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="flex-shrink-0 w-7 h-7 rounded bg-primary flex items-center justify-center font-bold text-white text-xs">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-800 flex-1">{item}</p>
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              </div>
            ))}
          </div>
        </section>

        {/* Back to Home */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
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
