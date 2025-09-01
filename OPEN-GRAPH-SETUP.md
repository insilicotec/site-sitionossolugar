# 🔗 Configuração do Preview de Links (Open Graph)

## ✅ Mudanças Realizadas

- ❌ **Removida**: Imagem de praia do Unsplash
- ✅ **Adicionada**: Imagem `og-image.jpg` para preview dos links
- ✅ **Configuradas**: Meta tags Open Graph e Twitter Card completas

## 🧪 Como Testar

### 1. **Teste Local**

```bash
# Acesse diretamente a imagem:
http://localhost:8081/og-image.jpg
```

### 2. **Teste em Produção**

```bash
# Substitua pela URL do seu site:
https://seu-site.com/og-image.jpg
```

### 3. **Validadores Online**

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## 🔧 Soluções se Ainda não Funcionar

### Problema 1: Imagem não carrega

```bash
# Verifique se existe:
ls public/og-image.jpg

# Se não existir, copie uma imagem:
cp public/lovable-uploads/[alguma-imagem].jpg public/og-image.jpg
```

### Problema 2: Cache das redes sociais

```bash
# Limpe o cache usando os validadores acima
# Ou adicione parâmetro de versão na URL:
/og-image.jpg?v=2
```

### Problema 3: URL absoluta necessária

```html
<!-- Substitua nas meta tags por URL completa: -->
<meta property="og:image" content="https://seu-dominio.com/og-image.jpg" />
```

## 📋 Checklist Final

- [ ] ✅ Imagem carrega em `/og-image.jpg`
- [ ] ✅ Meta tags configuradas no `index.html`
- [ ] ✅ Deploy realizado
- [ ] ⏳ Testado em validadores
- [ ] ⏳ Preview funcionando nas redes sociais

## 🎨 Melhorias Futuras

Para um preview ainda melhor, crie uma imagem com:

- **Dimensões**: 1200x630px
- **Conteúdo**: Logo + "Sítio Nosso Lugar" + frase de impacto
- **Formato**: JPG ou PNG
- **Tamanho**: Máximo 8MB

---

_Atualizado em: 8 de junho de 2025_
