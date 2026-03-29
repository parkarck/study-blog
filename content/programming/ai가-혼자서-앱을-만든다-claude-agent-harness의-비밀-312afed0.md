---
title: AI가 혼자서 앱을 만든다? Claude Agent Harness의 비밀
category: programming
date: 2026-03-29
source_url: https://youtu.be/FKBNZ4OJxlc
status: 완료
---

# AI가 혼자서 앱을 만든다? Claude Agent Harness의 비밀

**Category:** programming

**Source:** [https://youtu.be/FKBNZ4OJxlc](https://youtu.be/FKBNZ4OJxlc)

---

## 1. 핵심 주제



### AI가 혼자서 앱을 만든다? Claude Agent Harness의 비밀

- **AI ON**: Anthropic의 Agent Harness 아키텍처 소개

- **핵심 문제**: LLM은 한 번의 프롬프트로는 작업하지만, 세션 간 기억을 못 함 (Long-term memory 부족)

- **해결책**: 여러 AI 에이전트가 협력하여 긴 시간 작업을 수행하는 시스템



## 2. 문제 정의



### 2.1 LLM의 한계

- **Claude.ai 같은 LLM:** 질문에 답하고 코드를 작성하는 것은 가능하지만, 긴 프로젝트(설정->코딩->테스트->배포)를 완성하기 어려움

- **기억 부족 (Memory Limit):** 세션이 끊기면 이전 맥락이나 작업 내용을 잊어버림 (Context window 한계)

- **일회성 작업:** "앱 하나 만들어줘"라는 명령으로는 전체 앱을 한 번에 만들 수 있지만, 실제로는 단계별로 나누어야 함



## 3. 해결책: Agent Harness (에이전트 하네스)



### 3.1 개요

- **Anthropic의 Agent Harness:** 여러 AI 에이전트가 협력하여 목표를 달성하는 프레임워크

- **Long-running Execution:** 긴 시간(시간~수일)에 걸친 작업을 여러 세션에 나누어 수행

- **Short-term Memory:** 에이전트 간 단기 기억(채팅 기록 등)을 공유하여 맥락 유지



### 3.2 아키텍처 구조

1. **Project Manager:** 전체 계획, 작업 목록 생성

2. **Worker Agents:** 코딩, 테스트, 문서화 등 각 작업 담당

3. **Memory System:** 단기 기억 저장 및 공유

4. **Repository:** 파일 저장, 깃허브(Git) 업로드



## 4. 핵심 원칙



- **Decomposition:** 큰 목표(앱 개발)를 작은 단위로 분해

- **Coordination:** 에이전트 간 협업 및 정보 공유

- **Persistence:** 세션 간 작업 상태 저장

- **Verification:** 테스트를 통해 결과 검증



---

*참고: 위 내용은 영상의 핵심 요약입니다.*

