# 🌱 학교 식물 탐사대 — 연수용 시작 버전

사진으로 식물을 알아보고, 국립수목원 공식 정보·교과서와 잇는 웹앱의 **연수용 시작 버전**이에요.
앱은 거의 다 돌아가요. 화면에 🚧 표시가 있는 곳을 연수에서 **클로드 웹(무료)** 과 함께 채워요.
내 컴퓨터에 설치할 것은 없어요.

- 진행표·미션 프롬프트(노션): https://app.notion.com/p/40ddc287784c80b7bfb1cfbed4cf9c17
- 완성본 앱 둘러보기: https://plant-explorer-delta.vercel.app

## 1. 내 앱 만들기 — 버튼 한 번

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F7guwol7-max%2Fplant-explorer-starter&project-name=plant-explorer&repository-name=plant-explorer)

1. 위 **Deploy** 버튼 → GitHub 계정으로 계속하기
2. 저장소 이름은 그대로 두고 **Create** → **Deploy**
3. 1~2분 뒤 축하 화면이 나오면 **Continue to Dashboard** → **Domains** 의 주소(`https://plant-explorer-○○○.vercel.app`)가 **내 앱**이에요

이제 **내 GitHub 저장소**에서 파일을 고쳐 저장(Commit)하면 1~2분 뒤 내 앱이 자동으로 바뀌어요.
서버 지역(서울)과 Node 버전은 `vercel.json`·`package.json` 에 들어 있어서 따로 바꿀 것이 없어요.

## 2. 미션

프롬프트는 노션 진행표에 있어요. 막히면 **정답** 파일 내용을 그대로 붙여 넣어도 돼요.

| 미션 | 고칠 파일 | 클로드 | 정답 |
| --- | --- | --- | --- |
| 1. 앱 이름에 우리 학교 넣기 | `lib/site.ts` | 쓰지 않아요 | [보기](https://github.com/7guwol7-max/plant-explorer/blob/claude/affectionate-johnson-msxhyk/lib/site.ts) |
| 2. 그림 도움말 설명 쓰기 | `lib/termText.ts` | 1번 | [보기](https://github.com/7guwol7-max/plant-explorer/blob/claude/affectionate-johnson-msxhyk/lib/termText.ts) |
| 3. 단계 막대 만들기 | `app/components/Steps.tsx` | 1번 | [보기](https://github.com/7guwol7-max/plant-explorer/blob/claude/affectionate-johnson-msxhyk/app/components/Steps.tsx) |
| 4. (선택) 활동 진행 막대 만들기 | `app/components/MissionProgress.tsx` | 1번 | [보기](https://github.com/7guwol7-max/plant-explorer/blob/claude/affectionate-johnson-msxhyk/app/components/MissionProgress.tsx) |

## 3. 파일 고치는 방법 (모든 미션 똑같이)

1. 내 저장소(주소에 **내 아이디**가 있는지 확인)에서 키보드 `t` → 파일 이름 입력 → 파일 열기
2. 오른쪽 위 **연필(Edit this file)** → 편집 칸 클릭 → `Ctrl+A` → 클로드가 준 코드 `Ctrl+V`
3. **Commit changes…** → **Commit changes**
4. 1~2분 뒤 내 앱 새로고침. Vercel → Deployments 맨 위가 **Ready**(초록)면 반영된 거예요
   - 빨간 **Error** 면: 그 배포 → Build Logs 의 빨간 줄을 복사해 클로드에게 '이 오류가 났어. 고친 파일 전체를 다시 줘' (그동안 앱은 직전 버전으로 계속 열려요)

## 4. 키

키는 코드에 적지 않아요. 내 앱 → ⚙️ 설정 화면에 넣으면 그 기기 브라우저에만 저장돼요.

- 공공데이터포털 '산림청 국립수목원_식물자원 조회 서비스' 일반 인증키 — https://www.data.go.kr
- 제미나이 API 키(무료로 시작 가능) — https://aistudio.google.com/apikey
- 키 없이 둘러보기: Vercel → Settings → Environment Variables 에 `MOCK` = `1` → Redeploy (연습 자료로 동작)

## 만든 것

Next.js 15 · React · TypeScript. 데이터베이스·로그인 없음. 학생 기록은 그 기기 브라우저에만 저장돼요.
완성본 저장소: https://github.com/7guwol7-max/plant-explorer
