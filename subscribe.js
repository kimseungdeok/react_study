const listener = () => {
    console.log('상태가 업데이트됨');
}
const unsubscribe = store.subacribe(listener);
unsubscribe(); // 추후 구독을 비활성화할 때ㅐ 함수를 호출