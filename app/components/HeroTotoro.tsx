'use client';

import { useEffect, useState } from 'react';

const PHRASES = [
  '공부해 CK!',
  '집중해 CK!',
  '오늘도 화이팅!',
  '힘내 CK!',
  '노트 정리하자!',
  '쉬지 마 CK!',
  '한 문단만 더!',
];

interface Props {
  initial: string;
  all: string[];
}

export default function HeroTotoro({ initial, all }: Props) {
  const [src, setSrc] = useState(initial);
  const [phrase, setPhrase] = useState(PHRASES[0]);

  useEffect(() => {
    if (all.length > 1) {
      setSrc(all[Math.floor(Math.random() * all.length)]);
    }
    setPhrase(PHRASES[Math.floor(Math.random() * PHRASES.length)]);
  }, [all]);

  return (
    <div className="hero-totoro">
      <img className="hero-totoro-img" src={src} alt="토토로" />
      <div className="speech-bubble" role="img" aria-label={phrase}>
        {phrase}
      </div>
    </div>
  );
}
