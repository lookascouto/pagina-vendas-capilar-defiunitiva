'use client'

import { useState, useEffect } from 'react'
import { Check, Shield, Gift, Clock, AlertCircle, ChevronDown, Sparkles, TrendingUp, Heart, Star } from 'lucide-react'

export default function SalesPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 47,
    seconds: 23
  })

  const [spotsLeft, setSpotsLeft] = useState(47)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [watchTime, setWatchTime] = useState(0)

  // URL do checkout
  const CHECKOUT_URL = "https://pay.cakto.com.br/miz6q55_617941"

  // Timer de 20 minutos (1200 segundos)
  useEffect(() => {
    const watchTimer = setInterval(() => {
      setWatchTime(prev => {
        const newTime = prev + 1
        if (newTime >= 1200) { // 20 minutos = 1200 segundos
          setShowContent(true)
          clearInterval(watchTimer)
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(watchTimer)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => Math.max(prev - 1, 12))
    }, 45000)

    return () => {
      clearInterval(timer)
      clearInterval(spotsTimer)
    }
  }, [])

  // Carregar script do Smartplayer de forma segura
  useEffect(() => {
    if (scriptLoaded) return

    try {
      const script = document.createElement('script')
      script.src = "https://scripts.converteai.net/8436fbfe-5ad0-495f-8b59-30d4e9534fd5/players/68e03a653d769e3f458c438d/v4/player.js"
      script.async = true
      script.onload = () => setScriptLoaded(true)
      script.onerror = () => console.warn('Erro ao carregar script do player')
      document.head.appendChild(script)
    } catch (error) {
      console.warn('Erro ao inicializar player:', error)
    }
  }, [scriptLoaded])

  const handleCheckout = () => {
    window.open(CHECKOUT_URL, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50">
      {/* Barra de Urgência Fixa - Oculta até 20 minutos */}
      {showContent && (
        <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 animate-pulse" />
              <span className="font-bold text-sm sm:text-base">
                Oferta expira em: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold text-sm sm:text-base">
                Apenas {spotsLeft} vagas restantes!
              </span>
            </div>
          </div>
        </div>
      )}

      {/* SEÇÃO 1: ABERTURA DEVASTADORA */}
      <section className={`${showContent ? 'pt-24' : 'pt-12'} pb-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full">
            <span className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              SEGREDO REVELADO PELA PRIMEIRA VEZ
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Você Está Perdendo Seus Cabelos Porque a Indústria Cosmética 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600"> Quer Que Você Perca</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Descubra o <strong>protocolo milenar japonês</strong> que está devolvendo cabelos volumosos e saudáveis para milhares de mulheres em apenas <strong className="text-rose-600">30 dias</strong> — sem shampoos caros, sem tratamentos dolorosos, sem falsas promessas
          </p>

          {/* VSL - Vídeo Smartplayer */}
          <div className="relative w-full max-w-3xl mx-auto mb-8">
            <div id="vsl-container" className="aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <vturb-smartplayer id="vid-68e03a653d769e3f458c438d"></vturb-smartplayer>
            </div>
          </div>

          {/* Botão CTA - Oculto até 20 minutos */}
          {showContent && (
            <>
              <button 
                onClick={handleCheckout}
                className="group relative w-full sm:w-auto px-8 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg sm:text-xl font-bold rounded-2xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  QUERO RECUPERAR MEUS CABELOS AGORA
                  <ChevronDown className="w-6 h-6 animate-bounce" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="mt-4 text-sm text-gray-600">
                ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Resultados comprovados
              </p>
            </>
          )}
        </div>
      </section>

      {/* Restante do conteúdo - Oculto até 20 minutos */}
      {showContent && (
        <>
          {/* SEÇÃO 2: PROBLEMA & CONSPIRAÇÃO */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  A Verdade Que a Indústria de <span className="text-red-500">R$ 47 Bilhões</span> Não Quer Que Você Saiba
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-rose-500 mx-auto"></div>
              </div>

              <div className="space-y-8">
                <div className="bg-gray-800/50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-400">🚨 A Máfia Cosmética Revelada</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Enquanto você gasta fortunas em shampoos "milagrosos", ampolas "revolucionárias" e tratamentos "exclusivos", a indústria cosmética lucra <strong className="text-white">R$ 47 bilhões por ano</strong> mantendo você dependente de produtos que NUNCA vão resolver seu problema de verdade.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Por quê? Porque se você descobrir a solução real, eles perdem uma cliente para sempre.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-rose-900/30 to-red-900/30 p-6 rounded-lg border border-rose-500/30">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">💔 Por Que Seus Tratamentos Param de Funcionar</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Você já percebeu que aquele shampoo que "funcionava" no início para de fazer efeito depois de algumas semanas?
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Isso não é coincidência. É <strong className="text-white">estratégia de mercado</strong>.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Produtos externos tratam apenas os sintomas superficiais, nunca a causa raiz. É como enxugar gelo — você precisa continuar comprando para sempre.
                  </p>
                </div>

                <div className="bg-amber-900/20 border-2 border-amber-500 p-8 rounded-xl text-center">
                  <div className="text-6xl sm:text-7xl font-black text-amber-400 mb-4">89%</div>
                  <p className="text-xl sm:text-2xl font-bold mb-3">
                    Das mulheres com queda capilar têm deficiências nutricionais específicas
                  </p>
                  <p className="text-gray-300 text-lg">
                    Mas nenhum shampoo vai corrigir isso. Você precisa atacar o problema pela raiz — literalmente.
                  </p>
                </div>

                <div className="text-center pt-6">
                  <p className="text-2xl sm:text-3xl font-bold text-rose-400 mb-4">
                    Está na hora de você parar de ser refém dessa indústria.
                  </p>
                  <p className="text-xl text-gray-300">
                    E começar a tratar seus cabelos de dentro para fora, do jeito que a natureza planejou.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEÇÃO 3: HISTÓRIA PESSOAL DEVASTADORA */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  "Eu Gastei R$ 8.500 em 6 Meses e Meus Cabelos Só Pioravam..."
                </h2>
                <p className="text-xl text-gray-600">A história de Ana Paula que mudou tudo</p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-lg mb-8">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <strong className="text-rose-700">Ana Paula, 35 anos, nutricionista especializada.</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Irônico, não é? Eu ajudava dezenas de pessoas a transformarem suas vidas através da alimentação, mas quando se tratava dos meus próprios cabelos, eu estava completamente perdida.
                  </p>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="leading-relaxed">
                    Tudo começou após a gravidez da minha filha Sofia. O que deveria ser o momento mais feliz da minha vida se transformou em um pesadelo silencioso que eu escondia de todos.
                  </p>

                  <p className="leading-relaxed">
                    <strong className="text-gray-900">A queda começou devagar.</strong> Alguns fios a mais no travesseiro. Depois no ralo do chuveiro. Até que um dia, ao passar a mão no cabelo, um punhado inteiro ficou na minha mão.
                  </p>

                  <p className="leading-relaxed">
                    Entrei em pânico.
                  </p>

                  <div className="bg-gray-100 p-6 rounded-lg my-8">
                    <p className="text-lg font-semibold text-gray-900 mb-4">
                      Nos 6 meses seguintes, eu tentei TUDO:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li>✗ Shampoos importados de R$ 280 cada</li>
                      <li>✗ Ampolas "milagrosas" de R$ 450 a caixa</li>
                      <li>✗ Tratamentos em clínicas de R$ 1.200 por sessão</li>
                      <li>✗ Suplementos caríssimos que não faziam nada</li>
                      <li>✗ Laser capilar de R$ 3.500</li>
                    </ul>
                    <p className="text-2xl font-bold text-red-600 mt-6">
                      Total gasto: R$ 8.500
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                      Resultado: NADA. Meus cabelos continuavam caindo.
                    </p>
                  </div>

                  <p className="leading-relaxed">
                    O pior momento foi no aniversário de 3 anos da Sofia. Eu estava arrumando o cabelo dela — aqueles cachinhos perfeitos e volumosos — quando ela me olhou pelo espelho e perguntou:
                  </p>

                  <blockquote className="border-l-4 border-rose-500 pl-6 py-4 my-8 bg-rose-50 rounded-r-lg">
                    <p className="text-xl italic text-gray-800">
                      "Mamãe, por que seu cabelo é tão fininho? O meu é mais bonito que o seu?"
                    </p>
                  </blockquote>

                  <p className="leading-relaxed">
                    <strong className="text-gray-900">Meu coração partiu.</strong> Não pela pergunta inocente dela, mas porque eu percebi: eu estava me escondendo. Evitando espelhos. Usando lenços. Cancelando compromissos. Perdendo minha identidade.
                  </p>

                  <p className="leading-relaxed">
                    Naquela noite, chorei até dormir. Eu era uma NUTRICIONISTA. Como eu não conseguia resolver isso?
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-500 p-8 rounded-xl my-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      🌟 A Virada
                    </h3>
                    <p className="leading-relaxed mb-4">
                      Foi quando minha mentora, <strong>Dra. Beatriz Santos</strong>, especialista em nutrição funcional que havia estudado no Japão, me chamou para um café.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Ela olhou para mim e disse algo que mudou tudo:
                    </p>
                    <blockquote className="text-lg italic text-gray-700 border-l-4 border-green-500 pl-4">
                      "Ana, você está tratando o cabelo por fora. Mas o problema está no sangue, nas células, nos nutrientes que não estão chegando aos folículos. Existe um protocolo japonês milenar que trabalha a sinalização folicular de dentro para fora."
                    </blockquote>
                  </div>

                  <p className="leading-relaxed">
                    Ela me passou o <strong className="text-rose-600">Protocolo de Sinalização Folicular</strong> — um método baseado em alimentos estratégicos que "resetam" o sistema capilar.
                  </p>

                  <p className="leading-relaxed text-xl font-semibold text-gray-900">
                    Em 30 dias, a queda reduziu 70%.
                  </p>

                  <p className="leading-relaxed text-xl font-semibold text-gray-900">
                    Em 60 dias, eu via fios novos nascendo.
                  </p>

                  <p className="leading-relaxed text-xl font-semibold text-gray-900">
                    Em 90 dias, meu cabelo estava mais volumoso e saudável do que antes da gravidez.
                  </p>

                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-xl my-8 text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Hoje, 2 anos depois...
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Eu não só recuperei meus cabelos, como ajudei <strong className="text-rose-600">mais de 4.247 mulheres</strong> a fazerem o mesmo. Mulheres que estavam onde eu estava. Desesperadas. Gastando fortunas. Perdendo a esperança.
                    </p>
                  </div>

                  <p className="leading-relaxed text-center text-xl font-semibold text-gray-900">
                    E agora, eu quero ajudar VOCÊ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEÇÃO 4: MECANISMO CIENTÍFICO */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-indigo-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full mb-6">
                  <span className="font-bold text-sm">CIÊNCIA COMPROVADA</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  O Protocolo de Sinalização Folicular
                </h2>
                <p className="text-xl text-gray-600">
                  Como funciona a ciência por trás da transformação
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    O Fenômeno RCF (Reativação Capilar por Feedbacks)
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Seus folículos capilares não estão "mortos" — eles estão em <strong>modo de hibernação</strong> por falta de sinalizadores nutricionais específicos.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    É como um computador travado. Você não precisa comprar um novo — você precisa <strong className="text-blue-600">resetar o sistema operacional</strong>.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-rose-500">
                    <div className="text-4xl font-bold text-rose-500 mb-3">1</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Nutrição Estratégica</h4>
                    <p className="text-gray-600 text-sm">
                      Alimentos específicos enviam sinais bioquímicos para reativar folículos dormentes
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                    <div className="text-4xl font-bold text-blue-500 mb-3">2</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Sinalização Celular</h4>
                    <p className="text-gray-600 text-sm">
                      Proteínas e micronutrientes ativam genes responsáveis pelo crescimento capilar
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                    <div className="text-4xl font-bold text-green-500 mb-3">3</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Regeneração Folicular</h4>
                    <p className="text-gray-600 text-sm">
                      Folículos voltam ao ciclo de crescimento ativo, produzindo fios fortes e saudáveis
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4">🔬 O Diferencial Científico</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Produtos Externos (Shampoos, Ampolas)</h4>
                        <p className="text-blue-100">
                          Tratam apenas a superfície. Efeito temporário. Dependência eterna.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Protocolo de Sinalização Folicular</h4>
                        <p className="text-blue-100">
                          Ataca a causa raiz. Resultados permanentes. Liberdade total.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    Pense assim:
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Você não conserta um carro com problemas no motor lavando a lataria. Você precisa abrir o capô e <strong className="text-blue-600">consertar o motor</strong>.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed mt-4">
                    Seus cabelos são iguais. O "motor" são os folículos. E eles precisam de <strong className="text-rose-600">combustível nutricional específico</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SEÇÃO 5: APRESENTAÇÃO DA SOLUÇÃO */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Apresentando o <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">Protocolo Capilar Completo</span>
                </h2>
                <p className="text-xl text-gray-600">
                  45 receitas estratégicas para transformar seus cabelos em 90 dias
                </p>
              </div>

              <div className="space-y-8">
                {/* Módulo 1 */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-amber-500">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                      <span className="bg-white text-amber-600 w-10 h-10 rounded-full flex items-center justify-center font-black">1</span>
                      15 Cafés da Manhã Fortificantes
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Comece o dia ativando a sinalização folicular com receitas ricas em biotina, colágeno e proteínas de alta absorção.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🥤 Smoothies Poderosos</h4>
                        <p className="text-sm text-gray-600">
                          Combinações de frutas vermelhas, colágeno e sementes que ativam o crescimento capilar
                        </p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🥣 Mingaus Energéticos</h4>
                        <p className="text-sm text-gray-600">
                          Aveia, chia e superalimentos que nutrem profundamente os folículos
                        </p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🍳 Omeletes Proteicas</h4>
                        <p className="text-sm text-gray-600">
                          Proteínas de alta qualidade para construção de fios fortes e resistentes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Módulo 2 */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-green-500">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                      <span className="bg-white text-green-600 w-10 h-10 rounded-full flex items-center justify-center font-black">2</span>
                      15 Almoços Estratégicos
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Refeições completas que fornecem ferro, zinco e vitaminas essenciais para manter a sinalização ativa durante todo o dia.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🥗 Saladas Completas</h4>
                        <p className="text-sm text-gray-600">
                          Combinações ricas em ferro e zinco que combatem a queda pela raiz
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🍲 Pratos Únicos</h4>
                        <p className="text-sm text-gray-600">
                          Refeições balanceadas com todos os macros e micros necessários
                        </p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🌱 Opções Vegetarianas</h4>
                        <p className="text-sm text-gray-600">
                          Proteínas vegetais de alto valor biológico para todos os estilos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Módulo 3 */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-indigo-500">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                      <span className="bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-black">3</span>
                      15 Jantares Reparadores
                    </h3>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      Receitas noturnas que maximizam a absorção e regeneração folicular durante o sono — quando a mágica acontece.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🍜 Sopas Nutritivas</h4>
                        <p className="text-sm text-gray-600">
                          Caldos ricos em colágeno e minerais para absorção noturna otimizada
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🍗 Proteínas Magras</h4>
                        <p className="text-sm text-gray-600">
                          Carnes e peixes com vegetais antioxidantes para regeneração celular
                        </p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🥘 Anti-Inflamatórios</h4>
                        <p className="text-sm text-gray-600">
                          Receitas que reduzem inflamação e aceleram recuperação folicular
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8">
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  ✨ Todas as receitas são:
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-bold text-rose-600">⏱️ Rápidas</p>
                    <p className="text-sm text-gray-600">15-30 minutos</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-bold text-rose-600">💰 Econômicas</p>
                    <p className="text-sm text-gray-600">Ingredientes acessíveis</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-bold text-rose-600">😋 Deliciosas</p>
                    <p className="text-sm text-gray-600">Sabor incrível</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <p className="font-bold text-rose-600">🎯 Estratégicas</p>
                    <p className="text-sm text-gray-600">Cientificamente formuladas</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEÇÃO 6: BÔNUS IRRESISTÍVEIS */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-yellow-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  🎁 Bônus Exclusivos Que Valem Mais Que o Produto Principal
                </h2>
                <p className="text-xl text-gray-600">
                  Você recebe TUDO isso hoje, sem pagar nada a mais
                </p>
              </div>

              <div className="space-y-6">
                {/* Bônus 1 */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-amber-400">
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-8 flex items-center justify-center sm:w-1/3">
                      <div className="text-center text-white">
                        <Gift className="w-16 h-16 mx-auto mb-3" />
                        <p className="text-3xl font-black">BÔNUS #1</p>
                        <p className="text-xl font-bold mt-2">Valor: R$ 47</p>
                      </div>
                    </div>
                    <div className="p-8 sm:w-2/3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Guia de Substituições Inteligentes
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Não gosta de algum ingrediente? Sem problemas! Este guia mostra exatamente como substituir qualquer alimento mantendo os mesmos benefícios capilares.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Alternativas para intolerâncias e alergias</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Opções vegetarianas e veganas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Ingredientes regionais e acessíveis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bônus 2 */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-400">
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-8 flex items-center justify-center sm:w-1/3">
                      <div className="text-center text-white">
                        <Gift className="w-16 h-16 mx-auto mb-3" />
                        <p className="text-3xl font-black">BÔNUS #2</p>
                        <p className="text-xl font-bold mt-2">Valor: R$ 67</p>
                      </div>
                    </div>
                    <div className="p-8 sm:w-2/3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Cronograma de 90 Dias de Transformação
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Planejamento dia a dia do que comer em cada refeição. Você não precisa pensar — apenas seguir o cronograma e ver os resultados acontecerem.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Plano completo de 90 dias passo a passo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Lista de compras semanal pronta</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Marcos de progresso para acompanhar evolução</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bônus 3 */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-red-400">
                  <div className="flex flex-col sm:flex-row">
                    <div className="bg-gradient-to-br from-red-400 to-rose-500 p-8 flex items-center justify-center sm:w-1/3">
                      <div className="text-center text-white">
                        <Gift className="w-16 h-16 mx-auto mb-3" />
                        <p className="text-3xl font-black">BÔNUS #3</p>
                        <p className="text-xl font-bold mt-2">Valor: R$ 37</p>
                      </div>
                    </div>
                    <div className="p-8 sm:w-2/3">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        SOS Queda Capilar - Receitas de Emergência
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Para aqueles dias em que a queda está mais intensa. Receitas de ação rápida que reduzem a queda em 24-48 horas.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Smoothies de emergência ultra-concentrados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Protocolo intensivo de 3 dias</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Suplementação estratégica para crises</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-8 border-2 border-amber-400">
                <p className="text-3xl font-black text-gray-900 mb-4">
                  Valor Total dos Bônus: <span className="text-amber-600">R$ 151</span>
                </p>
                <p className="text-xl text-gray-700">
                  Mas você recebe TUDO isso de graça ao garantir sua vaga hoje!
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 7: DEPOIMENTOS PODEROSOS */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  O Que Mulheres Como Você Estão Dizendo
                </h2>
                <p className="text-xl text-gray-600">
                  Mais de 4.247 transformações reais e comprovadas
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Depoimento 1 */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg border-l-4 border-rose-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-xl">
                      M
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Marina Silva</p>
                      <p className="text-sm text-gray-600">34 anos • São Paulo</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Em 2 meses meu cabelo ficou igual ao da época que conheci meu marido. Ele até comentou que eu estava mais bonita. Não é só o cabelo — é a confiança que voltou!"
                  </p>
                </div>

                {/* Depoimento 2 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      J
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Juliana Costa</p>
                      <p className="text-sm text-gray-600">29 anos • Rio de Janeiro</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Economizo R$ 400 por mês que gastava em produtos caros que não funcionavam. Agora invisto em comida de verdade e os resultados são 10x melhores!"
                  </p>
                </div>

                {/* Depoimento 3 */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xl">
                      C
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Carla Mendes</p>
                      <p className="text-sm text-gray-600">38 anos • Belo Horizonte</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Descobri que não era genético como pensava. Era só deficiência nutricional! Minha mãe também começou o protocolo e está tendo resultados incríveis aos 62 anos."
                  </p>
                </div>

                {/* Depoimento 4 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl">
                      R
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Roberta Alves</p>
                      <p className="text-sm text-gray-600">31 anos • Curitiba</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Em 45 dias já via fios novos nascendo na linha da frente. Meu cabeleireiro ficou impressionado e pediu o método para indicar para outras clientes!"
                  </p>
                </div>

                {/* Depoimento 5 */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border-l-4 border-amber-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xl">
                      P
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Patricia Santos</p>
                      <p className="text-sm text-gray-600">27 anos • Brasília</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Resultado em 30 dias como prometido! A queda reduziu drasticamente e meu cabelo está mais forte. Finalmente algo que funciona de verdade."
                  </p>
                </div>

                {/* Depoimento 6 */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg border-l-4 border-teal-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
                      F
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Fernanda Lima</p>
                      <p className="text-sm text-gray-600">33 anos • Porto Alegre</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    "Investimento que mais valeu a pena na minha vida. Não é só sobre cabelo — é sobre autoestima, confiança e se sentir mulher de novo. Gratidão eterna!"
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8">
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  ⭐ Taxa de Satisfação: 97,3%
                </p>
                <p className="text-lg text-gray-700">
                  De 4.247 mulheres que seguiram o protocolo, 4.133 relataram resultados visíveis em até 60 dias
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 8: BENEFÍCIOS TRANSFORMACIONAIS */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-pink-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  O Que Você Vai Conquistar Com Este Protocolo
                </h2>
                <p className="text-xl text-gray-600">
                  Muito mais do que cabelos — uma transformação completa
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Pare o Pânico Matinal</h3>
                      <p className="text-gray-600">
                        Acorde sem medo de olhar o travesseiro. Sem mais fios no ralo. Sem mais angústia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Recupere Sua Feminilidade</h3>
                      <p className="text-gray-600">
                        Sinta-se mulher de novo. Confiante. Bonita. Poderosa. Como você merece.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Economize Milhares de Reais</h3>
                      <p className="text-gray-600">
                        Pare de gastar fortunas em produtos que não funcionam. Invista em solução definitiva.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Tenha Praticidade na Rotina</h3>
                      <p className="text-gray-600">
                        Receitas rápidas de 15-30 minutos. Ingredientes simples. Sem complicação.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Seja Exemplo Para Suas Filhas</h3>
                      <p className="text-gray-600">
                        Ensine suas filhas a cuidarem da saúde de dentro para fora. Legado de beleza natural.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Conquiste Cabelos Dignos de Elogios</h3>
                      <p className="text-gray-600">
                        Receba elogios genuínos. Seja perguntada "qual seu segredo?". Inspire outras mulheres.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Fortaleça Unhas e Pele Simultaneamente</h3>
                      <p className="text-gray-600">
                        Bônus inesperado: unhas mais fortes, pele mais luminosa. Beleza de dentro para fora.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">Tenha Liberdade Total</h3>
                      <p className="text-gray-600">
                        Liberdade de sair sem preocupação. De tirar fotos. De viver plenamente. Sem vergonha.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8">
                <Heart className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  Não é só sobre cabelo...
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  É sobre você se olhar no espelho e <strong>gostar do que vê</strong>. É sobre recuperar sua autoestima, sua confiança, sua essência. É sobre se sentir VOCÊ de novo.
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 9: OFERTA IRRESISTÍVEL */}
          <section id="oferta" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block px-6 py-3 bg-red-600 rounded-full mb-6 animate-pulse">
                  <span className="font-bold text-lg">⚡ OFERTA RELÂMPAGO - EXPIRA EM HORAS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Quanto Vale Sua Autoestima?
                </h2>
                <p className="text-xl text-gray-300">
                  Você está a um clique de transformar seus cabelos para sempre
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl p-8 sm:p-12 shadow-2xl">
                <div className="text-center mb-8">
                  <p className="text-lg text-rose-100 mb-4">Valor Real do Pacote Completo:</p>
                  <div className="space-y-3 text-left max-w-md mx-auto">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Protocolo Capilar Completo (45 receitas)</span>
                      <span className="font-bold text-white">R$ 497</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Bônus #1: Guia de Substituições</span>
                      <span className="font-bold text-white">R$ 47</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Bônus #2: Cronograma 90 Dias</span>
                      <span className="font-bold text-white">R$ 67</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white">Bônus #3: SOS Queda Capilar</span>
                      <span className="font-bold text-white">R$ 37</span>
                    </div>
                    <div className="border-t-2 border-white/30 pt-3 mt-3">
                      <div className="flex justify-between items-center text-xl">
                        <span className="font-bold text-white">VALOR TOTAL:</span>
                        <span className="font-black text-2xl text-white">R$ 648</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-2xl text-white mb-2">Mas hoje você NÃO vai pagar R$ 648...</p>
                  <p className="text-2xl text-white mb-2">Nem R$ 347...</p>
                  <p className="text-2xl text-white mb-6">Nem mesmo R$ 197...</p>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-6">
                    <p className="text-lg text-rose-100 mb-3">Seu investimento hoje:</p>
                    <div className="text-7xl sm:text-8xl font-black text-white mb-4">
                      R$ 97
                    </div>
                    <p className="text-xl text-rose-100 mb-4">ou 12x de</p>
                    <div className="text-5xl font-black text-white mb-4">
                      R$ 11,28
                    </div>
                    <p className="text-lg text-rose-100">
                      Menos que um lanche por mês para transformar seus cabelos para sempre
                    </p>
                  </div>

                  <div className="bg-amber-400 text-gray-900 rounded-xl p-6 mb-8">
                    <p className="text-2xl font-bold mb-2">🎁 BÔNUS ESPECIAL DE HOJE</p>
                    <p className="text-lg">
                      Garanta agora e receba acesso vitalício + todas as atualizações futuras GRÁTIS
                    </p>
                  </div>

                  <button 
                    onClick={handleCheckout}
                    className="w-full py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl sm:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 mb-6"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Sparkles className="w-8 h-8" />
                      SIM! QUERO TRANSFORMAR MEUS CABELOS AGORA
                      <Sparkles className="w-8 h-8" />
                    </span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-rose-100">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      <span>Pagamento 100% Seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      <span>Acesso Imediato</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>Garantia de 7 Dias</span>
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-white/30 pt-8">
                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-4xl font-black text-white mb-2">{spotsLeft}</div>
                      <p className="text-sm text-rose-100">Vagas Restantes</p>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-white mb-2">
                        {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <p className="text-sm text-rose-100">Tempo Restante</p>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-white mb-2">4.247</div>
                      <p className="text-sm text-rose-100">Mulheres Transformadas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-red-400 text-lg font-bold mb-2">
                  ⚠️ ATENÇÃO: Após 23:59 de hoje, o preço volta para R$ 347
                </p>
                <p className="text-gray-400">
                  Próxima disponibilidade apenas em 2026
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 10: GARANTIA TRIPLA BLINDADA */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-emerald-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  🛡️ Garantia Tripla Blindada
                </h2>
                <p className="text-xl text-gray-600">
                  Você não corre NENHUM risco. Todo o risco é meu.
                </p>
              </div>

              <div className="space-y-6">
                {/* Garantia 1 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Garantia #1: Resultados em 7 Dias ou Dinheiro de Volta
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Se em 7 dias você não perceber redução na queda capilar, eu devolvo 100% do seu dinheiro. Sem perguntas. Sem burocracia. Você simplesmente envia um email e recebe o reembolso completo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Garantia 2 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Garantia #2: Praticidade Garantida ou Reembolso
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Se você achar as receitas complicadas ou difíceis de fazer, eu devolvo seu dinheiro. Eu prometo praticidade, e se não entregar, você não paga nada.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Garantia 3 */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Garantia #3: Satisfação Total em 7 Dias
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Por QUALQUER motivo — mesmo que você simplesmente mude de ideia — você tem 7 dias para pedir reembolso total. Sem justificativas necessárias.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Por Que Eu Ofereço Essa Garantia Absurda?
                </h3>
                <p className="text-xl leading-relaxed mb-6">
                  Porque eu SEI que funciona. Eu vi 4.247 mulheres transformarem seus cabelos com este protocolo. Eu tenho tanta certeza dos resultados que assumo TODO o risco para você.
                </p>
                <p className="text-2xl font-bold">
                  Você só tem a ganhar. Literalmente ZERO risco.
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 11: URGÊNCIA DEVASTADORA */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-900 to-black text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <AlertCircle className="w-20 h-20 text-red-500 mx-auto mb-6 animate-pulse" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  ⏰ Esta Oferta Expira em Horas
                </h2>
                <p className="text-xl text-gray-300">
                  E não é marketing. É real. Veja por quê:
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-red-900/50 border-2 border-red-500 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Clock className="w-8 h-8 text-red-400" />
                    Oferta Válida Até 23:59 de Hoje
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Após a meia-noite, o preço volta automaticamente para R$ 347. Não é uma ameaça — é como o sistema está programado.
                  </p>
                  <div className="bg-black/50 rounded-xl p-6 text-center">
                    <p className="text-lg text-gray-400 mb-3">Tempo restante para esta oferta:</p>
                    <div className="text-5xl font-black text-red-400">
                      {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                <div className="bg-amber-900/50 border-2 border-amber-500 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-amber-400" />
                    Apenas {spotsLeft} Vagas Restantes
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Eu limito as vagas para garantir que consigo dar suporte de qualidade para todas. Quando as {spotsLeft} vagas acabarem, a página sai do ar.
                  </p>
                  <div className="bg-black/50 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400">Vagas preenchidas</span>
                      <span className="text-amber-400 font-bold">{100 - spotsLeft} de 100</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                      <div 
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-4 rounded-full transition-all duration-1000"
                        style={{ width: `${100 - spotsLeft}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/50 border-2 border-purple-500 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-purple-400" />
                    Próxima Disponibilidade Só em 2026
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Eu abro turmas apenas 2 vezes por ano para garantir qualidade no suporte. Se você perder esta, a próxima oportunidade será apenas em janeiro de 2026. Você quer esperar mais 6 meses perdendo cabelo?
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl p-8">
                <p className="text-3xl font-bold mb-4">
                  Cada Segundo Que Passa...
                </p>
                <p className="text-xl text-gray-100 leading-relaxed">
                  ...é mais um fio que você perde. Mais um dia de angústia. Mais um momento de baixa autoestima. Você realmente quer continuar assim?
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 12: CROSSROADS FINAL */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Você Está em Uma Encruzilhada
                </h2>
                <p className="text-xl text-gray-600">
                  Dois caminhos. Uma escolha. Seu futuro depende dela.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Caminho 1 - Negativo */}
                <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl p-8 border-4 border-gray-400">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">😔</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Caminho 1: Continuar Como Está
                    </h3>
                    <p className="text-gray-600">Fechar esta página e não fazer nada</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✗</span>
                      </div>
                      <p className="text-gray-700">
                        Acordar todos os dias com pânico ao ver fios no travesseiro
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✗</span>
                      </div>
                      <p className="text-gray-700">
                        Continuar gastando R$ 300-500 por mês em produtos que não funcionam
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✗</span>
                      </div>
                      <p className="text-gray-700">
                        Evitar espelhos, fotos e situações sociais
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✗</span>
                      </div>
                      <p className="text-gray-700">
                        Ver sua autoestima desmoronar dia após dia
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✗</span>
                      </div>
                      <p className="text-gray-700">
                        Sentir que está perdendo sua feminilidade e identidade
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✗</span>
                      </div>
                      <p className="text-gray-700">
                        Continuar refém da indústria cosmética que lucra com seu sofrimento
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✗</span>
                      </div>
                      <p className="text-gray-700">
                        Daqui a 6 meses, estar no mesmo lugar (ou pior)
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gray-300 rounded-xl text-center">
                    <p className="text-lg font-bold text-gray-900">
                      Resultado em 6 meses:
                    </p>
                    <p className="text-2xl font-black text-red-600 mt-2">
                      Mais R$ 3.000 gastos + Cabelos piores + Autoestima destruída
                    </p>
                  </div>
                </div>

                {/* Caminho 2 - Positivo */}
                <div className="bg-gradient-to-b from-green-50 to-emerald-100 rounded-2xl p-8 border-4 border-green-500 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-amber-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm">
                      ⭐ CAMINHO RECOMENDADO
                    </div>
                  </div>

                  <div className="text-center mb-6 mt-4">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🌟</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Caminho 2: Transformação Agora
                    </h3>
                    <p className="text-gray-700">Garantir sua vaga e começar hoje</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">
                        Em 7 dias: Redução visível na queda capilar
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">
                        Em 30 dias: Cabelos visivelmente mais fortes e volumosos
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">
                        Em 60 dias: Fios novos nascendo, densidade aumentando
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">
                        Em 90 dias: Transformação completa, cabelos saudáveis
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">
                        Autoestima renovada, confiança restaurada
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">
                        Liberdade da indústria cosmética para sempre
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-800 font-medium">
                        Economia de milhares de reais em produtos inúteis
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-green-500 rounded-xl text-center">
                    <p className="text-lg font-bold text-white">
                      Resultado em 6 meses:
                    </p>
                    <p className="text-2xl font-black text-white mt-2">
                      Apenas R$ 97 investidos + Cabelos transformados + Autoestima nas alturas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8">
                <p className="text-3xl font-bold text-gray-900 mb-4">
                  A Escolha É Sua
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Mas lembre-se: <strong>não escolher também é uma escolha</strong>. E essa escolha tem consequências. Daqui a 6 meses, você vai olhar para trás e pensar "por que eu não fiz isso antes?" ou "que bom que eu tomei essa decisão".
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 13: CTA FINAL DEVASTADOR */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-rose-900 to-black text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Sparkles className="w-20 h-20 text-amber-400 mx-auto mb-6 animate-pulse" />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  É Agora ou Nunca
                </h2>
                <p className="text-2xl text-gray-300 mb-8">
                  Sua transformação começa com um clique
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-600 to-pink-600 rounded-3xl p-8 sm:p-12 shadow-2xl mb-12">
                <div className="text-center mb-8">
                  <p className="text-xl text-rose-100 mb-4">Recapitulando o que você recebe HOJE:</p>
                  
                  <div className="space-y-3 text-left max-w-2xl mx-auto mb-8">
                    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Protocolo Capilar Completo</p>
                        <p className="text-sm text-rose-100">45 receitas estratégicas para 90 dias de transformação</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Bônus #1: Guia de Substituições (R$ 47)</p>
                        <p className="text-sm text-rose-100">Adapte qualquer receita às suas preferências</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Bônus #2: Cronograma 90 Dias (R$ 67)</p>
                        <p className="text-sm text-rose-100">Planejamento completo dia a dia</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Bônus #3: SOS Queda Capilar (R$ 37)</p>
                        <p className="text-sm text-rose-100">Receitas de emergência para crises</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Garantia Tripla Blindada</p>
                        <p className="text-sm text-rose-100">7 dias para testar sem risco algum</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Acesso Vitalício</p>
                        <p className="text-sm text-rose-100">Todas as atualizações futuras grátis</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 bg-white/10 p-4 rounded-lg">
                      <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white">Suporte Prioritário</p>
                        <p className="text-sm text-rose-100">Tire suas dúvidas quando precisar</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                    <p className="text-lg text-rose-100 mb-3">De R$ 648 por apenas:</p>
                    <div className="text-7xl sm:text-8xl font-black text-white mb-4">
                      R$ 97
                    </div>
                    <p className="text-xl text-rose-100 mb-4">ou 12x de R$ 11,28</p>
                    <p className="text-lg text-rose-100">
                      💳 Menos que um lanche por mês
                    </p>
                  </div>

                  <button 
                    onClick={handleCheckout}
                    className="w-full py-6 sm:py-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl sm:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 mb-6 animate-pulse"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Sparkles className="w-8 h-8" />
                      QUERO MEUS CABELOS FORTES E SAUDÁVEIS AGORA
                      <Sparkles className="w-8 h-8" />
                    </span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-rose-100 mb-6">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      <span>Pagamento 100% Seguro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5" />
                      <span>Acesso Imediato</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <span>Garantia de 7 Dias</span>
                    </div>
                  </div>

                  <div className="border-t-2 border-white/30 pt-6">
                    <p className="text-red-300 text-lg font-bold mb-2">
                      ⚠️ ÚLTIMOS {spotsLeft} LUGARES DISPONÍVEIS
                    </p>
                    <p className="text-rose-100 text-sm">
                      Oferta expira em: {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-6">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8">
                  <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    🎯 4.247 Mulheres Já Transformaram Seus Cabelos
                  </p>
                  <p className="text-xl text-white">
                    Você será a próxima?
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <p className="text-xl text-gray-300 leading-relaxed mb-4">
                    Imagine daqui a 90 dias...
                  </p>
                  <p className="text-2xl font-bold text-white leading-relaxed">
                    Você acordando sem medo. Passando a mão no cabelo e sentindo volume. Recebendo elogios. Se olhando no espelho e <span className="text-green-400">GOSTANDO</span> do que vê.
                  </p>
                  <p className="text-xl text-gray-300 leading-relaxed mt-6">
                    Isso não é um sonho. É o que vai acontecer se você tomar a decisão certa AGORA.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8">
                  <p className="text-3xl font-bold text-white mb-4">
                    Sua Autoestima Não Pode Esperar
                  </p>
                  <p className="text-xl text-rose-100">
                    Cada dia que passa é um dia a menos de você se sentindo confiante e bonita. Não deixe para amanhã a transformação que você pode começar HOJE.
                  </p>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full py-6 sm:py-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xl sm:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Heart className="w-8 h-8" />
                    SIM! QUERO TRANSFORMAR MINHA VIDA AGORA
                    <Heart className="w-8 h-8" />
                  </span>
                </button>

                <p className="text-gray-400 text-sm">
                  © 2024 Protocolo Capilar Completo. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
