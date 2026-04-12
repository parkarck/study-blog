---json
{"title": "notebooklm-py - NotebookLM Python API", "category": "programming", "date": "2026-03-24", "source_url": "https://github.com/teng-lin/notebooklm-py", "status": "완료"}
---

# notebooklm-py - NotebookLM Python API

**Category:** programming

**Source:** [https://github.com/teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py)

**Date:** 2026-03-24

---

## Description

# notebooklm-py - NotebookLM Python API

## 1. 핵심 개념
- **NotebookLM Python API:** 구글 AI 연구 도구 NotebookLM의 비공식 Python API
- **지원 방식:** Python API, CLI, AI 에이전트 통합(Claude Code, Codex, OpenClaw)
- **주의사항:** 비공식 라이브러리로 구글의 문서화되지 않은 API 사용

## 2. 주요 기능
- 노트북 관리(생성, 삭제, 이름 변경)
- 다양한 소스 추가(URL, YouTube, PDF, Google Drive 등)
- 채팅 및 연구 에이전트(웹/Drive)
- 콘텐츠 생성(오디오/비디오 오버뷰, 슬라이드, 퀴즈, 플래시카드, 인포그래픽, 마인드맵 등)
- 웹 UI에서 제공하지 않는 기능(일괄 다운로드, JSON/HTML 내보내기, PPTX 슬라이드 등)

## 3. 예시 적용
CLI: `notebooklm login` → `notebooklm create "Research"` → `notebooklm source add "url"` → `notebooklm ask "question"` → `notebooklm generate audio --wait` → `notebooklm download audio ./podcast.mp3`

Python API: `NotebookLMClient`로 노트북 생성, 소스 추가, 콘텐츠 생성을 비동기 방식으로 자동화

## 4. 시사점
- 연구 및 콘텐츠 생성 자동화로 생산성 향상
- 웹 UI를 넘어선 고급 기능 접근 가능
- 커뮤니티 주도 오픈소스 프로젝트의 잠재력

## 핵심 정리
비공식 Python API로 NotebookLM의 모든 기능에 프로그래밍 방식으로 접근 가능. CLI와 Python API 모두 지원하여 유연한 자동화 가능. 커뮤니티 주도 개발로 지속적인 확장 기대.

---

## Timeline



---

Source: https://github.com/teng-lin/notebooklm-py
