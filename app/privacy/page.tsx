import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '개인정보처리방침',
  description: 'CK Study Notes 개인정보처리방침 - 개인정보 수집, 이용, 보호에 관한 안내',
};

export default function PrivacyPage() {
  return (
    <div className="static-page">
      <h1>개인정보처리방침</h1>
      <p className="page-updated">최종 수정일: 2026년 4월 12일</p>

      <p>
        CK Study Notes(이하 &ldquo;본 사이트&rdquo;)는 이용자의 개인정보를 중요시하며,
        개인정보 보호법 등 관련 법령을 준수합니다. 본 개인정보처리방침은 본 사이트가
        수집하는 정보의 종류, 이용 목적, 보호 방법 등을 안내합니다.
      </p>

      <h2>1. 수집하는 정보</h2>
      <p>본 사이트는 별도의 회원가입 절차 없이 운영되며, 다음과 같은 정보가 자동으로 수집될 수 있습니다.</p>
      <ul>
        <li>방문 기록 (접속 일시, 페이지 조회 기록)</li>
        <li>기기 정보 (브라우저 종류, 운영체제, 화면 해상도)</li>
        <li>IP 주소</li>
        <li>쿠키 (Cookie) 정보</li>
      </ul>

      <h2>2. 쿠키(Cookie) 사용</h2>
      <p>
        본 사이트는 이용자의 편의 및 서비스 개선을 위해 쿠키를 사용합니다.
        쿠키는 웹사이트가 이용자의 브라우저에 저장하는 작은 텍스트 파일로,
        웹사이트 이용 환경을 개선하는 데 사용됩니다.
      </p>
      <p>이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 일부 서비스 이용에 제한이 있을 수 있습니다.</p>

      <h2>3. Google 광고 및 분석 서비스</h2>
      <p>본 사이트는 다음과 같은 Google 서비스를 사용합니다.</p>

      <h3>Google AdSense</h3>
      <p>
        본 사이트는 Google AdSense를 통해 광고를 게재합니다. Google AdSense는
        이용자의 관심사에 기반한 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
        Google은 이용자의 방문 기록을 바탕으로 적절한 광고를 표시합니다.
      </p>
      <ul>
        <li>Google의 광고 쿠키 사용에 대한 자세한 내용은{' '}
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
            Google 광고 정책
          </a>을 참조하세요.
        </li>
        <li>맞춤 광고를 원하지 않는 경우{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
            Google 광고 설정
          </a>에서 비활성화할 수 있습니다.
        </li>
      </ul>

      <h3>제3자 광고 네트워크</h3>
      <p>
        Google을 포함한 제3자 광고 네트워크는 이용자가 이전에 방문한 웹사이트를 기반으로
        광고를 게재할 수 있습니다. 이용자는{' '}
        <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">
          Network Advertising Initiative 옵트아웃 페이지
        </a>를 통해 제3자 쿠키 사용을 거부할 수 있습니다.
      </p>

      <h2>4. 개인정보의 이용 목적</h2>
      <p>수집된 정보는 다음 목적으로 이용됩니다.</p>
      <ul>
        <li>웹사이트 운영 및 서비스 제공</li>
        <li>이용 통계 분석 및 서비스 개선</li>
        <li>광고 게재 및 최적화</li>
      </ul>

      <h2>5. 개인정보의 보관 및 파기</h2>
      <p>
        자동 수집되는 로그 정보는 서비스 운영에 필요한 기간 동안 보관되며,
        보관 기간이 경과한 후에는 지체 없이 파기합니다.
      </p>

      <h2>6. 이용자의 권리</h2>
      <p>이용자는 다음과 같은 권리를 행사할 수 있습니다.</p>
      <ul>
        <li>브라우저 설정을 통한 쿠키 저장 거부</li>
        <li>Google 광고 설정을 통한 맞춤 광고 비활성화</li>
        <li>개인정보 관련 문의 및 삭제 요청</li>
      </ul>

      <h2>7. 개인정보 보호책임자</h2>
      <p>
        개인정보 처리에 관한 문의, 불만 또는 피해 구제는 아래 연락처로 문의해 주세요.
      </p>
      <ul>
        <li><strong>운영자:</strong> CK</li>
        <li><strong>이메일:</strong>{' '}
          <a href="mailto:iamlazyck02@gmail.com">iamlazyck02@gmail.com</a>
        </li>
      </ul>

      <h2>8. 개인정보처리방침 변경</h2>
      <p>
        본 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 수정될 수 있습니다.
        변경 사항은 본 페이지에 게시하며, 중요한 변경 사항이 있을 경우 사이트를 통해
        공지합니다.
      </p>
    </div>
  );
}
