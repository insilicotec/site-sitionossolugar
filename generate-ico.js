import sharp from 'sharp';
import fs from 'fs';

async function generateIco() {
  try {
    const inputFile = 'public/lovable-uploads/c50697da-7566-40b0-92fa-8c29cca1201a.png';
    
    // Criar um favicon.ico de 32x32 (formato mais comum)
    const buffer = await sharp(inputFile)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    // Como o Sharp não suporta ICO diretamente, vamos criar um PNG de 32x32 e renomear
    fs.writeFileSync('public/favicon.ico', buffer);
    
    console.log('✅ favicon.ico criado com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao criar favicon.ico:', error);
  }
}

generateIco();
