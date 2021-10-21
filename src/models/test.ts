import type { Effect, Reducer, Subscription } from 'umi'; // 映入umi 定义好的ts类型
import axios from '../request/request'; // 引入封装好的网络请求

// state 接口
export interface TextModelState {
  name?: string;
  testData?: string;
}

// test model接口
export interface TextModelType {
  namespace: 'testModel';
  state: TextModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<TextModelState>;
    msg: Reducer<TextModelState>;
  };
  subscriptions?: { setup: Subscription };
}

const IndexModel: TextModelType = {
  namespace: 'testModel',
  state: {
    name: '初始名字',
    testData: '初始testData',
  },
  effects: {
    *query(action, { call, put }) {
      const getDataTest = async () => {
        const data = await axios.get('/api/test');
        return data;
      };
      let testData = yield call(getDataTest);
      yield put({
        type: 'msg',
        data: { testData: testData?.msg },
      });
    },
  },

  reducers: {
    save(state) {
      return {
        ...state,
        name: 'jimmy',
      };
    },
    msg(state, action) {
      return {
        ...state,
        testData: action?.data?.testData,
        testData2: action?.data?.testData2,
      };
    },
  },
};
export default IndexModel;
