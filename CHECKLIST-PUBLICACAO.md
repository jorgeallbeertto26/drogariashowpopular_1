# Checklist antes de publicar

## A. Informações empresariais e jurídicas a validar

Marque cada item antes de publicar. O site **não** afirma que nada disso foi verificado.

- [ ] **CNPJ 62.078.810/0001-18**: consultar na Receita Federal (comprovante de inscrição) e conferir razão social, nome fantasia, endereço e situação cadastral. O rodapé exibe “CNPJ: …” sem selo de verificação; só mantenha depois de confirmar.
- [ ] **Endereço**: Rua José Hipólito de Oliveira, 70, Centro, Nova Iguaçu — RJ. Confirmar com o alvará/licenças.
- [ ] **WhatsApp (21) 96533-9215**: confirmar que é o número oficial e que a equipe responde por ele. Testar o link `https://wa.me/5521965339215` de um celular.
- [ ] **E-mail contato@drogashowpopular.com.br**: confirmar que a caixa existe e é monitorada (a política de privacidade promete esse canal).
- [ ] **Licenças e responsável técnico**: confirmar licença sanitária e farmacêutico responsável (CRF) conforme a legislação. O site **não exibe** esses dados porque não foram fornecidos; se quiser exibi-los, informe os números reais.
- [ ] **Entrega**: confirmar se existe entrega, área, prazos, taxas e pagamento. O site só diz que “está sujeita à confirmação”. Não publique “entrega grátis” ou prazos sem confirmação.
- [ ] **Formas de pagamento**: o site manda consultar a equipe. Se quiser listar, informe as formas reais.
- [ ] **Medicamentos com receita**: revisar o texto do FAQ com o farmacêutico responsável, para refletir a prática real (receita, retenção etc.) e a legislação da Anvisa.
- [ ] **Política de privacidade**: pedir revisão a um advogado ou especialista em LGPD. Confirmar especialmente as frases sobre: não venda de dados, acesso restrito às conversas, uso de entregador e prestadores contábeis, e prazos de retenção (hoje descritos de forma geral, sem prazos inventados).
- [ ] **Encarregado (DPO)**: a política diz que não há encarregado formalmente indicado. Se houver, atualizar.
- [ ] **Nome do provedor de hospedagem** (ex.: Cloudflare): se quiser nomeá-lo na política, adicionar ao item 8.
- [ ] **Data da política**: hoje consta 27 de outubro de 2026; atualizar quando revisada.
- [ ] **Redes sociais**: só incluir links depois de confirmar os endereços oficiais.
- [ ] **Arte de entrega**: não recebida. Se for usada, conferir se contém promessas (preço, prazo, “grátis”) e escrever o texto alternativo da imagem.
- [ ] **Logo em alta resolução**: a enviada tem 160 × 144 px. Pedir arquivo maior, mantendo o mesmo desenho.
- [ ] **Domínio**: trocar `SEU-DOMINIO.com.br` em `index.html`, `privacidade.html`, `robots.txt` e `sitemap.xml`.
- [ ] **Horário, preços, avaliações, coordenadas**: não aparecem no site, de propósito.

## B. Testes

### Executados em ambiente de teste (Chromium automatizado, larguras 320, 390, 768 e 1366 px)

- [x] Links de WhatsApp: todos apontam para `https://wa.me/5521965339215`; o botão “Iniciar conversa” usa a mensagem inicial sugerida (sem dados de saúde). `target="_blank"` com `rel="noopener noreferrer"`.
- [x] Link do Google Maps: igual ao informado no briefing.
- [x] Menu móvel: começa fechado, abre, fecha com Esc e ao clicar em um link; `aria-expanded` atualizado. No desktop o menu fica visível.
- [x] FAQ: 6 perguntas, abrem e fecham.
- [x] Âncoras internas: nenhuma quebrada. Link “Política de Privacidade” do rodapé abre `privacidade.html` (15 seções).
- [x] Sem rolagem horizontal em 320, 390, 768 e 1366 px (home, privacidade e 404).
- [x] Console sem erros nas páginas reais (o único aviso veio de uma URL inexistente, aberta de propósito para testar a 404).
- [x] Nenhuma requisição a domínios externos antes do clique no mapa; nenhum cookie; `localStorage` vazio.
- [x] Mapa: o iframe só é criado após clicar em “Carregar mapa”.
- [x] Teclado: o primeiro Tab vai para “Ir para o conteúdo”; foco visível definido em CSS.
- [x] Imagens com `alt`; CNPJ visível no rodapé; ano do rodapé gerado por JavaScript.
- [x] Movimento reduzido respeitado (rolagem suave desativada) e menu utilizável sem JavaScript.
- [x] Política de Content-Security-Policy do `_headers` aplicada no servidor de teste, sem violações.

### Ainda precisam ser feitos por você (não foi possível executar aqui)

- [ ] Abrir o site em celulares reais (Android e iPhone) e tocar nos botões de WhatsApp.
- [ ] **Mapa do Google**: o ambiente de teste não tem internet, então só foi verificado que o iframe é criado com o endereço correto. Clique em “Carregar mapa” no site publicado e confira se o pino cai no estabelecimento. Se não cair, o botão “Ver rota no Google Maps” continua válido.
- [ ] Testar com leitor de tela (TalkBack, VoiceOver ou NVDA) e navegar só pelo teclado.
- [ ] Rodar o Lighthouse (Chrome → F12 → Lighthouse) e o validador <https://validator.w3.org/>.
- [ ] Conferir a prévia ao compartilhar o link no WhatsApp (depois de trocar o domínio).
- [ ] Testar HTTPS (cadeado) e o domínio próprio, se houver.
- [ ] Enviar `sitemap.xml` no Google Search Console, se quiser acelerar a indexação.
