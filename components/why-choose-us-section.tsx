import { Shield, Award, Clock, Users, CheckCircle, Zap } from "lucide-react"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Shield,
      title: "Apenas Operadores Licenciados",
      description:
        "Cada casa de apostas listada detém licença válida emitida pelo SRIJ. Nunca recomendamos operadores ilegais ou sem regulação.",
    },
    {
      icon: Award,
      title: "Avaliações Baseadas em Testes Reais",
      description:
        "A nossa equipa cria contas, deposita fundos e testa cada plataforma pessoalmente antes de publicar qualquer avaliação.",
    },
    {
      icon: Clock,
      title: "Informação Atualizada Mensalmente",
      description:
        "Bónus, odds e condições mudam frequentemente. Revisamos todo o conteúdo todos os meses para garantir exatidão.",
    },
    {
      icon: Users,
      title: "Mais de 50 000 Apostadores Mensais",
      description:
        "Somos o comparador de referência para apostadores portugueses. A nossa audiência cresce porque confiamos na verdade.",
    },
    {
      icon: CheckCircle,
      title: "Termos dos Bónus Verificados",
      description:
        "Lemos os termos e condições de cada promoção. Nunca publicamos um bónus sem compreender os requisitos de apostas aplicáveis.",
    },
    {
      icon: Zap,
      title: "Independência Editorial Total",
      description:
        "Nenhum operador paga para aparecer no topo. A posição de cada casa de apostas reflete exclusivamente o desempenho real avaliado.",
    },
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
      <div className="bg-white rounded-2xl max-w-[1250px] mx-auto px-8 py-12 shadow-sm">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Porquê Escolher-nos</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 text-balance font-serif">
            Rigor e Transparência em Cada Avaliação
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            O nosso processo editorial é totalmente independente. Analisamos cada operador com os mesmos critérios
            objetivos, independentemente de parcerias comerciais.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className=              "bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/40 hover:bg-gray-100/60 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
