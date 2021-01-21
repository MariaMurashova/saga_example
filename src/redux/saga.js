import { call, put, takeEvery } from 'redux-saga/effects'

const fetchOnApi = async (payload) => {
  const fechResult = await fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`)
  const { title } = await fechResult.json()
  return payload + '-' + title
}

//worker
function* worker(action) {
  const title = yield call(fetchOnApi, action.payload)
  yield put({ type: 'ADD_CONTENT', payload: title })
}

//watcher
export default function* saga() {
  yield takeEvery('FETCH_ON_API', worker)
}
