import { useState } from "react";

const Say = () => {
    const [message, setMassage] = useState('');
    const onClickEnter = () => setMassage('안녕하세요!');
    const onClickLeave = () => setMassage('안녕히 가세요!');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>{message}</h1>
        </div>
    )
}
export default Say;