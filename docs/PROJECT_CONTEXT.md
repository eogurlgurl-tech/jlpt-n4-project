# Japanese Master Road

## PROJECT_CONTEXT.md

Version : 3.0.0
Status : Ready
Development Method : Sprint
Source of Truth : Current Project Code + PROJECT_CONTEXT.md

---

# Project Vision

Japanese Master Road는 단순한 JLPT N4 학습 앱이 아니다.

목표는

"일본어를 처음 배우는 사람도
히라가나부터 N1까지
하나의 앱으로 학습할 수 있는 플랫폼"

이다.

GitHub Pages에서 동작하는
무료 일본어 학습 플랫폼을 구축한다.

---

# Ultimate Goal

Japanese

↓

히라가나

↓

가타카나

↓

기초 읽기

↓

기초 단어

↓

기초 문법

↓

JLPT N5

↓

JLPT N4

↓

JLPT N3

↓

JLPT N2

↓

JLPT N1

↓

독해

↓

청해

↓

회화

↓

Master

---

# Development Philosophy

학습은 게임처럼.

매일 조금씩.

사용자가 재미있게 꾸준히 공부하도록 만든다.

단순 암기가 아닌

"반복"

"복습"

"약점 분석"

"성취감"

을 중심으로 설계한다.

---

# Project Rules

현재 프로젝트 코드를 Source of Truth로 사용한다.

기존 기능을 깨뜨리지 않는다.

Regression Zero.

모바일 우선(Mobile First)

PC도 지원한다.

PWA 유지.

가능하면 기존 구조를 유지한다.

One Feature = One Sprint

하루 작업 종료 시 PROJECT_CONTEXT.md 전체 업데이트.

---

# Current Structure

index.html

css/
    style.css

js/

    app.js

    dashboard-ui.js

    grammar-ui.js

    vocab-ui.js

    kanji-ui.js

    favorite-ui.js

    study-engine.js

    grammar.js

    vocab.js

    kanji.js

    quiz-ui.js

    question-bank.js

    mock-exam.js

    weakness.js

    weakness-quiz.js

    achievement.js

    report.js

    review.js

manifest.json

---

# Current Features

Completed

✅ Dashboard

✅ Grammar

✅ Vocabulary

✅ Kanji

✅ Quiz

✅ Mock Exam

✅ Weakness Study

✅ Review

✅ Favorite

✅ Achievement

✅ Report

✅ Dark Mode

✅ PWA

---

# Planned Features

## Foundation

- Hiragana
- Katakana
- Dakuten
- Handakuten
- Youon
- Small Tsu
- Long Vowel

---

## Reading

- Reading Practice
- Shadow Reading
- Sentence Reading

---

## JLPT

- N5
- N4
- N3
- N2
- N1

---

## Study

- Grammar
- Vocabulary
- Kanji
- Quiz
- Mock Exam
- Weakness
- Review

---

## AI

- AI Grammar
- AI Conversation
- AI Sentence Review
- AI Explanation

---

# Learning Flow

Dashboard

↓

Today's Characters

↓

Today's Grammar

↓

Today's Vocabulary

↓

Today's Kanji

↓

Today's Quiz

↓

Review

↓

Daily Complete

---

# Character System

지원 예정

Hiragana

Katakana

Dakuten

Handakuten

Youon

Character Search

Character Comparison

Character Quiz

Weak Character

Character Progress

Character Achievement

---

# Quiz System

Character Quiz

Reading Quiz

Grammar Quiz

Vocabulary Quiz

Kanji Quiz

Weakness Quiz

Mixed Quiz

JLPT Quiz

Mock Exam

---

# Smart Learning

AI처럼 사용자의 약점을 분석한다.

예)

"め"

7회 오답

↓

약점 등록

↓

자동 반복 출제

↓

Master 될 때까지 반복

---

# Dashboard

오늘의 문자

오늘의 문법

오늘의 단어

오늘의 한자

오늘의 목표

오늘의 진행률

연속 학습

최근 7일

최근 30일

---

# Statistics

Grammar Progress

Vocabulary Progress

Kanji Progress

Character Progress

Quiz Accuracy

Study Time

Longest Streak

Weakness Count

Review Queue

---

# Mobile Improvements

반드시 개선

- Safe Area 대응
- 긴 버튼 줄바꿈
- 모바일 Grid
- Progress Bar
- 반응형 Layout
- 작은 화면 최적화

---

# Settings (Sprint 1)

Settings 화면

Dark Mode

Storage Info

Today Reset

Progress Reset

Export

Import

Version

---

# Sprint Roadmap

Sprint 1

FEATURE-001

Settings System

Status

READY

---

Sprint 2

FEATURE-002

Mobile UI Upgrade

---

Sprint 3

FEATURE-003

Character Learning

(Hiragana / Katakana)

---

Sprint 4

FEATURE-004

Character Quiz

---

Sprint 5

FEATURE-005

Character Weakness Engine

---

Sprint 6

FEATURE-006

Reading Practice

---

Sprint 7

FEATURE-007

Data Backup / Restore

---

Sprint 8

FEATURE-008

Dashboard Upgrade

---

Sprint 9

FEATURE-009

Study Statistics

---

Sprint 10

FEATURE-010

AI Learning Assistant

---

# Known Issues

현재 확인됨

- 일부 보기 데이터 검토 필요
- 모바일 UI 개선 필요
- Settings 없음
- Progress Reset 없음
- Export / Import 없음

---

# Daily Workflow

매일 작업 시작

↓

PROJECT_CONTEXT.md 확인

↓

Sprint 확인

↓

Feature 구현

↓

모바일 테스트

↓

버그 수정

↓

PROJECT_CONTEXT.md 전체 업데이트

↓

Commit

↓

Push

---

# Rules for ChatGPT

항상 PROJECT_CONTEXT.md를 먼저 읽는다.

현재 코드가 Source of Truth이다.

이미 구현된 기능은 다시 만들지 않는다.

기존 UI 스타일을 유지한다.

모바일 우선으로 설계한다.

Regression을 발생시키지 않는다.

불필요한 리팩토링을 하지 않는다.

Feature 단위로 개발한다.

완료 후에는 PROJECT_CONTEXT.md 전체를 다시 작성하여 최신 상태로 갱신한다.

---

# Next Sprint

FEATURE-001

Settings System

목표

✅ Settings 버튼

✅ Settings 화면

✅ Today Reset

✅ Progress Reset

✅ Version

Status

READY
