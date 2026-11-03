/**
 * 🚧 연수 미션 3: 화면 위 '1 발견 · 2 추정 · 3 확인 · 4 기록' 단계 막대를 만들어요.
 * 지금은 자리만 표시해요. 이 파일 전체를 클로드가 만들어 준 코드로 바꿔 넣으면 돼요.
 * (이 함수 이름 Steps 와 받는 값 current 는 다른 화면들이 쓰고 있으니 그대로 두어야 해요)
 */
export default function Steps({ current }: { current: 1 | 2 | 3 | 4 }) {
  return <div className="todo-box">🚧 미션 3: 여기에 단계 막대가 들어가요 (지금 {current}단계)</div>;
}
