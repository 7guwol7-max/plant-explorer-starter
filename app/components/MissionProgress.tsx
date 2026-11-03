/**
 * 🚧 연수 미션 4 (선택): 교과서 연결 카드 위 '🎯 해 볼 활동 3개 · ✅ 1개 적었어요' 진행 막대를 만들어요.
 * 지금은 자리만 표시해요. 이 파일 전체를 클로드가 만들어 준 코드로 바꿔 넣으면 돼요.
 * (이 함수 이름 MissionProgress 와 받는 값 total·done 은 그대로 두어야 해요)
 */
export default function MissionProgress({ total, done }: { total: number; done: number }) {
  return (
    <div className="todo-box">
      🚧 미션 4: 여기에 활동 진행 막대가 들어가요 (활동 {total}개 중 {done}개 적음)
    </div>
  );
}
