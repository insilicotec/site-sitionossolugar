# Arquitetura do Projeto - Sítio Nosso Lugar

## Visão Geral da Refatoração

Este documento detalha a arquitetura implementada na **Fase 2** do projeto de refatoração, focando na adoção do **Design Atômico (Atomic Design)** para melhorar a organização, reutilização e manutenibilidade dos componentes.

## Estrutura de Componentes

### 🔬 Atomic Design Structure

```
src/components/
├── atoms/           # Componentes básicos e indivisíveis
├── molecules/       # Combinações de átomos
├── organisms/       # Estruturas complexas de moléculas
├── templates/       # Layouts de páginas
└── pages/          # Páginas específicas (não implementado ainda)
```

### ⚛️ Atoms (Átomos)

#### Logo Components
- **`Logo.tsx`** - Componente básico de logo (original)
- **`EnhancedLogo.tsx`** - Logo avançado com múltiplas variantes
  - Variantes: `navbar`, `hero`, `footer`
  - Tamanhos: `xs`, `sm`, `md`, `lg`, `xl`
  - Suporte a interatividade e texto

#### Typography System
- **`Typography.tsx`** - Sistema tipográfico unificado
  - Elementos: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`
  - Variantes semânticas com classes Tailwind consistentes

#### Layout Atoms
- **`Container.tsx`** - Container responsivo com padding consistente
- **`Icon.tsx`** - Wrapper para ícones com sizes padronizados

#### Interactive Atoms
- **`MobileMenuButton.tsx`** - Botão hamburger com animação suave

### 🧬 Molecules (Moléculas)

#### Navigation
- **`NavigationLink.tsx`** - Links de navegação com estados hover/active
  - Suporte a links internos (React Router) e externos
  - Estados visuais para página atual

#### UI Elements
- **`FeatureCard.tsx`** - Cards de funcionalidades/características
- **`CTAButton.tsx`** - Call-to-action buttons com múltiplas variantes
  - Variantes: `primary`, `secondary`, `outline`
  - Tamanhos: `sm`, `md`, `lg`
  - Suporte a ícones e links externos

### 🦠 Organisms (Organismos)

#### Hero Section Components
- **`HeroContent.tsx`** - Conteúdo principal do hero (título, subtítulo, botões)
- **`HeroFeatures.tsx`** - Grid de características destacadas

#### Refatoração do HeroSection
O componente original de **92 linhas** foi refatorado em:
- **HeroSection.tsx** (nova versão): 39 linhas
- **HeroContent.tsx**: Responsável pelo conteúdo central
- **HeroFeatures.tsx**: Grid de características

### 📄 Templates

#### Page Layouts
- **`PageTemplate.tsx`** - Template base para páginas
  - Animações de entrada/saída com Framer Motion
  - Suporte a título/subtítulo automáticos
  - Background gradient padrão

- **`Section.tsx`** - Template para seções de conteúdo
  - Variantes: `default`, `accent`, `dark`
  - Tamanhos: `sm`, `md`, `lg`, `xl`
  - Opções de centralização e divisores

## Design System

### 🎨 Design Tokens (`tokens.ts`)

#### Colors System
```typescript
colors: {
  primary: {
    50: '#fffbeb', 100: '#fef3c7', ..., 900: '#78350f'
  },
  accent: {
    50: '#f9fafb', 100: '#f3f4f6', ..., 900: '#111827'
  }
}
```

#### Typography Scale
```typescript
fontSize: {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  // ... até 9xl
}
```

#### Spacing System
- Consistent spacing scale (4px base unit)
- Container max-widths responsivos
- Z-index layering system

## Arquitetura de Arquivos

### Organização por Funcionalidade

```
src/
├── assets/constants/     # Constantes organizadas
│   ├── contacts.ts      # Informações de contato
│   ├── images.ts        # Caminhos de imagens
│   └── navigation.ts    # Dados de navegação
├── components/          # Componentes atomic design
├── design-system/       # Tokens e sistema de design
├── lib/                # Utilitários e configurações
├── services/           # Lógica de negócio
└── types/             # Definições TypeScript
```

### Centralização de Constantes

#### Antes (Espalhado)
- Hardcoded values nos componentes
- URLs e textos duplicados
- Difícil manutenção

#### Depois (Centralizado)
- **`CONTACT_INFO`** - Todos os contatos em um local
- **`HERO_IMAGES`**, **`LOGO_ASSETS`** - Assets organizados
- **`MAIN_NAVIGATION`**, **`FEATURE_HIGHLIGHTS`** - Navegação padronizada

## Benefícios da Refatoração

### 🚀 Performance
- **Code splitting** natural pela estrutura atômica
- Componentes menores e focados
- Melhor tree-shaking

### 🔧 Manutenibilidade
- Componentes com **responsabilidade única**
- Redução de código duplicado
- Facilidade para testes unitários

### 🎨 Consistência
- Design tokens garantem padronização visual
- Typography system unificado
- Spacing e cores consistentes

### 👥 Escalabilidade
- Estrutura clara para novos desenvolvedores
- Componentes reutilizáveis entre páginas
- Documentação integrada com TypeScript

## Próximos Passos (Fase 3)

### Components to Refactor
1. **Navbar** - Aplicar navigation molecules
2. **Footer** - Quebrar em atoms/molecules
3. **Forms** - ReservationForm, PartnershipForm
4. **Galleries** - PhotoGallery, VideoGallery, CarouselGallery

### Features to Implement
1. **Page Templates** - Aplicar PageTemplate nas rotas
2. **Form System** - Atomic form components
3. **Loading States** - Skeleton atoms
4. **Error States** - Error boundary templates

## Conclusão

A **Fase 2** estabeleceu uma base sólida com:
- ✅ Atomic Design Structure
- ✅ Design Token System  
- ✅ Hero Section Refactored
- ✅ Enhanced Logo System
- ✅ Navigation Components
- ✅ Template System
- ✅ TypeScript Integration

O projeto agora possui uma arquitetura escalável e mantível, pronta para as próximas fases de desenvolvimento.
