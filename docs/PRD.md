# FlashWords – Product Requirements Document (PRD)

![Mascot](mascot.webp)

## 1. Overview

**Objective.** Build a mobile application that enables users to quickly and effectively memorise foreign vocabulary using interactive flash‑cards and a modified SM‑2 Spaced Repetition algorithm.

**Development Lead.** Vibe Coding (open‑source maintainers). Build a mobile application that enables users to quickly and effectively memorise foreign vocabulary using interactive flash‑cards and a modified SM‑2 Spaced Repetition algorithm.

**Target Platforms.** iOS & Android (single code‑base, React Native 0.74).

**Success Metrics (first 6 months post‑launch)**

* ≥ 20 k monthly active learners (MAU)
* ≥ 7‑day retention rate ≥ 35 %
* Average daily study session length ≤ 4 min
* ≥ 500 GitHub stars
* ≥ 50 unique external code contributors

## 2. User Personas

| Persona                                                   | Goals                                   | Pain Points                                   | Motivation                   |
| --------------------------------------------------------- | --------------------------------------- | --------------------------------------------- | ---------------------------- |
| **Alina** – 18 yo, university student preparing for IELTS | Learn ≥ 30 new words every day          | Limited study time, wants progress feedback   | Achieve required IELTS score |
| **Sergey** – 34 yo, middle manager commuting              | Refresh business English during commute | Offline, short sessions, hands‑busy           | Career advancement           |
| **Maria** – 45 yo, Spanish teacher                        | Create & share custom word sets         | Tedious set‑building, needs class‑level stats | Better student engagement    |

## 3. Problem Statement & Value Proposition

Current vocabulary apps either lack true spaced‑repetition rigour or offer cluttered, time‑consuming workflows. **FlashWords** delivers one‑tap study, offline access and visual progress, enabling learners to hit daily targets in minutes.

## 4. Product Scope & Use‑Cases

1. **Learn** – Introduce new words via flash‑cards (≤ 30/day default).
2. **Review** – Schedule repetitions based on SM‑2 (80 % accuracy threshold).
3. **Test** – Self‑assessment quizzes to validate retention.
4. **Set Management** – Browse, filter, create and import word lists.
5. **Statistics** – Visualise daily streaks, mastery rate and achievements.
6. **Notifications** – Remind users when today’s words are due (default 21:00 local).
7. **Language Preferences** – Users pick their native language and learning language(s); UI and translations adapt dynamically.

## 5. Functional Requirements

| #     | Requirement                                                                                                       | Priority |   |
| ----- | ----------------------------------------------------------------------------------------------------------------- | -------- | - |
| FR‑01 | One‑tap entry into current learning session from Home                                                             | P0       |   |
| FR‑02 | Local cache & offline mode for all content                                                                        | P0       |   |
| FR‑03 | Three study modes (Learn, Review, Test) via horizontal swipe                                                      | P0       |   |
| FR‑04 | Modified SM‑2 scheduling (store `nextReview` timestamp in ms)                                                     | P0       |   |
| FR‑05 | Push notifications when `nextReview ≤ now`                                                                        | P0       |   |
| FR‑06 | Progress widget (“Today 0/30” with ring) on Home                                                                  | P0       |   |
| FR‑07 | Create / edit word sets; CSV import/export                                                                        | P1       |   |
| FR‑08 | Search & filter sets (debounce 300 ms; by language, CEFR level, popularity)                                       | P1       |   |
| FR‑09 | Gamification: streak counter, levels, badges, confetti on goals                                                   | P1       |   |
| FR‑10 | Accessibility: default large font, VoiceOver / TalkBack labels                                                    | P1       |   |
| FR‑11 | In‑app purchases: Premium subscription (future backend; no local API key required)                                | P1       |   |
| FR‑12 | User‑supplied OpenAI API key: entry form, secure local storage, and runtime usage                                 | P0       |   |
| FR‑13 | Auto‑translate word entries using OpenAI API (optional)                                                           | P2       |   |
| FR‑14 | Generate cover image preview for custom sets via OpenAI Images                                                    | P2       |   |
| FR‑15 | Cloud TTS pronunciation via OpenAI Audio endpoint                                                                 | P2       |   |
| FR‑16 | Language Preferences: user selects native language and target languages; app localises UI and content accordingly | P0       |   |

## 6. Non‑Functional Requirements

* **Performance.** Cold start ≤ 2 s; flash‑card flip ≤ 150 ms.
* **Session Length.** Default study loop completes within 5 min.
* **Security.** GDPR compliant; encrypt local DB at rest; store user OpenAI API keys encrypted in device Keychain/Keystore; never send keys to external servers.
* **Accessibility.** Meet WCAG 2.1 AA colour & text contrast.
* **Localization.** Framework for multiple UI languages; UI defaults to device locale or user‑selected native language.

## 7. UX / UI Guidelines

* **Navigation.** Bottom Tab Bar (Height 56 dp, icons 24 dp): Cards (home), Sets, Stats, Profile.
* **Home (Cards).** Widget *Today 0/30*; “Learn” button; “In Progress” horizontal list; FAB “+”.
* **Onboarding.** First‑launch flow prompts for *Native Language* and *Learning Language(s)* selection (flag‑grid picker).
* **Profile.** Settings list includes *OpenAI API Key* and *Language Preferences* (editable picker).
* **Flash‑Card.** Occupies 85 % height; tap → 3D spring flip (Framer Motion). Back shows translation, sample sentence + buttons “Know / Unsure / Don’t know”; left/right swipes as shortcuts.
* **Profile.** Settings list includes *OpenAI API Key* field (masked input, save & validate).
* **Flash‑Card.** Occupies 85 % height; tap → 3D spring flip (Framer Motion). Back shows translation, sample sentence + buttons “Know / Unsure / Don’t know”; left/right swipes as shortcuts.
* **Colour Palette.**

  * Primary 500 #4F7FFF / 600 #4165DB
  * Accent A200 #FFC44F
  * Surface 50 #FAFAFE
  * Error #FF5964
  * Dark theme: automatic token inversion.
* **Typography.** Inter family (H1 28/34, H2 22/28, Body 16/24, Caption 12/16).
* **Micro‑interactions.** Haptic light on swipe; confetti emitter after daily goal.
* **Mascot.** *LangBot* – friendly green robot holding a book (see attached image). Use in onboarding slides, empty‑state illustrations, and promotional graphics.

## 8. Technical Architecture

| Layer                                     | Technology                                                                   |
| ----------------------------------------- | ---------------------------------------------------------------------------- |
| Cross‑platform UI                         | **React Native 0.74 + Zustand**                                              |
| UI Component Library                      | Tamagui (cross‑platform RN + Web) with NativeWind (Tailwind‑style utilities) |
| Local DB                                  | WatermelonDB (React Native)                                                  |
| AI Services (Translation, TTS, Image Gen) | OpenAI API (Chat Completions, Audio TTS, Images)                             |
| Notifications                             | Firebase Cloud Messaging                                                     |
| Ads & Payments                            | Google AdMob, StoreKit / Play Billing                                        |
| Analytics                                 | Firebase Analytics + custom events (study\_start, card\_flip, streak\_break) |
| Secure Key Storage                        | react-native-keychain (encrypted iOS Keychain / Android Keystore)            |

## 9. Licensing & Monetisation

FlashWords’ **source code** is MIT‑licensed and remains fully open‑source. The project provides two usage tiers:

* **Free Tier (Self‑Key).**

  * Users supply their own OpenAI API key (stored securely on‑device).
  * Access to all core features: learn, review, test, local sets, and offline mode.

* **Premium Tier (Cloud, planned).**

  * Powered by Vibe Coding’s managed backend and pooled OpenAI keys—no personal key required.
  * Additional benefits: cloud backup & sync, unlimited import/export of card sets, server‑side performance optimisations, and priority TTS/translate throughput.
  * Offered via in‑app subscription (App Store / Play Billing).

The application contains **no advertising** and never monetises user data. Community contributions are welcome, and optional sponsorships (GitHub Sponsors / OpenCollective) fund backend and future development.

## 10. Analytics & KPIs

* DAU/MAU ratio
* Average cards reviewed per day
* Streak length distribution
* Churn rate

## 11. Assumptions & Dependencies

* Brand assets (logo). Mascot *LangBot* illustration provided (attached).
* Figma hi‑fi mock‑ups required before Sprint 1.
* Apple/Google sign‑in keys provided by DevOps.

## 12. Roadmap & Milestones

| Milestone             | Target Date | Deliverable (Owner: Vibe Coding)     |
| --------------------- | ----------- | ------------------------------------ |
| 0. Discovery          | 17 May 2025 | Signed PRD & scope lock              |
| 1. Design Sprint 1    | 03 Jun 2025 | Hi‑fi mock‑ups, design tokens        |
| 2. Prototype          | 01 Jul 2025 | Clickable prototype for UX testing   |
| 3. MVP Alpha          | 15 Sep 2025 | Core learning flow, offline DB, SM‑2 |
| 4. Beta Soft‑Launch   | 01 Nov 2025 | TestFlight / Play Beta, analytics    |
| 5. Public Launch v1.0 | 15 Dec 2025 | App Store & Google Play              |
