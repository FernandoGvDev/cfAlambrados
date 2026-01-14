import { Ruler, ShieldCheck, MessageCircle, HardHat } from "lucide-react";

export default function AboutCF() {
  return (
    <section className="bg-zinc-100 text-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO + TEXTO */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            CF Cercas e Alambrados
          </h2>

          <p className="text-zinc-700 leading-relaxed">
            A CF é especializada na fabricação e instalação de cercas, alambrados,
            portões e estruturas sob medida. Trabalhamos com foco em resistência,
            funcionalidade e acabamento, sempre respeitando a necessidade de cada
            cliente e o uso real do projeto.
            <br /><br />
            Cada serviço é pensado desde a medição até a instalação final,
            garantindo segurança, durabilidade e um resultado profissional.
          </p>
        </div>

        {/* DIFERENCIAIS */}
        <div>
          <h3 className="text-2xl font-semibold mb-10">
            Por que escolher a CF?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* CARD 1 */}
            <div className="bg-white border border-zinc-200 p-6">
              <Ruler className="text-amber-700 mb-4" size={32} />
              <h4 className="font-semibold mb-2">Sob medida</h4>
              <p className="text-sm text-zinc-600">
                Cada projeto é desenvolvido de acordo com o espaço, o terreno e a
                real necessidade do cliente.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white border border-zinc-200 p-6">
              <ShieldCheck className="text-amber-700 mb-4" size={32} />
              <h4 className="font-semibold mb-2">Material resistente</h4>
              <p className="text-sm text-zinc-600">
                Utilizamos materiais de qualidade, pensados para suportar o uso
                diário, o clima e o tempo.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white border border-zinc-200 p-6">
              <MessageCircle className="text-amber-700 mb-4" size={32} />
              <h4 className="font-semibold mb-2">Atendimento direto</h4>
              <p className="text-sm text-zinc-600">
                Você fala direto com quem entende do serviço, sem intermediários
                e sem enrolação.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="bg-white border border-zinc-200 p-6">
              <HardHat className="text-amber-700 mb-4" size={32} />
              <h4 className="font-semibold mb-2">Experiência prática</h4>
              <p className="text-sm text-zinc-600">
                Conhecimento de campo, instalação profissional e atenção aos
                detalhes em cada etapa.
              </p>
            </div>

          </div>
        </div>

        {/* FRASE FINAL */}
        <div className="mt-16 border-l-4 border-amber-700 pl-6">
          <p className="text-lg font-medium text-zinc-800">
            Mais do que cercar espaços, entregamos segurança e confiança.
          </p>
        </div>

      </div>
    </section>
  );
}
