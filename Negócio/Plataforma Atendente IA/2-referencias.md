# Referências: plataformas de atendente de IA
Data da pesquisa: 2026-10-02

Nota de método: nesta sessão o acesso direto aos sites (WebFetch) foi bloqueado pelo proxy de rede para todos os domínios tentados (dialzara.com, whatsappbusiness.com, intercom.com, tidio.com, zaia.app, gptmaker.ai, clint.digital, developers.facebook.com, twilio.com e sites de review). Tudo abaixo veio de buscas na web (resumos de páginas oficiais e de terceiros, com URL). Quando o número veio só de fonte terceira ou de uma única fonte, está marcado "não confirmado". Vale reabrir as páginas oficiais antes de usar qualquer número em material de venda.

## 1. Dialzara (recepcionista de IA por voz, EUA)

O que faz: atende o telefone do pequeno negócio 24 horas com uma voz de IA. Cumprimenta, responde perguntas frequentes, anota recado, agenda horário e transfere a ligação. O negócio ganha um número dedicado (local ou toll-free) e redireciona o número atual para ele: em tempo integral, só fora do horário ou só quando ninguém atende (overflow).

Como configuram a recepcionista:
- Cadastro em 3 passos. O dono informa o site e a plataforma varre o site para treinar a IA com serviços, horários e perguntas frequentes. Também aceita documentos enviados e texto digitado.
- O "prompt" (instruções) é editável pelo próprio dono em todos os planos.
- Perguntas de triagem personalizáveis ("qual seu nome", "qual o serviço", "qual o bairro") que a IA faz em toda ligação.
- 30+ vozes e 10+ idiomas (inglês, espanhol, português, francês etc.). Um reviewer relatou que a IA se recusou a responder em espanhol apesar do anúncio, então o multilíngue é "não confirmado" na prática.

O que ela faz na ligação:
- Anota recado com as respostas das perguntas de triagem.
- Agenda direto na agenda do dono (Google Calendar e Outlook), checando disponibilidade ao vivo para evitar conflito.
- Transfere: transferência cega (passa direto) em todos os planos; transferência quente (a IA explica o caso ao humano antes de conectar) só a partir do plano Pro.
- Filtra spam e ligações de robô.
- Depois de cada ligação manda ao dono e-mail e/ou SMS com resumo (o que o cliente queria, contato, respostas da triagem) mais link da gravação e da transcrição.

Integrações: CRMs populares nativos, mais Zapier, Make e webhooks (a partir do Pro). Isso é o que permite jogar o recado em planilha, CRM ou WhatsApp do dono.

Modelo de cobrança (em dólar, mensal, sem contrato, teste grátis de 7 dias):

| Plano | Preço/mês | Minutos inclusos | Excedente/min |
|---|---|---|---|
| Business Lite | US$ 29 | 60 | US$ 0,48 |
| Business Pro | US$ 99 | 220 | US$ 0,45 |
| Business Plus | US$ 199 | 500 | US$ 0,40 |
| Business Elite | US$ 349 | 1.000 | US$ 0,35 |

Como lidam com minutos: cobram por minuto falado, contado por segundo (sem arredondar para cima); minutos comprados a mais não vencem (não confirmado, fonte terceira). A unidade de valor do produto é "minuto de atendimento", não "ligação".

O que aprender:
- Onboarding por "me dá o seu site" é o padrão da categoria. Para o pequeno negócio brasileiro que não tem site, o equivalente é "me manda o cardápio/tabela de preço/print do Instagram".
- O resumo pós-ligação por SMS/e-mail com link da gravação é a funcionalidade que o dono mais sente. É o nosso "resumo para o dono no WhatsApp".
- Separar transferência cega (barata, todos os planos) de transferência quente (plano maior) é uma forma simples de escalonar preço.
- Cobrar por minuto de voz é inevitável porque voz tem custo marginal real (ver seção 5). O plano fixo de R$ 50/mês precisa de um teto de minutos ou de um adicional por minuto.

## 2. Business AI / Meta Business Agent (agente de IA da própria Meta)

A página do blog whatsappbusiness.com não abriu nesta sessão; o conteúdo abaixo vem de cobertura de imprensa e guias (TechCrunch, Quartz, WABetaInfo, ppc.land e blogs do setor).

O que é: um agente de IA que a própria Meta oferece ao negócio dentro do WhatsApp, Instagram e Messenger. Anunciado como disponível no mundo todo em 3 de junho de 2026 na conferência Conversations, em Londres. Antes disso rodou piloto na Índia, no México e no Brasil, com mais de 1 milhão de negócios usando (número divulgado pela Meta).

O que o agente faz:
- Responde perguntas frequentes sobre o negócio.
- Recomenda produtos do catálogo do WhatsApp e manda cartão de produto com botão de compra.
- Agenda compromissos.
- Qualifica leads e, segundo a Meta, pode fechar venda.
- Transfere para humano no ponto que o dono definir (o dono pode marcar assuntos sensíveis para sempre irem para ele).

Como configura: no app WhatsApp Business, em Ferramentas > Meta Business Agent. O dono pode liberar as conversas antigas para a IA aprender o jeito de responder, e adiciona catálogo, dados do negócio e perguntas frequentes. No Meta Business Suite (desktop) dá para ligar o catálogo, subir links e listas de FAQ e definir as regras de transferência para humano. A configuração é no celular; não dá para configurar pelo WhatsApp Web.

É grátis? Sim para começar ("free to start"). A Meta disse que planos pagos com mais capacidade viriam "nos próximos meses", e há indicação de que o agente será incluído em algumas faixas da assinatura WhatsApp Business Premium (não confirmado; detalhe de preço das faixas não foi publicado).

Limites apontados por terceiros: os dados ficam dentro do ecossistema da Meta; não há integração nativa com CRM, ERP, agenda externa ou sistema de pedidos; sem voz por telefone; sem painel multiusuário; sem relatórios além dos da Meta.

O que isso significa para quem vende atendente de IA no WhatsApp:
- O "responder perguntas no WhatsApp com IA" virou commodity. A Meta oferece de graça, dentro do app que o dono já usa, sem instalação. Competir só nisso é perder.
- O que a Meta não entrega (e provavelmente não vai entregar para o micro negócio brasileiro tão cedo): ligação por voz no número fixo/celular do negócio, anotação de pedido com itens e valor, agenda com regras do negócio (intervalo, profissional, bloqueio), resumo diário para o dono, Pix e cobrança, histórico fora da Meta, atendimento em outros canais (ligação, Instagram DM, site).
- O risco é real para qualquer plano de "R$ 50/mês só para responder no WhatsApp". A instalação de R$ 400 tem que comprar algo que a Meta não faz: configurar o negócio inteiro (produtos, preços, regras, agenda, voz) e deixar funcionando.
- Oportunidade: o produto pode usar o próprio Business Agent da Meta como "camada grátis" para texto simples e cobrar pelo que fica fora (voz, pedidos, agenda, resumo), ou ser a alternativa para quem precisa de controle e integrações.

## 3. Intercom Fin e Tidio (caixa de entrada com IA + humano)

### Intercom Fin

Como funciona a caixa de entrada: a IA (Fin) atende primeiro em todos os canais (chat no site, e-mail, WhatsApp, SMS, redes sociais, e voz pelo Fin Voice). Quando resolve, fecha. Quando não resolve, passa para um humano na mesma caixa de entrada, com o histórico inteiro.

Como a IA aprende (fontes de conhecimento): artigos da central de ajuda do Intercom, "Snippets" (trechos internos), PDFs e documentos, páginas públicas por URL, conteúdo extraído de conversas antigas e artigos sincronizados de Zendesk.

Handoff (passar para humano): configurável por regra (tema, horário, cliente) e automático em casos de risco (autoagressão, menores, tentativa de jailbreak, aconselhamento médico/jurídico/financeiro de alto risco). A IA sempre transfere quando é a opção mais segura.

Modo de aprovação: há ambiente de teste/preview antes de publicar e "guidance" (instruções de tom e de limites) e "procedures" (passo a passo que a IA executa). O detalhe de "aprovar cada resposta antes de enviar" não foi confirmado nesta pesquisa.

Relatórios: taxa de resolução (percentual de conversas que a IA fecha sem humano) é a métrica central, e é ela que dispara a cobrança.

Preço (dólar):
- Fin: US$ 0,99 por resolução (confirmado em várias fontes). Cobra uma vez por conversa. Resultados cobráveis: resolução, handoff com procedimento, desqualificação (US$ 0,99 cada) e qualificação de lead (US$ 9,99). Há menção a uma base de US$ 49/mês com 50 resultados inclusos, sem acumular (não confirmado; uma única fonte).
- Assentos do Intercom: Essential US$ 29, Advanced US$ 85, Expert US$ 132 por pessoa/mês no anual (US$ 39 / 99 / 139 no mensal).
- Copilot (IA para o atendente humano): US$ 29 por agente.
- WhatsApp, SMS e telefone são add-ons cobrados por uso.

O que aprender: cobrar por "resolução" alinha preço com valor e é fácil de explicar ("só paga quando a IA resolve"), mas exige medir resolução, o que é difícil no WhatsApp de um salão. A taxa de resolução como número único de relatório é boa ideia para o nosso painel ("a atendente resolveu 83% sozinha esta semana").

### Tidio (Lyro)

Como funciona a caixa de entrada: uma inbox única para site, Messenger, Instagram, WhatsApp e e-mail. Lyro (a IA) responde primeiro; quando não sabe ou o assunto é urgente, passa para um atendente humano, que vê toda a conversa com a IA.

Como a IA aprende: URLs de FAQ e central de ajuda, varredura do site, pares de pergunta e resposta digitados à mão, arquivos. Lyro lê conversas antigas da equipe e sugere novas perguntas e respostas, que o dono aprova antes de entrar no conhecimento. Esse "sugere, você aprova" é um modo de aprovação de conhecimento, não de resposta.

Idiomas: detecta e responde em dezenas de idiomas (fontes divergem entre 11 e 45+), incluindo português.

Preço (dólar):

| Item | Valor |
|---|---|
| Plano Free | US$ 0, 50 conversas/mês, até 10 atendentes, canais site/Messenger/Instagram/WhatsApp, 50 conversas Lyro uma única vez |
| Starter | US$ 24,17/mês no anual, 100 conversas/mês (mensal perto de US$ 29, não confirmado) |
| Growth | a partir de US$ 49,17/mês, 250 a 2.000 conversas (preço sobe com volume), 10 membros, relatórios avançados |
| Plus | a partir de US$ 749/mês |
| Premium | a partir de US$ 2.999/mês |
| Lyro (IA) | 50 conversas grátis uma vez; depois US$ 39/mês por 50 conversas (US$ 32,50 no anual); 100 por US$ 75; 200 por US$ 140; 300 por US$ 210; 500 por US$ 350; 1.000 por US$ 700 (US$ 0,70 a 0,78 por conversa) |
| Remover marca Tidio | US$ 20/mês |

No Premium, Lyro cobra por resolução em vez de por conversa, a partir de 3.000 conversas, com taxa de resolução garantida de 50% (não confirmado).

O que aprender: Tidio cobra por "conversa com IA", unidade mais fácil de entender que "crédito" ou "token". O pacote de 50 conversas grátis para experimentar é um gancho barato. O pequeno negócio brasileiro raramente passa de 300 conversas/mês, então um teto de conversas no plano de R$ 50 é defensável.

## 4. Plataformas brasileiras

### 4.1 Zaia (zaia.app)

O que faz: plataforma no-code para criar "Funcionários de IA" que atendem e vendem, principalmente no WhatsApp, com Instagram nativo nos planos maiores. Tem CRM próprio, follow-up automático, integração com Google Calendar (a IA agenda direto na agenda) e geração de Pix com QR Code e confirmação automática. Oferece white-label para agências e um serviço gerenciado ("a Zaia faz por você").

Público-alvo: empresas pequenas e médias e agências que montam agentes para clientes. A linguagem é de "funcionário", não de "bot".

Conexão com WhatsApp: as duas. Tem canal oficial (WhatsApp Cloud API da Meta) e canal por QR Code (não oficial, via Waha); a escolha é feita na hora de publicar o agente. A documentação cita coexistência (mesmo número no app WhatsApp Business e na API oficial).

Voz/ligação: uma fonte terceira cita "atendimento por voz"; não confirmado se há ligação telefônica real.

Catálogo/pedidos/agenda: agenda sim (Google Calendar). Catálogo e pedido estruturado não confirmados; o que existe é a IA conversar sobre produtos descritos na base de conhecimento.

Como cobra: por créditos. Cada mensagem enviada pelo agente consome créditos conforme o modelo de IA escolhido (GPT-4o mini gasta menos, GPT-4 gasta mais). Os créditos do plano são compartilhados entre todos os agentes da conta. Também há limite de caracteres na base de conhecimento.

| Plano | Preço/mês | Agentes | Créditos/mês | Base de conhecimento | Extras |
|---|---|---|---|---|---|
| Aceleração | R$ 249 | 10 | 5.000 | 4 milhões de caracteres | teste grátis 7 dias |
| Crescimento | R$ 490 | 40 | 10.000 | 12 milhões | Instagram nativo, follow-up |
| Escala | R$ 990 | ilimitados | 20.000 | 24 milhões | suporte 1:1 |
| Gerenciado | a partir de R$ 5.000 | sob medida | sob medida | sob medida | assinatura anual |

Não ficou claro quantas mensagens um crédito compra em cada modelo (não confirmado).

### 4.2 GPT Maker (gptmaker.ai)

O que faz: cria agentes de IA treinados no conteúdo do negócio e conecta em WhatsApp, Instagram, Messenger, Telegram, Mercado Livre e webchat. Promete "agente de vendas no WhatsApp em menos de 5 minutos". Tem painel com operadores humanos (atendentes), integração de agendamento (a IA checa disponibilidade e marca na agenda, incluindo Google Calendar) e conectores via API para CRMs (ex.: Bitrix24). Vende também para "gestores de automação" (agências) com marca própria.

Público-alvo: pequeno e médio negócio brasileiro e agências/automatizadores.

Conexão com WhatsApp: as duas. "Cloud API" (oficial da Meta) e "WhatsApp Web" por QR Code (não oficial), ambas no painel.

Voz/ligação: não confirmado (nada encontrado sobre ligação telefônica).

Catálogo/pedidos/agenda: agenda sim. Pedido estruturado e catálogo não confirmados.

Como cobra: por créditos. Cada resposta do agente consome uma quantidade de créditos que depende do modelo de IA escolhido. Teste grátis.

| Plano | Preço/mês | Créditos | Agentes | Operadores humanos |
|---|---|---|---|---|
| Basic | R$ 147 | 2.500 | 2 | 2 |
| Standard | R$ 497 | 11.500 | 10 | 10 |
| Corporate | R$ 997 | 30.000 | 20 | 20 |

Fonte dos preços: página de terceiro (usoia.com.br) e documentação de cobrança do próprio GPT Maker (developer.gptmaker.ai/billing, não aberta). Marcar como "não confirmado na página oficial".

### 4.3 Clint (clint.digital / useclint.com)

O que faz: CRM de vendas pelo WhatsApp com agente de IA no centro do produto. Inclui CRM com funil, WhatsApp Business API oficial nativa, Instagram, automações, BI e "voz" (telefonia dentro da plataforma, detalhe não confirmado). O agente tem quatro funções publicadas: pré-venda, venda, suporte e cobrança. Cada conversa conduzida pelo agente é uma "sessão" cobrada por uso, com teto de gasto configurável (o dono define o limite e a plataforma para ao atingir).

Público-alvo: infoprodutores, clínicas, times de vendas com 2 ou mais pessoas. Não é desenhado para o dono sozinho no balcão.

Conexão com WhatsApp: API oficial da Meta (incluída no plano a partir do Growth). Sem menção a QR Code.

Voz/ligação: listado como recurso da plataforma; funcionamento como atendente de voz não confirmado.

Catálogo/pedidos/agenda: CRM e funil sim; agenda nativa e pedido estruturado não confirmados.

Como cobra (fontes: blog da própria Clint e página de planos, logo com viés; valores não confirmados em página neutra):

| Item | Valor |
|---|---|
| Starter | R$ 523/mês, 2 usuários |
| Growth | R$ 800/mês no anual, 3 usuários, inclui API oficial do WhatsApp |
| Pro | R$ 149 por usuário/mês no anual (R$ 199 no mensal) |
| Agente de IA | 1 incluso em todo plano; a partir do segundo, R$ 149/mês no anual ou R$ 199 no mensal |
| Sessões do agente | cobradas por uso com teto configurável (preço por sessão não confirmado) |

Exemplo citado pela própria Clint: 3 pessoas no Pro anual pagam R$ 447/mês com 1 agente rodando, API oficial e Instagram.

### 4.4 Outras referências brasileiras (rápidas)

- Umbler Talk: Essencial R$ 99,90 por atendente/mês (mínimo 2 atendentes), Impulso R$ 149,90 (mínimo 3), Escala R$ 219,90 (mínimo 3). Inclui 2 números de WhatsApp, inbox compartilhada, CRM com funil, chatbot visual, agentes de IA com base de conhecimento. IA e templates são pagos em créditos pré-pagos que vencem em 60 dias (saldo não usado expira). Conexão oficial (Umbler é parceiro Meta). Piso real: R$ 199,80/mês mais créditos.
- Kommo (CRM): no Brasil, contratação semestral via parceiros, cobrada em real: Básico R$ 103, Avançado R$ 154, Pro R$ 232 por usuário/mês (valores de setembro de 2026, não confirmados no site oficial, que mostra dólar). Agente de IA só a partir do Avançado. Público: times de vendas.
- Z-API (infraestrutura, não produto final): R$ 99,99/mês por instância (plano Ultimate), planos de parceiro de R$ 54,99 a R$ 89,99 por volume. Conexão não oficial por QR Code, "mensagens ilimitadas". Não homologada pela Meta; risco de bloqueio do número fica com o cliente.
- Evolution API (infraestrutura): open source, grátis, roda em VPS própria (ordem de US$ 5/mês). Suporta conexão não oficial (Baileys, QR Code) e também a Cloud API oficial da Meta. É a base de muitos "atendentes de IA" vendidos por freelancers no Brasil.

Leitura geral das brasileiras: todas cobram entre R$ 147 e R$ 990 por mês e vendem para quem já tem equipe ou agência. Nenhuma tem plano perto de R$ 50/mês. Todas cobram em "créditos" cujo valor em mensagens o dono não entende. Quase nenhuma fala de ligação telefônica.

## 5. Regras da Meta e custos de infraestrutura

### 5.1 Política da Meta sobre IA na WhatsApp Business API

O que mudou: a Meta alterou os Termos da Solução WhatsApp Business (WhatsApp Business Solution Terms). Novos usuários da API passaram a seguir a regra em 15 de outubro de 2025; todos os usuários existentes em 15 de janeiro de 2026.

Texto da regra (tradução livre do trecho citado por várias fontes): provedores e desenvolvedores de tecnologias de IA ou aprendizado de máquina, incluindo modelos de linguagem, plataformas de IA generativa e assistentes de IA de propósito geral, estão proibidos de usar a Solução WhatsApp Business para oferecer, vender ou disponibilizar essas tecnologias quando elas forem a funcionalidade principal (e não incidental ou acessória) do que está sendo oferecido.

Na prática, proibido: bots tipo ChatGPT, Perplexity ou Luzia no WhatsApp (assistente que conversa sobre qualquer assunto); bots que usam a conversa para treinar modelo; bots que simulam assistente amplo.

Na prática, permitido: IA que responde sobre produtos e serviços de um negócio específico, rastreio de pedido, agendamento e reservas, FAQ com base de conhecimento definida, recomendação de produto de um catálogo, suporte ao cliente. A Meta AI continua sendo a única IA de propósito geral dentro do WhatsApp.

O que isso significa para nós: o nosso produto é exatamente o caso permitido (atendente do próprio negócio, com escopo fechado). Precisamos deixar isso explícito no prompt do agente (não responder fora do escopo do negócio) e nos termos de uso. Fontes: respond.io/blog/whatsapp-general-purpose-chatbots-ban, z-api.io/blog/meta-atualiza-politica-do-whatsapp-business/, gptmaker.ai/proibicao-de-chatbots-no-whatsapp-business/, dig.watch/updates/meta-changes-whatsapp-terms-to-block-third-party-ai-assistants. A página oficial dos termos (business.whatsapp.com/policy) não abriu nesta sessão.

### 5.2 Preço das mensagens da API oficial do WhatsApp no Brasil

Modelo: desde 1 de julho de 2025 a cobrança é por mensagem de template enviada pela empresa, não mais por conversa de 24 horas. O preço depende do país do destinatário e da categoria.

Valores no Brasil (fontes: tabelas de BSPs e blogs do setor; página oficial developers.facebook.com/documentation/business-messaging/whatsapp/pricing não abriu):

| Categoria | Valor em dólar | Valor em real (cobrança em BRL, não confirmado na fonte oficial) |
|---|---|---|
| Marketing | US$ 0,0625 | R$ 0,3217 |
| Utilidade | US$ 0,0068 | R$ 0,0350 |
| Autenticação | US$ 0,0068 | R$ 0,0350 |
| Serviço (resposta ao cliente dentro da janela de 24 h) | grátis até 30/09/2026 | ver abaixo |

Mensagens recebidas do cliente são grátis. Conversas iniciadas por anúncio "clique para WhatsApp" têm janela de 72 horas grátis.

Mudança em 1 de outubro de 2026 (fontes: WATI, respond.io, Landbot, Engagelab): mensagens de serviço (resposta livre dentro da janela de 24 h) passam a ser cobradas na tarifa de utilidade do país após 1.000 mensagens grátis por número de telefone por mês (sem acumular, sem desconto por volume). Templates de utilidade enviados dentro da janela também passam a ser cobrados. Para o Brasil isso significa ordem de R$ 0,035 por resposta a partir da 1.001a resposta no mês, por número. A Meta também está migrando a cobrança no Brasil para real (prazo citado: até 30/06/2027, não confirmado).

Implicação para o produto: um salão com 300 conversas/mês e 8 respostas por conversa manda 2.400 mensagens de serviço; 1.400 pagas a R$ 0,035 dá cerca de R$ 49/mês só de Meta, igual à mensalidade pensada. Com conexão por QR Code (não oficial) esse custo é zero, mas há risco de bloqueio e a ligação por voz pelo WhatsApp (Calling API) só existe na oficial. Decisão de produto importante.

### 5.3 Custo aproximado de voz

Telefonia (Twilio, Brasil, fonte: busca sobre twilio.com/en-us/voice/pricing/br, página não aberta):
- Número local brasileiro: US$ 4,25/mês.
- Chamada recebida em número local: US$ 0,010/min.
- Chamada feita para fixo: US$ 0,031/min; para celular: US$ 0,0663/min.
- Número de celular brasileiro na Twilio: preço não confirmado.
- Requisitos: CNPJ e comprovante de endereço no Brasil; números locais não são vendidos para pessoa física. Até 5 números toll-free por CNPJ.
- Alternativa: a WhatsApp Business Calling API (ligação de voz dentro do WhatsApp pela API oficial) permite receber chamada de voz no número do negócio sem telefonia tradicional; só o cliente inicia a chamada. Preço não confirmado nesta pesquisa.

Fala (modelo que ouve e fala):
- OpenAI gpt-realtime-2.1: US$ 32 por 1 milhão de tokens de áudio de entrada e US$ 64 por 1 milhão de saída; entrada em cache US$ 0,40. Em minutos: cerca de US$ 0,019/min ouvindo e US$ 0,077/min falando. Custo típico de agente real: US$ 0,06 a 0,10 por minuto de conversa.
- OpenAI gpt-realtime-2.1-mini: US$ 10 entrada / US$ 20 saída por 1 milhão de tokens de áudio (cerca de um terço do preço).
- ElevenLabs Agents (voz conversacional): US$ 0,08/min em todos os planos (tarifa de abril de 2026), com minutos inclusos por plano (Free 15 min; Business US$ 825 com 12.375 min). O modelo de linguagem e a telefonia são cobrados à parte.

Transcrição (só ouvir):
- Deepgram Nova-3: US$ 0,0043/min em lote; US$ 0,0077/min em tempo real (promoção a US$ 0,0048); US$ 200 de crédito grátis.
- OpenAI Whisper (whisper-1) e gpt-4o-transcribe: US$ 0,006/min. gpt-4o-mini-transcribe: US$ 0,003/min.

Conta de padeiro para o plano de R$ 50 (câmbio hipotético de R$ 5,50): 100 minutos de ligação por mês custam cerca de US$ 1 de Twilio + US$ 4 a 6 de modelo realtime mini (ou US$ 8 na ElevenLabs) = US$ 5 a 9, ou R$ 28 a 50. Voz consome a mensalidade inteira acima de 100 min/mês. Texto no WhatsApp custa centavos.

### 5.4 Preço de modelos de IA por milhão de tokens (consulta em 2026-10-02)

| Modelo | Entrada (US$/1M) | Saída (US$/1M) | Observação |
|---|---|---|---|
| OpenAI gpt-4o-mini | 0,15 | 0,60 | cache de entrada 0,075 |
| OpenAI gpt-4.1-mini | 0,40 | 1,60 | contexto 1M |
| Anthropic Claude Haiku 4.5 | 1,00 | 5,00 | cache de leitura 0,10; lote 0,50/2,50 (tabela oficial da Anthropic) |
| Anthropic Claude Sonnet 5.5 | 2,00 | 10,00 | cache de leitura 0,20 (tabela oficial da Anthropic) |
| Anthropic Claude Opus 5.5 | 4,00 | 20,00 | cache de leitura 0,20 (tabela oficial da Anthropic) |
| Google Gemini 2.5 Flash | 0,30 | 2,50 | preço válido até 31/12/2026 segundo terceiros (não confirmado) |
| Google Gemini 2.5 Flash-Lite | 0,10 | 0,40 | terceiros citam desativação em 16/10/2026 (não confirmado) |
| Google Gemini 3 Flash | 0,50 | 3,00 | não confirmado |

Conta de padeiro para texto: 300 conversas/mês, 10 respostas cada, 1.500 tokens de entrada e 150 de saída por resposta, com gpt-4o-mini: 3.000 x (1.500 x 0,15 + 150 x 0,60) / 1.000.000 = cerca de US$ 0,95/mês. Com Haiku 4.5 dá cerca de US$ 6,75. Texto é barato; o que pesa é a Meta (seção 5.2) e a voz (5.3).

## 6. O que nenhuma delas faz bem para o pequeno negócio brasileiro (observações brutas, 14 candidatas)

1. Preço de entrada: a brasileira mais barata começa em R$ 147/mês (GPT Maker) e a maioria em R$ 249 a R$ 523; a do mundo rico em US$ 29 (Dialzara). Ninguém tem um plano de R$ 50 que o dono de salão ou a costureira aceite sem pensar.
2. Unidade de cobrança incompreensível: "créditos que variam por modelo de IA" (Zaia, GPT Maker, Umbler), "sessão por uso com teto" (Clint), "resolução" (Intercom). O dono não sabe quanto vai pagar no fim do mês. Dialzara (minutos) e Tidio (conversas) são as únicas com unidade que uma pessoa comum entende.
3. Voz por telefone praticamente não existe no Brasil: nenhuma das brasileiras pesquisadas confirmou atender ligação telefônica. Dialzara faz, mas é EUA e cobra em dólar. O pequeno negócio brasileiro ainda recebe ligação (cliente mais velho, emergência, "tá aberto?").
4. Configuração feita pelo dono, pelo celular: todas assumem alguém no computador montando prompt, base de conhecimento e fluxo. Nenhuma tem a experiência "mando um áudio dizendo que o corte subiu para R$ 60 e a atendente já sabe". O Meta Business Agent é o mais perto (configura no app), mas sem controle fino.
5. Pedido e agendamento estruturados: as plataformas de texto "conversam sobre" produtos; não anotam o pedido como lista com itens, quantidade, valor e horário de retirada, nem respeitam regras de agenda (intervalo, profissional, folga). Dialzara agenda, mas no Google/Outlook, que o pequeno negócio brasileiro raramente usa.
6. Resumo para o dono: só Dialzara manda resumo pós-atendimento por SMS/e-mail. No Brasil o resumo tem que chegar no WhatsApp do dono, no fim do dia, em linguagem de gente ("hoje: 4 agendamentos, 2 pedidos, 1 cliente quer falar com você").
7. Dependência de equipe: Clint, Umbler, Kommo e Intercom cobram por usuário/atendente com mínimo de 2 ou 3 pessoas. O negócio de uma pessoa só é excluído por desenho.
8. Risco regulatório empurrado para o cliente: as que usam QR Code (Z-API, Evolution, modo não oficial de Zaia e GPT Maker) deixam o risco de bloqueio do número com o dono, sem explicar. As oficiais empurram o custo da Meta (que a partir de outubro de 2026 inclui respostas de serviço acima de 1.000/mês por número).
9. Instalação como serviço: ninguém vende "eu vou lá, configuro e deixo funcionando" por preço fixo. Zaia tem gerenciado a partir de R$ 5.000/mês. O modelo "R$ 400 de instalação" é posicionamento vazio no mercado.
10. Pix e cobrança: Zaia gera Pix com confirmação automática; as demais não. Para costureira e personal, "manda o Pix e confirma o pagamento" é metade do atendimento.
11. Ameaça gratuita da Meta: o Business Agent cobre FAQ, catálogo e agendamento simples de graça dentro do app. Nenhuma concorrente brasileira respondeu publicamente a isso ainda; o nosso posicionamento tem que ser "o que a Meta não faz" desde o primeiro dia.
12. Multicanal real do pequeno negócio: ligação + WhatsApp + direct do Instagram. As brasileiras tratam Instagram como add-on de plano maior (Zaia só a partir de R$ 490).
13. Horário e cultura local: nenhuma trata o "fecha no almoço", "não atende domingo", "feriado municipal", "sinal de 30% para reservar" como configuração de primeira classe; tudo vira texto solto no prompt.
14. Relatório simples: Intercom e Tidio têm dashboards de taxa de resolução; as brasileiras mostram consumo de créditos. O dono quer três números: quantos atenderam, quantos viraram pedido/agendamento, quantos ele precisa responder.

## 7. Os 5 diferenciais escolhidos (viram a promessa do produto)

Escolhidos entre as 14 observações acima pelo critério: o que a Meta não faz de graça, o que o dono sente no dia a dia e o que dá para entregar com um programador.

1. **Instalação feita por nós, pelo WhatsApp, por preço fixo.** O dono manda fotos, áudios e a tabela de preço; nós deixamos a atendente pronta. Ninguém no mercado vende isso abaixo de R$ 5.000/mês. É o que justifica os R$ 400 de instalação (observações 4 e 9).
2. **Pedido e agendamento anotados de verdade, com regras do negócio.** Lista com item, tamanho, quantidade, valor, pagamento e retirada; agenda que respeita almoço, folga, intervalo e profissional. As concorrentes "conversam sobre" o produto; a nossa anota (observações 5 e 13).
3. **Resumo do dia no WhatsApp do dono, em linguagem de gente.** "Hoje: 7 pedidos, R$ 612, 3 perguntas que eu não soube." Só a Dialzara faz algo parecido, por e-mail e em inglês (observação 6).
4. **Atende ligação por voz no número da loja.** Nenhuma brasileira pesquisada confirmou isso. Cliente mais velho ainda liga. Entra no plano Completo porque tem custo por minuto (observação 3).
5. **Preço que o dono entende e um negócio de uma pessoa só pode pagar.** R$ 50/mês com teto de conversas claro, sem "créditos", sem mínimo de 2 atendentes, sem cobrar por usuário (observações 1, 2 e 7).

Fora da lista, mas obrigatório como base: API oficial da Meta (nunca QR code) e a atendente que "não inventa" (só fala o que está no catálogo e nas regras, e chama o dono quando não sabe). Isso não é diferencial de venda, é o que evita bloqueio de número e erro de preço.

## 8. Três nomes melhores que "Atende"

"Atende" é descritivo mas genérico, difícil de registrar e já usado por vários sistemas de senha de fila. Sugestões, todas sem verificação de marca ou domínio (fazer busca no INPI e registro.br antes de escolher):

1. **Balcão.** O balcão da loja, que agora fica aberto 24h. Palavra que o dono de 50 anos usa todo dia. Frase de venda: "Seu balcão nunca fecha."
2. **Prontinha.** O jeito que a atendente fala ("anotei, prontinho"). Nome de pessoa, feminino como a maioria das atendentes de loja de bairro, soa simpático no áudio e na ligação.
3. **Anota.** O verbo que resume o produto: ela anota o pedido, anota o horário, anota o recado. Curto, fácil de falar ao telefone ("é da Anota") e combina com o botão principal do painel.

No esboço o nome ficou "Atende" para não misturar a decisão de nome com a avaliação do produto.

## Fontes (lista de URLs consultadas)

Dialzara
- https://dialzara.com/pricing (não abriu; dados via resultado de busca)
- https://dialzara.com/faqs (não abriu)
- https://dialzara.com/solutions/ai-receptionist (não abriu)
- https://www.sonant.ai/blog/dialzara-alternative-review (não abriu; resumo via busca)
- https://ainora.lt/blog/dialzara-review-alternatives-2026
- https://www.cloudtalk.io/dialzara-pricing/
- https://www.myaifrontdesk.com/comparison/dialzara
- https://contractortoolstack.com/software/dialzara/
- https://counterandcrew.com/tools/dialzara/

Meta Business Agent
- https://whatsappbusiness.com/blog/introducing-meta-business-agent-ai/ (não abriu)
- https://whatsappbusiness.com/products/business-app-ai-agent/ (não abriu)
- https://techcrunch.com/2026/06/03/metas-ai-agent-for-whatsapp-business-is-now-available-globally/ (não abriu; resumo via busca)
- https://wabetainfo.com/meta-introduces-ai-business-agent-for-whatsapp-worldwide/
- https://qz.com/meta-business-agent-whatsapp-instagram-messenger-060326
- https://ppc.land/meta-business-agent-brings-ai-customer-service-to-whatsapp-globally/
- https://www.intelliconcierge.com/blog/how-to-set-up-meta-business-agent-on-whatsapp-step-by-step-2026
- https://www.salesmartly.com/en/blog/docs/meta-business-agent
- https://chatbotx.io/blog/meta-business-agent-in-2026-what-it-does-what-it-costs-and-what-the-new-whatsapp-pricing-rules-mean-for-your-business/

Intercom Fin e Tidio
- https://www.intercom.com/fin (não abriu)
- https://www.intercom.com/pricing (não abriu)
- https://www.intercom.com/help/en/articles/7120684-fin-ai-agent-explained
- https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs
- https://fin.ai/updates/knowledge-sources
- https://www.getmacha.com/blog/intercom-fin-ai-agent-complete-guide
- https://www.dragapp.com/blog/intercom-pricing/
- https://www.voiceflow.com/blog/intercom-pricing
- https://www.tidio.com/pricing/ (não abriu)
- https://www.tidio.com/lyro/ (não abriu)
- https://www.tidio.com/blog/lyro-ai-training/
- https://www.eesel.ai/blog/lyro-ai-pricing
- https://www.eesel.ai/blog/tidio-pricing
- https://www.getmacha.com/blog/tidio-lyro-explained
- https://aisupportagent.io/blog/tidio-pricing

Plataformas brasileiras
- https://zaia.app/ (não abriu)
- https://zaiadocs.gitbook.io/recursos/gestao-da-sua-conta/faq
- https://zaiadocs.gitbook.io/recursos/agentes/integracoes-e-canais/whatsapp-cloud-api-oficial
- https://zaiadocs.gitbook.io/recursos/agentes/integracoes-e-canais/google-calendar
- https://zaia.app/blog/api-oficial-whatsapp/
- https://ferramentasai.net/zenvia-vs-zaia-comparativo-2026/
- https://nexoaction.com/blog/melhores-plataformas-agente-ia-whatsapp/
- https://gptmaker.ai/ (não abriu)
- https://developer.gptmaker.ai/agents/agent-channels
- https://developer.gptmaker.ai/billing
- https://usoia.com.br/ferramentas/gpt-maker/agentes-de-ia-ia
- https://gptmaker.ai/agente-de-ia-para-vendas-no-whatsapp-em-menos-de-5-minutos/
- https://clint.digital (não abriu)
- https://useclint.com/planos-e-precos
- https://www.clint.digital/blog/custo-agente-ia-whatsapp-2026/
- https://www.clint.digital/blog/clint-vs-socialhub-vs-kommo-crm-whatsapp-2026
- https://www.umbler.com/br/talk/agente-ia-whatsapp
- https://www.socialhub.pro/blog/umbler-talk-preco-plano-comparativo-socialhub/
- https://talqui.chat/alternativas/umbler-talk
- https://www.kommo.com/blog/kommo-pricing/
- https://comunidadekommobrasil.com/kommo-planos
- https://blog.cubosuite.com.br/z-api-guia-completo/
- https://wafly.com.br/comparativos/quanto-custa-api-whatsapp/
- https://github.com/evolution-foundation/evolution-api

Regras da Meta e preços do WhatsApp
- https://respond.io/blog/whatsapp-general-purpose-chatbots-ban
- https://z-api.io/blog/meta-atualiza-politica-do-whatsapp-business/
- https://gptmaker.ai/proibicao-de-chatbots-no-whatsapp-business/
- https://dig.watch/updates/meta-changes-whatsapp-terms-to-block-third-party-ai-assistants
- https://www.eesel.ai/blog/meta-policy-changes-affecting-third-party-ai-chatbots-on-whatsapp
- https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing (não abriu)
- https://www.messagecentral.com/blog/whatsapp-business-api-pricing-in-brazil
- https://whautomate.com/whatsapp-business-api-pricing-brazil
- https://www.engagelab.com/blog/whatsapp-business-api-pricing
- https://support.wati.io/en/articles/16954666-whatsapp-business-platform-api-pricing-changes-service-messages-and-click-to-message-ads
- https://landbot.io/blog/whatsapp-business-api-pricing-change-october
- https://respond.canny.io/changelog/whatsapp-business-platform-pricing-is-changing-from-1-october-2026
- https://www.zappy.chat/novos-precos-whatsapp-api-outubro-2026-zappy/

Voz e modelos de IA
- https://www.twilio.com/en-us/voice/pricing/br (não abriu; dados via busca)
- https://www.twilio.com/en-us/guidelines/br/regulatory
- https://clickmassa.com.br/whatsapp-business-calling-api/
- https://developers.openai.com/api/docs/pricing
- https://www.forasoft.com/blog/article/openai-realtime-api-pricing
- https://www.eesel.ai/blog/gpt-realtime-mini-pricing
- https://elevenlabs.io/blog/we-cut-our-pricing-for-conversational-ai
- https://thunderphone.com/guides/elevenlabs-agents-pricing
- https://convertaudiototext.com/blog/deepgram-nova-3-explained
- https://diyai.io/ai-tools/speech-to-text/openai-whisper-api-pricing-2026/
- https://pricepertoken.com/pricing-page/model/openai-gpt-4o-mini
- https://pricepertoken.com/pricing-page/model/openai-gpt-4.1-mini
- https://www.anthropic.com/news/claude-haiku-4-5
- https://openrouter.ai/anthropic/claude-haiku-4.5
- https://pricepertoken.com/pricing-page/model/google-gemini-2.5-flash
- https://pricepertoken.com/pricing-page/model/google-gemini-2.5-flash-lite
- https://www.cloudzero.com/blog/gemini-pricing/
