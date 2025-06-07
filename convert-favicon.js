import sharp from 'sharp';

async function convertToIco() {
  try {
    const inputFile = 'public/lovable-uploads/c50697da-7566-40b0-92fa-8c29cca1201a.png';
    
    // Criar favicon de 16x16
    await sharp(inputFile)
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');
    
    // Criar favicon de 32x32
    await sharp(inputFile)
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');
    
    // Criar favicon de 48x48 para qualidade melhor
    await sharp(inputFile)
      .resize(48, 48)
      .png()
      .toFile('public/favicon-48x48.png');
    
    console.log('✅ Favicons criados com sucesso!');
    console.log('📁 Arquivos criados:');
    console.log('  - favicon-16x16.png');
    console.log('  - favicon-32x32.png');
    console.log('  - favicon-48x48.png');
  } catch (error) {
    console.error('❌ Erro ao converter favicon:', error);
  }
}

convertToIco();
