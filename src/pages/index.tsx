import { useDispatch, useSelector } from 'umi';
export default function IndexPage() {
  const dispatch = useDispatch();
  const { name, testData } = useSelector((store: any) => {
    console.log('store', store);
    return store?.testModel;
  });
  // 改变名字
  const changeName = () => {
    dispatch({ type: 'testModel/save' });
  };
  // 发送请求
  const sendRequest = () => {
    dispatch({ type: 'testModel/query' });
  };
  return (
    <div>
      <div>我的名字:{name}</div>
      <div>testData的值:{testData}</div>
      <button onClick={changeName}>点击改变name</button>
      <button onClick={sendRequest}>发送请求</button>
    </div>
  );
}
