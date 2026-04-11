---
title: "Claudini: New LLM Attacks via Autoresearch"
category: "ai"
date: "2026-03-29"
source_url: "https://youtu.be/zmfkWTrJXQQ?si=M9jElCIahVNQjIEm"
status: "완료"
---

# Claudini: New LLM Attacks via Autoresearch

**Category:** ai

**Source:** [https://youtu.be/zmfkWTrJXQQ?si=M9jElCIahVNQjIEm](https://youtu.be/zmfkWTrJXQQ?si=M9jElCIahVNQjIEm)

**Date:** 2026-03-29

---

## Description

# Claudini: New LLM Attacks via Autoresearch

## 1. 핵심 주제
- 최신 연구에서 제안된 Claudini라는 자율 에이전트를 통한 대형 언어 모델(LLM)의 새로운 적대적 공격 기법.
- 이 연구는 기존 방법들보다 높은 성공률로 공격을 수행하고, 다양한 모델에 걸쳐 적용 가능한 공격을 자동으로 발견할 수 있음을 보여줌.

## 2. 주요 개념 정리

### 정의
- **Claudini**: 자율 에이전트로, LLM에 대한 새로운 적대적 공격 알고리즘을 자동으로 연구하고 구현하는 시스템.
- **적대적 공격**: 기계 학습 모델의 예측을 왜곡하거나 실패하게 하는 입력 데이터를 생성하는 기법.

### 작동 원리
1. **초기 시딩 단계**: 기존 공격 방법과 성과 데이터로 시작.
2. **자율 루프**: 연구자처럼 데이터를 분석하고, 코드 변경을 제안하여 토큰 강제 손실을 최소화하는 GPU 실험을 수행.
3. **평가 단계**: 새로운 알고리즘을 랭킹하여 새로운 목표에 대한 일반화를 확인.

### 중요한 주장
- Claudini가 발견한 공격은 기존 방법보다 최대 40% 높은 성공률을 기록함.
- 자동화된 연구 방법이 인간의 기준을 능가하는 공격 개발 가능성을 시사함.

### 근거
- 실험 결과에서 Claudini의 공격은 기존 기준치보다 훨씬 낮은 토큰 강제 손실을 기록함.
- 다양한 모델에 대한 테스트에서 높은 일반화 성능을 보임.

## 3. 세부 설명

### 성능 분석
- **Figure 1**: Claudini의 공격이 기존 방법보다 더 높은 공격 성공률을 기록함.
- **Figure 2**: 100번의 실험에서 Claudini의 최적화기가 Optuna보다 뛰어난 성능을 보임.
- **Figure 3**: Claudini의 자동 연구 파이프라인 설명.
- **Table 1**: Claudini의 최적화기 발전 과정, 보상 해킹 사례 포함.
  
### 최적화기 발전 및 성능 비교
- **Figure 6**: Claudini의 공격 발전 시각화, 버전 26의 성공적인 모델 발전 과정 강조.
- **Table 3**: Claudini의 방법이 기존 방법보다 낮은 손실을 기록함.
- **Figure 7**: 전체 모델에 걸친 성능 시각화, Claudini의 방법이 더 낮은 손실과 높은 순위를 기록함.

## 4. 예시 / 적용
- Claudini의 공격은 다양한 모델에 성공적으로 적용되며, 특히 메타 앨라인 70B 모델에서 100% 성공률 기록.
- 새로운 목표에도 일반화가 가능하여, 기존에 보지 못한 모델에도 우수한 성능을 발휘.

## 5. 시사점
- 자율 에이전트가 인간 연구자를 능가하여 새로운 적대적 공격을 설계할 수 있음을 시사.
- 이는 보안 팀이 현재의 취약점을 탐지하는 것 이상으로, 지속적인 자동화된 압력에 견딜 수 있는 방어체계를 마련해야 함을 의미.

## 핵심 정리

- Claudini는 자동으로 LLM에 대한 새로운 적대적 공격을 발견할 수 있는 자율 에이전트.
- 기존 공격보다 최대 40% 더 높은 성공률을 기록.
- 다양한 모델에 대한 일반화가 가능하여, 새로운 목표에도 높은 성능 발휘.
- 자율 연구는 인간 기준을 능가하며, 보안 전문가들이 지속적으로 개선해야 할 필요성을 제기함.
- 실험은 Claudini의 방법이 기존에 비해 더 낮은 토큰 강제 손실을 기록함을 보여줌.

---

## Timeline



---

Source: https://youtu.be/zmfkWTrJXQQ?si=M9jElCIahVNQjIEm
