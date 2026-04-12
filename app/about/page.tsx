import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCategories } from '@/lib/markdown';

export const metadata: Metadata = {
  title: '소개',
  description: 'CK Study Notes 블로그 소개 - 프로그래밍, AI, LLM 등 다양한 기술 주제의 공부 노트를 정리한 블로그입니다.',
};

export default function AboutPage() {
  const categories = getAllCategories();
  const totalPosts = categories.reduce((s, c) => s + c.count, 0);

  return (
    <div className="static-page">
      <h1>소개</h1>
      <p className="page-updated">About CK Study Notes</p>

      <h2>블로그 소개</h2>
      <p>
        CK Study Notes는 프로그래밍, AI, LLM, 보안, 서버 관리 등 다양한 기술 주제에 대한
        공부 노트를 정리하고 공유하는 기술 블로그입니다. Notion에 정리한 학습 내용을
        체계적으로 분류하여 누구나 쉽게 참고할 수 있도록 만들었습니다.
      </p>

      <h2>운영자</h2>
      <p>
        안녕하세요, CK입니다. 저는 소프트웨어 개발과 AI 기술에 관심이 많은 개발자로,
        꾸준히 새로운 기술을 학습하고 그 내용을 이 블로그에 기록하고 있습니다.
        학습한 내용을 정리하면서 저 자신의 이해를 깊게 하고, 동시에 같은 주제를
        공부하는 분들에게 도움이 되고자 이 블로그를 운영하고 있습니다.
      </p>

      <h2>다루는 주제</h2>
      <p>현재 {categories.length}개 카테고리에 걸쳐 총 {totalPosts}개의 글이 있습니다.</p>
      <ul>
        {categories.map(cat => (
          <li key={cat.slug}>
            <Link href={`/${cat.slug}`}>
              {cat.icon} {cat.name} ({cat.count}개의 글)
            </Link>
          </li>
        ))}
      </ul>

      <h2>콘텐츠 특징</h2>
      <ul>
        <li>실제 학습 과정에서 정리한 실용적인 노트</li>
        <li>프로그래밍 실습, AI 이론과 활용, 개발 도구 설정 가이드 등 다양한 주제</li>
        <li>한국어로 작성된 기술 콘텐츠</li>
        <li>정기적으로 새로운 글이 추가됩니다</li>
      </ul>

      <h2>연락처</h2>
      <p>
        블로그에 대한 문의, 제안, 또는 오류 제보는 아래 이메일로 연락해 주세요.
      </p>
      <p>
        <strong>이메일:</strong>{' '}
        <a href="mailto:iamlazyck02@gmail.com">iamlazyck02@gmail.com</a>
      </p>
    </div>
  );
}
