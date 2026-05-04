export function BettingInfoSection() {
  const criteria = [
    { label: "Segurança e Licenciamento SRIJ", value: 100 },
    { label: "Variedade de Mercados Desportivos", value: 95 },
    { label: "Qualidade e Competitividade das Odds", value: 90 },
    { label: "Bónus e Condições das Promoções", value: 85 },
    { label: "Experiência Mobile e Aplicação", value: 92 },
  ]

  const cards = [
    {
      title: "Odds Competitivas",
      description:
        "Monitorizamos as odds diariamente e comparamos os valores praticados entre todos os operadores listados para encontrar as melhores cotações disponíveis.",
    },
    {
      title: "Ampla Cobertura de Mercados",
      description:
        "Futebol, ténis, basquetebol, F1, e-sports e muito mais. Avaliamos a profundidade dos mercados em cada casa de apostas.",
    },
    {
      title: "Foco no Mercado Português",
      description:
        "Especializamo-nos em operadores com presença e suporte dedicado para apostadores em Portugal, incluindo métodos de pagamento nacionais.",
    },
    {
      title: "Avaliações com Dados Reais",
      description:
        "Cada pontuação baseia-se em testes práticos realizados pela nossa equipa, complementados por feedback real de utilizadores portugueses.",
    },
  ]

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
      <div className="bg-white rounded-2xl max-w-[1250px] mx-auto px-8 py-12 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Metodologia</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 font-serif text-balance leading-tight">
              Como Avaliamos Cada Casa de Apostas
            </h2>
            <p className="text-gray-500 mb-8 text-base leading-relaxed">
              A nossa equipa de analistas aplica uma grelha de critérios objetivos a cada operador. Testamos
              pessoalmente cada plataforma — desde o registo até ao levantamento — para garantir que as nossas
              avaliações refletem a experiência real do apostador.
            </p>

            <div className="space-y-4">
              {criteria.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <span className="text-sm font-bold text-primary">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-700"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, index) => (
              <div
                key={card.title}
                className={                `p-5 rounded-xl bg-gray-50 border border-gray-100 hover:border-primary/40 hover:bg-gray-100/60 transition-all duration-200 ${
                  index % 2 === 1 ? "sm:mt-6" : ""
                }`}
              >
                <div className="w-8 h-8 rounded bg-primary/8 flex items-center justify-center mb-3">
                  <span className="text-xs font-black text-primary">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{card.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
