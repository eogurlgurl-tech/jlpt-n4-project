# Japanese Master Road

## PROJECT_CONTEXT.md

Version : 3.1.0

Status : Sprint 2 Ready

Development Method : Sprint

Source of Truth

- Current Project Code
- PROJECT_CONTEXT.md

---

# Project Vision

Japanese Master Road는 단순한 JLPT N4 학습 앱이 아니다.

목표는

"일본어를 처음 배우는 사람도
히라가나부터 JLPT N1까지
하나의 플랫폼에서 학습할 수 있도록 한다."

GitHub Pages에서 동작하는

무료 일본어 학습 플랫폼을 구축한다.

---

# Ultimate Goal

Japanese

↓

Hiragana

↓

Katakana

↓

Basic Reading

↓

Basic Vocabulary

↓

Basic Grammar

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

Reading

↓

Listening

↓

Conversation

↓

Master

---

# Development Philosophy

학습은 게임처럼.

매일 조금씩.

사용자가 재미있게 꾸준히 공부하도록 만든다.

단순 암기가 아닌

- 반복
- 복습
- 약점 분석
- 성취감

중심으로 설계한다.

---

# Development Rules

- Current Project Code를 Source of Truth로 사용한다.
- Regression Zero
- Mobile First
- PWA 유지
- 기존 기능을 절대 깨뜨리지 않는다.
- One Feature = One Sprint
- One Step = One Commit
- 필요한 기능만 추가한다.
- 불필요한 리팩토링 금지
- 완료 후 PROJECT_CONTEXT.md를 항상 최신 상태로 업데이트한다.

---

# Current Sprint

Sprint 2

FEATURE-002

Mobile UI Upgrade

Status

READY

---

# Completed Features

## Foundation

✅ Foundation Directories

✅ config.js

✅ constants.js

---

## Dashboard

✅ Dashboard UI

✅ Premium Dashboard

✅ Hero Dashboard

✅ Progress Bar

✅ Statistics

✅ Quick Study Card

---

## Study

✅ Grammar

✅ Vocabulary

✅ Kanji

✅ Quiz

✅ Mock Exam

✅ Weakness Study

✅ Review

---

## Management

✅ Favorite

✅ Achievement

✅ Report

---

## Theme

✅ Dark Mode

---

## PWA

✅ Manifest

---

## FEATURE-001 Settings System

Completed

✅ Settings Screen

✅ Settings Navigation

✅ Theme Support

✅ Storage Information

✅ Version Information

✅ Today Reset

✅ Progress Reset

✅ Export Backup

✅ Import Backup

---

# Current Structure

index.html

css/

    style.css

docs/

    PROJECT_CONTEXT.md

js/

    app.js

    config.js

    constants.js

    dashboard-ui.js

    grammar-ui.js

    vocab-ui.js

    kanji-ui.js

    favorite-ui.js

    settings-ui.js

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

✅ Weakness

✅ Review

✅ Favorite

✅ Achievement

✅ Report

✅ Settings

✅ Dark Mode

✅ PWA

---

# Planned Features

## Character

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

## AI

- AI Grammar
- AI Conversation
- AI Explanation
- AI Review

---

# Learning Flow

Dashboard

↓

Today's Character

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

Complete

---

# Statistics

Dashboard Progress

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

# Mobile Improvements (Sprint 2)

Target

✅ Safe Area

✅ Better Navigation

✅ Responsive Grid

✅ Responsive Button

✅ Better Progress UI

✅ Small Screen Optimization

---

# Known Issues

현재 확인됨

- 일부 문제 데이터 검토 필요
- Mobile Navigation 개선 예정
- Safe Area 적용 예정
- 버튼 크기 최적화 필요

---

# Daily Workflow

PROJECT_CONTEXT.md 확인

↓

Current Sprint 확인

↓

Feature 개발

↓

Regression Test

↓

Mobile Test

↓

PROJECT_CONTEXT.md 업데이트

↓

Commit

↓

Push

---

# Rules for ChatGPT

항상 PROJECT_CONTEXT.md를 먼저 확인한다.

Current Project Code를 Source of Truth로 사용한다.

이미 구현된 기능은 다시 구현하지 않는다.

기존 UI 스타일을 유지한다.

Mobile First를 유지한다.

Regression Zero를 최우선으로 한다.

One Feature = One Sprint

One Step = One Commit

300줄 이하 파일은 전체 교체본 제공.

500줄 이상 파일은

- 수정 위치
- 찾을 코드
- 추가/교체 코드

형태로 정확하게 안내한다.

애매한 설명 없이 실제 적용 가능한 형태로 제공한다.

---

# Next Sprint

Sprint 2

FEATURE-002

Mobile UI Upgrade

목표

✅ Safe Area 대응

✅ Mobile Navigation 개선

✅ Responsive Layout

✅ Button UX 개선

✅ Small Screen Optimization

Status

READY
