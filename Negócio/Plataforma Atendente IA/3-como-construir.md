# Como construir a Atende (documento técnico curto)

Para: o programador que vai avaliar se topa construir junto.
Escrito em linguagem simples. Os números de custo são estimativas de outubro de 2026, com câmbio hipotético de R$ 5,50 por dólar. Os preços da Meta, da Twilio e de voz vieram de fontes secundárias (ver o arquivo 2-referencias.md) e precisam ser confirmados nas páginas oficiais antes de virar preço de venda.

## 1. O produto em uma frase

Uma atendente de IA para o pequeno negócio local. Ela responde os clientes no WhatsApp (texto e áudio) e, mais tarde, por ligação; anota pedidos e agendamentos; manda um resumo pro dono. O dono controla tudo num painel feito para o celular. O esboço visual está na pasta "esboco" (abra o index.html).

## 2. As peças do sistema e o que eu recomendo para cada uma

| Peça | O que faz | Recomendação | Por quê |
|---|---|---|---|
| Painel do dono | As 8 telas do painel, feitas para celular. | Next.js + Tailwind, publicado na Vercel, instalável como PWA (ícone na tela do celular). | É o que você já usa; Vercel tem plano grátis para começar. |
| Banco de dados e login | Lojas, produtos, clientes, conversas, pedidos, agenda. Login do dono. Fotos dos produtos. | Supabase (Postgres + autenticação + armazenamento de arquivos). Login por código enviado no WhatsApp ou por e-mail. | Um serviço só resolve banco, login e fotos. Plano grátis no começo, US$ 25/mês depois, dividido entre todos os clientes. |
| Servidor da atendente | Recebe as mensagens da Meta (webhook), chama a IA, grava no banco, responde. | Um serviço Node (Fastify ou Hono) na Railway ou Fly.io, com fila simples (BullMQ + Redis ou a própria tabela no Postgres). | Webhook da Meta exige resposta rápida e processamento depois. Não misturar com o painel. |
| A IA (cérebro) | Entende a mensagem, decide o que fazer, escreve a resposta. | API da Anthropic (Claude). Modelo padrão: Claude Opus 5.5 (claude-opus-5-5). Para as respostas rotineiras do WhatsApp, medir com Claude Haiku 4.5 (claude-haiku-4-5), que custa um quarto. | Uso de ferramentas (tool use) é o que faz a atendente "anotar pedido" de verdade em vez de só conversar. Cache de prompt barateia o catálogo repetido em toda mensagem. |
| Ferramentas da IA | O que a atendente pode fazer de concreto. | Funções no servidor que a IA chama: consultar_catalogo, anotar_pedido, ver_horarios_livres, marcar_horario, lembrar_cliente, chamar_dona. | Preço e estoque vêm sempre do banco pela ferramenta, nunca da memória da IA. É isso que impede erro de preço. |
| Áudio do cliente | Transforma o áudio do WhatsApp em texto. | OpenAI gpt-4o-mini-transcribe (US$ 0,003 por minuto) ou Deepgram Nova-3. | A Claude não ouve áudio. Transcrever e mandar o texto para ela é barato e simples. |
| Cadastrar por foto | Foto da peça vira nome, tipo, cor e descrição. | A própria Claude, que lê imagem. O dono confirma e digita o preço. | Uma chamada por produto cadastrado. A IA nunca sugere preço. |
| WhatsApp | Receber e enviar mensagens no número do negócio. | API oficial da Meta (WhatsApp Cloud API), direto na Meta, sem intermediário. Usar "coexistência" para o dono continuar com o app WhatsApp Business no celular dele. | Regra da Meta e única forma de ter ligação pelo WhatsApp depois. Nunca conexão por QR code (Evolution, Z-API, Baileys): bloqueia número. |
| Resumo e avisos pro dono | Resumo do dia, "cliente quer falar com você", pedido de aprovação. | Mensagens pelo mesmo número oficial, com modelos (templates) de utilidade aprovados pela Meta. | Custa cerca de R$ 0,035 por mensagem. Alternativa grátis no começo: notificação do PWA. |
| Voz (ligação) | Atende o telefone da loja e conversa. | Fase 3. Twilio (número brasileiro + Media Streams) ligado a um modelo de voz em tempo real (OpenAI gpt-realtime-mini ou ElevenLabs Agents). Alternativa: a Calling API do WhatsApp, em que o cliente liga pelo próprio WhatsApp. | É a peça mais cara e mais difícil. Por isso fica fora da Versão 1 e dentro do plano Completo. |
| Erros e acompanhamento | Saber quando a atendente errou ou travou. | Sentry para erros; guardar toda conversa com o que a IA decidiu (ferramentas chamadas) para revisar. | Sem isso não dá para corrigir a IA. |

Resumo em uma linha: painel na Vercel, banco no Supabase, um servidor Node para os webhooks, Claude como cérebro, Meta como canal.

## 3. O que entra em cada versão

### Versão 1: vender para o primeiro cliente (o Ateliê Maria de verdade)

Só o que faz o dono pagar R$ 400 + R$ 50 e não desistir na primeira semana.

- WhatsApp oficial no número do negócio, com texto e áudio do cliente.
- Catálogo: cadastrar à mão e por foto, com preço, tamanhos e estoque.
- Atendente que responde preço, tamanho, endereço, horário, manda foto da peça e anota pedido.
- Regras do dono: nome, jeito de falar, horário, lista de "o que ela nunca promete", instruções extras.
- Modo "aprovar antes de enviar" (o dono aprova a resposta no WhatsApp dele). Essencial nas primeiras semanas de cada cliente.
- Painel: Início, Pedidos (com status e "mandar lista pro meu WhatsApp"), Conversas (ver e assumir), Catálogo, Minha atendente.
- Resumo do dia no WhatsApp do dono e a lista "o que ela não soube responder".
- Um atendente humano só (o dono).

Fora da Versão 1: ligação, agenda, memória de cliente, relatórios, vários atendentes, Pix automático.

### Versão 2: o que faz o cliente ficar e indicar

- Agenda com horários livres, regras (almoço, intervalo, folga) e lembrete 1 dia antes.
- Clientes com memória (tamanho, preferências, histórico) e direito de apagar.
- Relatórios: conversas, pedidos, perguntas mais feitas, horário de pico, taxa que a IA resolveu sozinha.
- Vários atendentes humanos e "quem está atendendo".
- Pix: mandar chave e cobrar comprovante; depois, Pix com confirmação automática (Mercado Pago ou banco com API).
- "Ensinar a Bia": responder uma pergunta sem resposta e ela aprender para sempre.

### Versão 3: o plano Completo

- Ligação por voz no número da loja, com transcrição ao vivo e resumo pro dono.
- Instagram Direct no mesmo painel.
- Vários profissionais na agenda (salão, clínica).
- Lembretes e mensagens de retorno ("faz 60 dias que você não compra").
- Marca própria para quem quiser revender (agência, contador).

## 4. Custo estimado por cliente por mês

Cliente típico pensado: 300 conversas por mês, 10 respostas da atendente por conversa (3.000 respostas), 30 áudios de 30 segundos, 15 produtos cadastrados por foto no primeiro mês. Tudo abaixo é estimativa.

| Item | Conta | Estimativa por mês |
|---|---|---|
| IA, texto, com Claude Haiku 4.5 | 3.000 respostas x (1.500 tokens de entrada, 80% em cache, + 150 de saída). Entrada US$ 1 por milhão, cache US$ 0,10, saída US$ 5. | US$ 3,50, cerca de R$ 19 |
| IA, texto, com Claude Opus 5.5 | Mesma conta com entrada US$ 4, cache US$ 0,20, saída US$ 20. | US$ 13, cerca de R$ 72 |
| Transcrição de áudio | 15 minutos x US$ 0,003. | Menos de R$ 1 |
| Cadastro por foto | 15 fotos x 1 chamada com imagem na Claude. | R$ 1 a 3 |
| Mensagens da Meta (API oficial) | Até setembro de 2026: respostas na janela de 24 h grátis. A partir de outubro de 2026: 1.000 respostas grátis por número por mês, depois R$ 0,035 cada. 3.000 respostas: 2.000 pagas. Mais 30 avisos de utilidade pro dono. | R$ 0 (regra antiga) a R$ 71 (regra nova, não confirmada na fonte oficial) |
| Servidor, banco, painel | Supabase Pro US$ 25 + Railway US$ 10 + Vercel grátis, divididos por 20 clientes. | R$ 10 por cliente com 20 clientes; cai com mais |
| Voz (só no plano Completo) | 100 minutos: Twilio US$ 4,25 do número + US$ 0,01/min + modelo de voz US$ 0,04 a 0,08/min. | R$ 28 a 50 |

Totais estimados:

| Cenário | Custo por cliente por mês |
|---|---|
| Essencial, Haiku 4.5, Meta na regra antiga | R$ 30 |
| Essencial, Haiku 4.5, Meta na regra nova | R$ 100 |
| Essencial, Opus 5.5, Meta na regra nova | R$ 155 |
| Completo (Essencial + 100 min de voz) | mais R$ 28 a 50 |

O que isso diz sobre o preço: R$ 50/mês fecha a conta só com modelo barato e com a Meta ainda sem cobrar as respostas. Se a regra de outubro de 2026 valer como as fontes dizem, o plano Essencial precisa de um teto (por exemplo, 150 conversas por mês) ou de preço perto de R$ 90 a 120. O plano Completo, com voz, dificilmente fica abaixo de R$ 200. Isso precisa ser medido com o primeiro cliente real antes de imprimir tabela de preço.

## 5. Riscos e como lidar

| Risco | O que pode acontecer | O que fazer |
|---|---|---|
| Regra da Meta contra IA genérica | Desde 15 de janeiro de 2026 a Meta proíbe assistentes de IA de propósito geral na API do WhatsApp. IA de atendimento do próprio negócio é permitida. | Escopo fechado no prompt ("só fala do Ateliê Maria"), recusar assunto fora da loja, deixar isso escrito nos termos de uso. O esboço já mostra essa regra na tela Minha atendente. |
| Conexão não oficial | Ferramentas por QR code (Evolution, Z-API) são baratas e bloqueiam o número do cliente sem aviso. | Nunca usar. Só API oficial. Explicar isso na venda como vantagem. |
| Meta Business Agent (grátis) | A Meta lançou em junho de 2026 um agente de IA grátis dentro do app WhatsApp Business. Responde perguntas e recomenda catálogo. | Não competir em "responder no WhatsApp". Vender o que a Meta não faz: instalação feita por nós, pedido anotado, agenda com regras, resumo pro dono, voz. |
| Custo da Meta por mensagem | A partir de outubro de 2026 as respostas de serviço acima de 1.000 por mês passam a ser cobradas (fontes secundárias). | Teto de conversas no plano, respostas mais curtas e completas (menos mensagens por conversa), confirmar o valor na página oficial. |
| A IA errar preço ou prometer o que não pode | Cliente cobra, dono perde confiança no primeiro erro. | Preço sempre vem do banco pela ferramenta consultar_catalogo, nunca do texto do prompt. Lista de "nunca prometer" entra como regra dura. Modo "aprovar antes de enviar" nas primeiras semanas. Guardar toda conversa com as ferramentas chamadas. Montar um conjunto de testes (50 mensagens reais com a resposta esperada) e rodar a cada mudança de prompt. |
| LGPD | Guardamos nome, telefone, histórico e preferências de clientes finais, em nome do dono da loja. | O dono é o controlador e nós somos o operador: contrato simples dizendo isso. Guardar só o necessário, apagar conversa antiga depois de 12 meses, botão "apagar tudo desse cliente", aviso curto na primeira mensagem ("atendimento com ajuda de assistente virtual"). Dados hospedados em região com contrato padrão (Supabase e Anthropic têm). |
| Voz cara e difícil | Minuto de voz custa de 10 a 50 vezes o custo de uma conversa de texto, e latência ruim mata a experiência. | Deixar para a Versão 3, cobrar por minuto acima de um teto, começar com a Calling API do WhatsApp (sem telefonia tradicional) se o preço dela confirmar. |
| Dependência de um fornecedor | Anthropic, Meta ou Supabase mudam preço ou regra. | Código da IA isolado numa camada só (trocar de modelo em um dia), banco Postgres comum (sai do Supabase se precisar). |
| Dono abandona o painel | Pessoa de 50 anos sem paciência instala e não mexe. | Instalação feita por nós, resumo diário por WhatsApp (ele nem precisa abrir o painel), ações principais em dois toques. O esboço foi desenhado com essa pessoa em mente. |

## 6. Quanto tempo leva a Versão 1 com um programador

Estimativa para uma pessoa em tempo integral, já conhecendo Next.js e Node, sem nunca ter mexido com a API da Meta nem com a Claude:

| Semana | Entrega |
|---|---|
| 1 | Conta na Meta (verificação do negócio leva dias, começar no dia 1), webhook recebendo e respondendo "oi", banco e login no Supabase. |
| 2 | Catálogo no painel (manual e por foto) e as telas Minha atendente e Conversas. |
| 3 e 4 | Cérebro da atendente: prompt, ferramentas (catálogo, pedido, chamar dona), transcrição de áudio, foto do produto na resposta, cache de prompt. |
| 5 | Pedidos no painel, lista pro WhatsApp do dono, modo "aprovar antes de enviar", resumo do dia. |
| 6 | Testes com conversas reais (o conjunto de 50 mensagens), correção de erros, LGPD básica (apagar cliente), avisos de erro. |
| 7 e 8 | Instalar no primeiro cliente de verdade, acompanhar duas semanas, consertar o que aparecer. |

Total: 8 semanas até o primeiro cliente pagante usando, com folga de 2 semanas para a aprovação da Meta e o inesperado. Em meio período, dobra. As Versões 2 e 3 são mais 8 a 12 semanas cada.

## 7. Perguntas para decidir juntos

1. Você topa esse stack (Next.js, Supabase, Node, Claude, Meta oficial) ou prefere outro?
2. Quem paga a infraestrutura nos primeiros 6 meses (ordem de R$ 300/mês no total)?
3. Como dividimos: eu vendo, instalo e cuido do cliente; você constrói e cuida do sistema. Em que proporção?
4. Começamos por uma costureira, como no esboço, ou por um salão?
