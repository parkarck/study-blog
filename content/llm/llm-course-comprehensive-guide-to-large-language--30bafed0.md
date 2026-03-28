---
title: "LLM Course: Comprehensive Guide to Large Language Models"
category: "LLM"
date: "2026-03-29"
source_url: "https://github.com/mlabonne/llm-course"
---

# LLM Course: Comprehensive Guide to Large Language Models

**Category:** LLM

**Source:** [https://github.com/mlabonne/llm-course](https://github.com/mlabonne/llm-course)

---

[LLM Course: Comprehensive Guide to Large Language Models]



이 코스는 대규모 언어 모델(LLM) 학습을 위한 포괄적인 가이드를 제공합니다. 수학, Python, 신경망 기초부터 최신 기술까지 3단계(LLM Fundamentals → LLM Scientist → LLM Engineer)로 구성되어 있습니다.



## 핵심 주제 정리



### 1. LLM Fundamentals (선택 사항)

- 수학: 선형대수, 미적분, 확률/통계가 머신러닝의 기초

- Python: NumPy, Pandas, Matplotlib/Seaborn이 데이터 과학에 필수

- 신경망: MLP, 역전파, 과적합 방지가 딥러닝의 핵심

- NLP: 토크나이제이션, 임베딩(Word2Vec, GloVe), RNN(LSTM, GRU)가 기술



### 2. LLM Scientist (모델 개발)

- 아키텍처: Transformer, 토크나이제이션, 샘플링 기법

- Pre-Training: 대량 데이터셋으로 모델 사전 학습

- Post-Training: SFT, 선호 정렬(DPO, GRPO, PPO)로 성능 극대화

- 평가: MMLU(자동), Chatbot Arena(인간), 심판 모델(모델 기반)

- 양자화: FP32 → FP16 → INT8 → INT4로 변환하여 메모리 60-70% 절감



### 3. LLM Engineer (애플리케이션)

- LLM 실행: API(OpenAI, Google) vs 로컬(Ollama, llama.cpp)

- 프롬프트 엔지니어링: Zero-shot, Few-shot, Chain-of-Thought 등 기법

- RAG: 벡터 저장소를 사용하여 LLM의 정확성 향상

- 에이전트(Agents): 도구 사용, MCP 프로토콜로 자율적인 작업 수행

- 추론 최적화: Flash Attention, Key-value cache, Speculative decoding

- 배포: 로컬(개인정보 보호) vs 클라우드 대규모 배포



## 핵심 도구

- AutoEval: RunPod로 모델 자동 평가

- LazyMergekit: GPU 없이 모델 병합

- ZeroSpace: ZeroGPU 기반 Gradio 채팅 인터페이스 자동 생성

- Model Family Tree: 병합 모델 가계도 시각화



## 프레임워크

- 파인튜닝: TRL, Unsloth, Axolotl

- 데이터: NeMo-Curator, Distilabel

- RAG/에이전트: LangChain, LlamaIndex, LangGraph



## 핵심 통찰

1. 학습 경로: 기초 → 과학자 → 엔지니어 순서로 학습

2. 트랜스포머 아키텍처가 현대 LLM의 핵심

3. 파인튜닝 단계: SFT → 선호 정렬(DPO, GRPO, PPO)로 성능 극대화

4. 양자화 과정: FP32 → FP16 → INT8 → INT4로 메모리 60-70% 절감

5. RAG 과정: 벡터 저장소와 결합하여 LLM의 정확성 향상

6. 에이전트 활용: 도구와 MCP로 자율적인 작업 자동화

7. 추론 최적화: Flash Attention, Speculative decoding으로 속도 6.5배 향상

8. 실습 중심: Google Colab, LazyMergekit, ZeroSpace로 빠른 실습

9. 비용 효율성: 양자화와 최적화 기법으로 운영 비용 절감

10. 최신 트렌드: 다중모달, 해석ability, 테스트타임 컴퓨트 확장



## 학습 리소스

- 3Blue1Brown: 선형대수, 신경망 직관적 설명

- Real Python: Python, NLP 데이터 과학 가이드

- freeCodeCamp: Python, 머신러닝 전체 강의

- Khan Academy: 수학, 통계 기초 과정

- Fast.ai: 실용 딥러닝 무료 코스

- GitHub - mlabonne/llm-course: 본 코스와 노트북

