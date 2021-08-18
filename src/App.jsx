import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickchange = () => {
    return setOpen(!open);
  };
  //アロー関数を渡すということは毎回新しい関数を生成していると判断されるそのため、propsに新しい関数を引き渡せていると認識される
  //useCallBackを使えば、同じ関数をずっと使う。第二筆記数には関心を向ける対象を入れて、その対象が変わった時だけ再生成するということなのでその中に何も入れなければ再生成はされない
  const onClickClose = useCallback(() => setOpen(false), []);
  return (
    <div className="App">
      　
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickchange}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
