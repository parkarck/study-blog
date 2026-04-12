---json
{"title": "Chat Agents in Sigma: From Insight to Action with Sigma Agents | Workflow Session", "category": "web-dev", "date": "2026-04-06", "source_url": "https://youtu.be/le8y-u4-K7A?si=sDLFu9w0ORiiDbyI", "status": "1차 복습"}
---

# Chat Agents in Sigma: From Insight to Action with Sigma Agents | Workflow Session

**Category:** web-dev

**Source:** [https://youtu.be/le8y-u4-K7A?si=sDLFu9w0ORiiDbyI](https://youtu.be/le8y-u4-K7A?si=sDLFu9w0ORiiDbyI)

**Date:** 2026-04-06

---

## Description

# Chat Agents in Sigma: From Insight to Action with Sigma Agents | Workflow Session

## 1. 핵심 주제
Sigma 에이전트의 기능을 통해 데이터 보고에서 운영으로의 전환을 지원하는 방법을 학습합니다. 이 세션은 Sigma 내에서 에이전트를 사용하여 업무 흐름을 자동화하고 효율성을 극대화하는 방법을 설명합니다.

## 2. 주요 개념 정리

### Sigma Agent 정의
- **구성 요소**: 지시사항, 데이터, 도구, 출력
- **주요 기능**: 운영 지향적 행동 수행, 데이터 기반 의사 결정, 시스템 내 보안 및 권한 관리

### Sigma Agent의 작동 원리
- **Trigger Modes**: 대화형 사용을 위한 채팅 UI, 자동화된 일정 실행, 수동 트리거
- **Cortex Agents/Genie Spaces**: 시맨틱 쿼리 수행
- **외부 통합**: MCP 서버, API, 웨어하우스 에이전트를 통한 통합

### Sigma Agent의 중요성
- **거버넌스**: 데이터 접근 및 실행에 대한 철저한 권한 관리
- **행동 지향성**: 자연어 쿼리를 넘어서 워크플로우 트리거, 알림 전송 및 에스컬레이션 수행

## 3. 세부 설명

### Sigma Agent의 구성 요소
1. **지시사항**: 에이전트의 행동을 정의하는 룰 세트
2. **데이터 접근**: 에이전트가 볼 수 있는 데이터 테이블 및 파일
3. **도구 사용**: SQL 쿼리 작성, MCP 호출, 웨어하우스 에이전트 조회
4. **출력**: 승인된 작업에 따라 웨어하우스에 기록

### Trigger Modes와 통합
- **대화형 사용**: 실시간 대화 인터페이스
- **자동화**: 정해진 일정에 따라 실행
- **수동 트리거**: 사용자가 직접 Sigma 워크북 버튼을 통해 실행

### Sigma Agent의 통합 아키텍처
- **데이터 관리**: Snowflake 쿼리 레이어와 통합하여 모든 데이터 접근이 거버넌스 하에 수행
- **외부 시스템과의 연결**: MCP 서버, API, 웹훅 등을 통한 통합

## 4. 예시 / 적용

### 사례: 지원 티켓 처리
- **문제**: 하루 500개의 비구조화된 지원 티켓 관리
- **해결책**: Sigma Agent가 티켓을 읽고 분류, 우선순위 결정, 에스컬레이션 수행
- **작업 흐름**:
  1. 티켓 읽기 및 분류
  2. 우선순위 결정 및 에스컬레이션
  3. Snowflake로 기록
  4. 알림 및 워크플로우 트리거

## 5. 시사점
- **자동화의 이점**: 반복적인 작업을 자동화하여 업무 효율성 증가
- **데이터 중심의 의사 결정**: 정확하고 신속한 데이터 기반 의사 결정 가능
- **보안 및 거버넌스 강화**: 데이터 접근 권한 및 기록 관리 강화

## 핵심 정리
- Sigma Agent는 데이터를 활용하여 운영을 자동화하는 도구입니다.
- 주요 구성 요소: 지시사항, 데이터, 도구, 출력
- 주요 기능: 데이터 기반 행동, 보안 및 거버넌스 유지
- Sigma 내에서 데이터와 통합된 자동화된 워크플로우 제공
- 예시로는 지원 티켓 처리 자동화가 있습니다.
- Sigma Agent를 통해 반복 작업의 자동화와 업무 효율성 증대를 기대할 수 있습니다.

---

## Timeline



---

Source: https://youtu.be/le8y-u4-K7A?si=sDLFu9w0ORiiDbyI
