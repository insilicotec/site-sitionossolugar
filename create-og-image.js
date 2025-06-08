// Script para criar uma imagem Open Graph otimizada
// Execute com: node create-og-image.js

const fs = require('fs');
const path = require('path');

console.log('🔧 Para criar uma imagem Open Graph otimizada:');
console.log('');
console.log('1. Dimensões ideais: 1200x630 pixels');
console.log('2. Formato: PNG ou JPG');
console.log('3. Tamanho máximo: 8MB');
console.log('4. Proporção: 1.91:1');
console.log('');
console.log('💡 Sugestão: Use o Canva ou Figma para criar uma versão da logo');
console.log('   com fundo colorido e texto "Sítio Nosso Lugar" para melhor preview');
console.log('');
console.log('📁 Salve como: public/og-image.png');
console.log('');

// Verificar se a logo atual existe
const logoPath = path.join(__dirname, 'public', 'sitio-logo.png');
if (fs.existsSync(logoPath)) {
    const stats = fs.statSync(logoPath);
    console.log(`✅ Logo atual encontrada: ${(stats.size / 1024).toFixed(2)}KB`);
} else {
    console.log('❌ Logo não encontrada em public/sitio-logo.png');
}
