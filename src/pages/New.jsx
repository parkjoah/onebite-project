import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />} //nav인수로 -1 넣어주면 페이지를 뒤로이동
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
