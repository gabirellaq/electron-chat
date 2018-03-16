import axios from 'axios';

const state = {
    userlist: [], //聊天列表
}

const mutations = {
    GETUSERLIST (state, res) {
        state.userlist = res;
    }
}

const actions = {
    //获取聊天列表
    getUserList ({commit}) {
        axios.get('/api/user')
            .then(res => {
                commit("GETUSERLIST", res.data.data)
            })
    }
}

export default {
    state,
    mutations,
    actions
}