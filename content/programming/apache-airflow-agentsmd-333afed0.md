---
title: "Apache Airflow AGENTS.md"
category: "programming"
date: "2026-03-30"
source_url: "https://github.com/apache/airflow/blob/main/AGENTS.md"
status: "완료"
---

# Apache Airflow AGENTS.md

**Category:** programming

**Source:** [https://github.com/apache/airflow/blob/main/AGENTS.md](https://github.com/apache/airflow/blob/main/AGENTS.md)

**Date:** 2026-03-30

---

AGENTS.md의 목적 — 자세히 풀어보면

1️⃣ “AI도 컨트리뷰터다”라는 전제 확립

Airflow는 명시적으로 **AI 에이전트도 기여 주체(contributor)**로 본다.



그래서 AGENTS.md는 README처럼 “참고용”이 아니라, 에이전트가 반드시 따라야 할 규칙 집합이다.



→ 사람이 지켜야 하는 Contributing Guide를 에이전트 전용으로 재구성한 문서라고 보면 된다. [apache.goo...source.com]

2️⃣ Breeze 중심 개발 프로세스를 정확히 인식시키는 것

Airflow 개발의 핵심은 **Breeze(Docker 기반 CI 재현 환경)**인데,



일반적인 AI 코딩 에이전트는:

• 로컬에서 테스트를 돌리거나

• CI와 다른 명령을 실행하거나

• host/container 구분 없이 명령을 섞어 쓰는 문제가 있음

AGENTS.md의 목적은 이걸 막는 것:

• ✅ 어디서(Breeze vs host)

• ✅ 무슨 명령을

• ✅ 어떤 순서로 실행해야 하는지

를 명확히 지정해서 CI와 동일한 경로만 허용한다. [apache.goo...source.com], [issues.apache.org]

3️⃣ “잘못된 자동화”로 인한 품질 저하 방지

Airflow는 규모가 큰 프로젝트라서,

AI가 “그럴듯한” 코드를 만들어도 다음 문제가 자주 발생함:

• 테스트 누락

• 정적 체크(prek) 미실행

• 문서 빌드 실패

• PR 규칙 위반 (merge, 커밋 메시지 등)

그래서 AGENTS.md의 목적은:AI가 생산성을 높이되, 품질을 낮추지 못하게 하는 것

즉,

• 자동화는 허용 ✅

• 지름길(shortcut)은 차단 ❌

이라는 철학이 깔려 있음. [apache.goo...source.com]

4️⃣ 에이전트 행동을 “사람 컨트리뷰터와 동일하게 표준화”

문서에서 반복적으로 강조되는 포인트는:

• prek를 기준으로 한 정적 분석

• Breeze 내부에서의 테스트 실행

• rebase 기반 PR 흐름

• 공식 문서 빌드 절차 준수

이건 전부 사람 컨트리뷰터에게 이미 요구되는 규칙인데,



AGENTS.md의 목적은 이를 AI에게도 동일하게 적용하는 거야. [apache.goo...source.com]

5️⃣ AGENTS.md는 “맥락 압축(context compression)” 역할

Jira(GSOC-329)에서도 명확히 언급되는데,



기존 문서들은:

• 분산돼 있고

• 사람이 읽기엔 좋지만

• 에이전트가 “행동”하기엔 비효율적임

그래서 AGENTS.md는:

• 에이전트에게 꼭 필요한 맥락만

• 한 곳에

• 행동 단위로 제공

하는 걸 목표로 함.



→ LLM 컨텍스트를 “늘리는” 게 아니라 정확하게 쓰게 만드는 목적이야. [issues.apache.org]

