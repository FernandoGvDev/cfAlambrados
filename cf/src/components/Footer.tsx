import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-300 border-t-4 border-amber-700">

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

        {/* SOBRE */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            CF Cercamentos
          </h3>
          <p className="text-sm leading-relaxed">
            Especialistas em cercas de cuiu, portões de entrada, currais
            e alambrados sob medida. Trabalho feito com resistência,
            segurança e confiança.
          </p>
        </div>

        {/* SERVIÇOS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Serviços</h4>
          <ul className="space-y-2 text-sm">
            <li>Cercas de Cuiu</li>
            <li>Portões e Currais</li>
            <li>Alambrados em Geral</li>
          </ul>
        </div>

        {/* NAVEGAÇÃO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/servicos" className="hover:text-amber-600 transition">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-amber-600 transition">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-amber-600 transition">
                Início
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTATO */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contato</h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} />
              (00) 00000-0000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              contato@cfcercamentos.com.br
            </li>
          </ul>

          <a
            href="https://wa.me/555197119075"
            target="_blank"
            className="
              mt-6 inline-flex items-center gap-2
              bg-green-600 hover:bg-green-700
              px-5 py-3
              font-semibold text-sm text-white
              transition
            "
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} CF Cercamentos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
