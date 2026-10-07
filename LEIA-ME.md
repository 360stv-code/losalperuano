# Lo Sal Peruano: guia de publicação

## 1. Antes de subir
- O domínio `losalperuano.com.br` já está configurado em todo o site e no arquivo `CNAME`.
- **GitHub Pages:** em Settings → Pages, marque Enforce HTTPS.
- **DNS no registro.br:** quatro registros A para 185.199.108.153, 185.199.109.153, 185.199.110.153 e 185.199.111.153, e um CNAME `www` apontando para `360stv-code.github.io`.
- **Clarity:** `grep -rl "CLARITY_ID" . | xargs sed -i 's/"CLARITY_ID");/"SEU_ID");/'`

## 2. Dados pendentes do cliente
- **História, fundadores e chef (EEAT).** O espaço está marcado em `/sobre/` com um comentário HTML.
- **Reserva.** Confirmar a política (antecedência, grupos).
- **Delivery.** Confirmar a plataforma (iFood, Rappi ou própria) e mandar o link.

## Multiunidade (já preparado)
- O schema tem `Organization` (#marca) com `subOrganization`, e cada `Restaurant` tem `parentOrganization` e `branchCode`.
- Para uma nova unidade: crie `/unidades/<bairro>/` com um `Restaurant` próprio (@id, endereço, horário, telefone e mapa), uma ficha separada no GMN e uma entrada no sitemap e no llms.txt.

## 3. Indexação
1. **Google Search Console:** adicione a propriedade de domínio, envie `sitemap.xml` e solicite a indexação das 8 URLs.
2. **Bing Webmaster Tools:** importe a propriedade do GSC. O Copilot e o ChatGPT Search usam o índice do Bing.
3. **Yandex Webmaster:** adicione o site e envie o sitemap.
4. **IndexNow.** A chave já está na raiz do site, no arquivo `a71254182cfbfcb58891ad5c2f1562e1.txt`. Comando:
```bash
D=https://losalperuano.com.br; K=a71254182cfbfcb58891ad5c2f1562e1
curl -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d "{\"host\":\"${D#https://}\",\"key\":\"$K\",\"keyLocation\":\"$D/$K.txt\",\"urlList\":[\"$D/\",\"$D/cardapio/\",\"$D/sobre/\",\"$D/contato/\",\"$D/blog/\",\"$D/blog/o-que-e-ceviche/\",\"$D/blog/lomo-saltado/\",\"$D/blog/pisco-sour/\"]}"
```
Repita a solicitação no GSC e o IndexNow sempre que publicar algo novo.

## 4. Google Meu Negócio (prioridade nº 1)
- **Site:** coloque `https://losalperuano.com.br/?utm_source=gmn` e cadastre o link do cardápio como `/cardapio/`.
- **Horários:** preencha todos os dias, incluindo os horários especiais de feriados.
- **Categoria principal:** Restaurante peruano. Secundárias: Restaurante de frutos do mar e Bar de coquetéis.
- **Atributos:** delivery, retirada, mesas externas, música ao vivo, vegetariano e menu infantil.
- **Fotos:** publique de 3 a 5 por semana (pratos, salão, fachada dentro do Mercado e equipe). Fotos reais têm muito peso no ranking local.
- **Posts semanais:** prato da semana, música ao vivo e novos drinks.
- **NAP:** nome, endereço e telefone devem ser idênticos no site, no GMN, no Instagram, no iFood e no TripAdvisor.

## 5. Avaliações (sem incentivos)
- Use o link curto de "Solicitar avaliação" do GMN em um QR code na mesa e na conta.
- Depois de cada pedido, mande pelo WhatsApp: "Obrigado pela visita! Se puder, conte como foi: [link]".
- Responda todas as avaliações em até 48 h, citando o prato ("Que bom que gostou do ceviche mixto!").
- É proibido oferecer desconto ou brinde em troca de avaliação.

## 6. Observação sobre o schema
A nota 4,9 com 642 avaliações aparece no texto da página e não foi marcada como `aggregateRating`. O Google proíbe marcar no próprio site notas vindas de outra plataforma, e estrelas autoatribuídas em LocalBusiness não geram rich result. As estrelas já aparecem pelo próprio GMN.
