import { all, takeLatest, call, put } from "redux-saga/effects";

import api from "../../services/api";
import * as actions from "../actions";

function* getHeroes() {
  try {
    const {
      data: { data }
    } = yield call(api.get, "/v1/public/characters");

    yield put(actions.setHeroes(data.results));
  } catch (error) {}
}

export default function* rootSaga() {
  return yield all([takeLatest("requestHeroes", getHeroes)]);
}
