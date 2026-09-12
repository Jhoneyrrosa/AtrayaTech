This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Abertura controlada pelo scroll

`components/AtrayaScene.tsx` desenha as três cenas em um canvas, na ordem
scene-01 → scene-02 → scene-03, conforme a rolagem nativa. A abertura ocupa
450svh e oferece um link para pular diretamente para a seção Sobre.
Com movimento reduzido, ou sem JavaScript, permanece uma abertura estática.

As sequências em `public/sequences` têm 1280×720, 12 frames por segundo e
qualidade WebP 75: 120, 96 e 120 frames. Os MP4 em `public/videos` são as fontes
originais e não devem ser sobrescritos. Para gerar cada sequência em uma pasta
vazia, usando FFmpeg no PATH:

```powershell
foreach ($scene in @('scene-01', 'scene-02', 'scene-03')) {
  New-Item -ItemType Directory -Force "public/sequences/$scene"
  ffmpeg -n -i "public/videos/$scene.mp4" -an -vf 'fps=12,scale=1280:-2' -c:v libwebp -quality 75 -compression_level 4 "public/sequences/$scene/frame-%04d.webp"
}
```

Se as durações ou a taxa de extração mudarem, atualize as contagens em
`scenes` no componente. O carregamento limita a seis requisições simultâneas
e mantém até 36 imagens decodificadas em cache; as sequências completas não
são baixadas na abertura da página.
