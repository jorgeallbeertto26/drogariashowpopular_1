# Site da Drogaria Show Popular

Landing page estática (HTML, CSS e JavaScript puros). Sem backend, sem banco de dados, sem cookies, sem rastreadores e sem dependências pagas.

## O que tem na pasta

| Arquivo / pasta | Para que serve |
|---|---|
| `index.html` | Página principal |
| `privacidade.html` | Política de Privacidade (LGPD) |
| `404.html` | Página de erro (Cloudflare Pages e GitHub Pages usam automaticamente) |
| `css/style.css` | Todo o visual (cores no topo do arquivo, em `:root`) |
| `css/noscript.css` | Só carrega se o visitante estiver sem JavaScript |
| `js/main.js` | Menu do celular, ano do rodapé e botão “Carregar mapa” |
| `assets/logo-drogaria-show-popular.png` | **Logo original, byte a byte idêntica à enviada** (não editar) |
| `assets/icons/`, `favicon.ico` | Ícones do navegador, gerados só por redimensionamento da logo |
| `assets/og-image.jpg` | Imagem de prévia ao compartilhar o link |
| `assets/fonts/` | Fonte Poppins (licença SIL OFL), hospedada junto com o site para não chamar o Google Fonts |
| `robots.txt`, `sitemap.xml` | Ajudam o Google a indexar |
| `_headers` | Cabeçalhos de segurança (Cloudflare Pages) |
| `CHECKLIST-PUBLICACAO.md` | O que validar antes de publicar |

## Antes de publicar: 3 ajustes obrigatórios

1. **Trocar o endereço do site.** Os arquivos `index.html`, `privacidade.html`, `robots.txt` e `sitemap.xml` usam o marcador `https://SEU-DOMINIO.com.br`. Use “Localizar e substituir” do seu editor de texto (Bloco de Notas++, VS Code etc.) para trocar `SEU-DOMINIO.com.br` pelo endereço real (por exemplo, o `.pages.dev` que a Cloudflare gerar, ou o domínio próprio). Faça isso depois de saber o endereço; pode publicar e ajustar na segunda versão.
2. **Validar o CNPJ e os dados** (veja `CHECKLIST-PUBLICACAO.md`). O CNPJ aparece no rodapé como foi informado.
3. **Arte de entrega.** O arquivo da arte não chegou, então a seção “Entregas” usa um quadro de texto. No `index.html`, procure por `ARTE DE ENTREGA` e siga o comentário para colocar a imagem.

## Ver o site no seu computador

- Mais simples: dê dois cliques em `index.html`.
- Com servidor local (recomendado para testar como será online): abra o terminal na pasta e rode `python3 -m http.server 8000`, depois acesse `http://localhost:8000`.

## Como mudar textos, cores e dados

- **Textos:** edite `index.html` (ou `privacidade.html`) em qualquer editor de texto.
- **Cores:** bloco `:root` no começo de `css/style.css` (`--red`, `--yellow`, `--ink` etc.).
- **WhatsApp:** o número aparece como `5521965339215` nos links `https://wa.me/...`. Para trocar, use localizar e substituir.
- **Logo:** não edite, distorça ou recrie. Se receber uma versão em alta resolução, substitua o arquivo em `assets/` mantendo o mesmo nome. A logo atual tem 160 × 144 px, por isso ela aparece em tamanho pequeno no site (nítida em telas comuns, mas uma versão maior melhoraria a qualidade em telas de alta densidade).
- **Cabeçalho e rodapé escuros:** a logo tem fundo `#0C1014`; por isso cabeçalho e rodapé usam essa mesma cor, para a logo se integrar sem alteração. O conteúdo do site continua em fundo branco.

## Hospedagem gratuita recomendada: Cloudflare Pages (upload direto)

Escolhida por ser a mais simples para iniciantes: **não precisa de GitHub, nem de terminal**, aceita domínio próprio e dá HTTPS automático. Os limites do plano gratuito (conferidos na documentação da Cloudflare): até 20.000 arquivos por site, 25 MiB por arquivo e 100 domínios personalizados por projeto. Este site tem poucos arquivos e pesa menos de 1 MB.

> A Cloudflare muda os nomes dos menus de vez em quando. Se algo estiver com outro nome, procure por “Workers & Pages” → “Pages” → “Direct Upload” na documentação: <https://developers.cloudflare.com/pages/>.

### 1. Criar a conta
1. Acesse <https://dash.cloudflare.com/sign-up>.
2. Informe e-mail e senha, e confirme o e-mail que a Cloudflare enviar.
3. Não é necessário cadastrar cartão para o plano gratuito.

### 2. Enviar os arquivos e publicar
1. No painel, entre em **Workers & Pages** e escolha **Create** → **Pages** → **Upload assets** (upload direto).
2. Dê um nome ao projeto (por exemplo, `drogaria-show-popular`). Esse nome vira parte do endereço.
3. Envie a **pasta do site** (ou o `.zip`, se a opção aceitar). O `index.html` precisa estar na raiz do que for enviado.
4. Clique em **Deploy**.

### 3. Endereço público
Ao terminar, a Cloudflare mostra o endereço no formato `https://nome-do-projeto.pages.dev`. Já vem com HTTPS. Troque `SEU-DOMINIO.com.br` pelo endereço (item “3 ajustes”) e envie de novo.

### 4. Domínio próprio (opcional, **pode ter custo**)
Hospedagem gratuita **não** inclui domínio. O registro de um domínio como `.com.br` é pago (renovação anual, em registradores como o Registro.br). Eu não registrei nem contratei nada.

Se já existe um domínio:
1. No projeto, abra **Custom domains** → **Set up a custom domain** e digite o domínio.
2. A Cloudflare mostra o que configurar no DNS. Para domínio raiz (`seudominio.com.br`), costuma ser necessário apontar os **servidores de nomes (nameservers)** do domínio para a Cloudflare, no painel de onde o domínio foi registrado. Para subdomínio (`www.seudominio.com.br`), geralmente basta um registro **CNAME** apontando para `nome-do-projeto.pages.dev`.
3. Aguarde a propagação (de minutos a algumas horas).

### 5. HTTPS
É ativado automaticamente pela Cloudflare (certificado gratuito), tanto no `.pages.dev` quanto no domínio próprio. Se o domínio ficar “pendente”, normalmente é a propagação do DNS. Teste abrindo o site com `https://` e verificando o cadeado.

### 6. Atualizar o site depois
1. Edite os arquivos no seu computador.
2. No painel, entre no projeto → **Create deployment** (novo upload) e envie a pasta atualizada.
3. Cada envio cria uma versão nova; a anterior fica no histórico e pode ser restaurada.

## Alternativa: GitHub Pages
Também gratuito e aceita domínio próprio, mas exige conta no GitHub e noções de repositório. Em repositórios gratuitos, o site e o código ficam públicos. Passos: criar repositório → enviar os arquivos → **Settings → Pages** → escolher a branch → configurar o domínio em **Custom domain** e marcar **Enforce HTTPS**. O arquivo `_headers` não funciona no GitHub Pages (não há problema em mantê-lo).

## Como o site trata privacidade (resumo técnico)
- Sem cookies, `localStorage`, analytics, pixels ou fontes externas. Por isso **não há banner de cookies**.
- O único recurso de terceiro é o mapa do Google, carregado **somente depois do clique** em “Carregar mapa”. Isso está descrito na política de privacidade.
- Se um dia você instalar Google Analytics, Meta Pixel, chat de terceiros ou similar, será preciso: atualizar `privacidade.html`, adicionar um mecanismo de consentimento (aceitar, rejeitar e configurar) e só carregar o rastreador depois do aceite.

## Licenças
Fonte Poppins: SIL Open Font License 1.1 (uso livre, inclusive comercial). A logo é da Drogaria Show Popular.
