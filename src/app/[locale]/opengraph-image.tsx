import { ImageResponse } from 'next/og';

export const alt = 'Valeriia Petropavlovska — Product-minded Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// English text for both locales: the default OG font has no Cyrillic glyphs.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '80px', color: 'white',
          background: 'linear-gradient(135deg, rgb(10, 31, 148) 0%, rgb(0, 17, 53) 60%)',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700 }}>Valeriia Petropavlovska</div>
        <div style={{ fontSize: 40, marginTop: 24, opacity: 0.85 }}>Product-minded frontend developer</div>
        <div style={{ fontSize: 32, marginTop: 12, color: '#34c7f8' }}>From idea to launched product · Next.js · SEO</div>
      </div>
    ),
    size,
  );
}
