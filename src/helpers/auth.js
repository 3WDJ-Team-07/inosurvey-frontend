import axios from "axios";

export function login(credentials) {
  return new Promise((res, rej) => {
    axios.post('/api/auth/login', credentials)
			.then(response => {
				res(response.data)
			})
			.catch(() => {
				rej("아이디 또는 비밀번호가 틀렸습니다")
			})
  })
}
