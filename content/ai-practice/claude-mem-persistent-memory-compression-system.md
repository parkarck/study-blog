---json
{"title": "Claude-Mem - Persistent Memory Compression System", "category": "ai-practice", "date": "2026-03-19", "source_url": "https://docs.claude-mem.ai/introduction", "status": "완료"}
---

# Claude-Mem - Persistent Memory Compression System

**Category:** ai-practice

**Source:** [https://docs.claude-mem.ai/introduction](https://docs.claude-mem.ai/introduction)

**Date:** 2026-03-19

---

## Description

# [Claude-Mem - Persistent Memory Compression System]

## 1. 핵심 주제
Claude-Mem은 Claude Code 환경에서 지속적인 메모리 압축 시스템을 제공하여 세션 간의 컨텍스트를 유지하고, 사용자에게 프로젝트의 연속성을 보장하는 시스템입니다.

## 2. 주요 개념 정리
- **Persistent Memory**: 세션 간의 컨텍스트를 유지하는 기능
- **Folder Context Files**: 프로젝트 폴더에 자동 생성된 `CLAUDE.md` 파일로 활동 타임라인 저장
- **Multilingual Modes**: 28개 언어 지원
- **Mode System**: 다양한 작업 모드 전환 (코드, 이메일 조사 등)
- **MCP Search Tools**: 자연어로 프로젝트 역사 검색
- **Web Viewer UI**: 실시간 메모리 스트림 시각화
- **Privacy Control**: `<private>` 태그로 민감한 콘텐츠 제외 가능
- **Automatic Operation**: 수동 개입 없이 자동 작동

## 3. 세부 설명
### 작동 원리
1. **세션 시작**: 이전 10개 세션의 컨텍스트를 주입
2. **사용자 프롬프트**: 세션 생성 및 사용자 프롬프트 저장
3. **도구 실행**: 관찰 내용 캡처 (읽기, 쓰기 등)
4. **작업자 프로세스**: Claude Agent SDK를 통해 학습 내용 추출
5. **세션 종료**: 요약 생성 및 다음 세션 준비

### 핵심 구성 요소
- **4 Lifecycle Hooks**: SessionStart, UserPromptSubmit, PostToolUse, Stop
- **Smart Install**: 의존성 확인을 위한 캐시된 스크립트
- **Worker Service**: Bun이 관리하는 HTTP API
- **SQLite Database**: 세션, 관찰, 요약 저장 및 FTS5 검색
- **Web Viewer UI**: 실시간 시각화 및 무한 스크롤

## 4. 예시 / 적용
- **예시**: 여러 프로젝트에 걸쳐 일관된 컨텍스트 유지하여 개발자의 작업 효율성 향상
- **적용**: 다양한 작업 모드 전환으로 여러 작업 흐름을 지원

## 5. 시사점
- **효율성 향상**: 지속적인 컨텍스트 유지로 사용자의 작업 흐름을 방해하지 않음
- **다양성 지원**: 다국어 및 다양한 모드 지원으로 글로벌 사용자 기반 확장 가능
- **개인정보 보호**: 민감한 정보의 선택적 저장으로 보안 강화

## 핵심 정리
- Claude-Mem은 세션 간 지속적인 컨텍스트 유지를 통해 사용자 작업 효율성을 극대화합니다.
- 자동 생성된 `CLAUDE.md` 파일로 프로젝트 활동을 기록합니다.
- 다국어 및 다양한 작업 모드를 지원하여 유연성을 제공합니다.
- `<private>` 태그를 사용한 개인정보 보호 기능을 탑재하고 있습니다.
- 자동 작동 시스템으로 수동 개입이 필요 없습니다.

---

## Timeline



---

Source: https://docs.claude-mem.ai/introduction
