import axios from "axios";

const actions = {
    RETRIEVE_TOKEN(context, credentials){
        // Promise로 resolve, reject처리 해줘야하는데 일단 return 시킴 
       return axios.post('http://172.26.3.14:8000/generateToken  ',{
            withCredentials:true,
            headers:{
                Cookie: "cookie1=value; cookie2=value; cookie3=value;"
            },
            email: credentials.email,
            password: credentials.password
        })
        .then(response => {
            // state의 token상태에 저장한다 (state에 token = null )
            // 여기있는 token으로 받아서 다시 state토큰에 대입 
            console.log(response)
            const token = response.data.access_token
            localStorage.setItem('access_token', token)
            context.commit('RETRIEVE_TOKEN',token)
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    },
    DESTROY_TOKEN(context){
        axios.defaults.headers.common['Authorization'] = 'Bearer' + context.state.token

        if (context.getters.loggedIn) {
            return axios.post('/logout')
            .then(response => {
                localStorage.removeItem('access_token')
                context.commit('DESTROY_TOKEN')
                console.log(response)
            })
            .catch(error => {
                localStorage.removeItem('access_token')
                context.commit('DESTROY_TOKEN')
                console.log(error)
            })
        }
    },
    REGISTER(context, data){
        return axios.post('/register',{
            name: data.name,
            email: data.email,
            user_id: data.user_id,
            password: data.password,
            sex_toggle: data.sex_toggle,
            locale: data.locale,
            job: data.job,
            edu: data.edu

        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default actions