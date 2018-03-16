import axios from 'axios';

const state = {
    chatlist: [], //聊天列表
}

const mutations = {
    GETCHATLIST (state, res) {
        state.chatlist = res;
    }
}

const actions = {
    //获取聊天列表
    getChatList ({commit}) {
        axios.get('/api/chatlist')
            .then(res => {
                commit("GETCHATLIST", res.data.data)
            })
    }
}

export default {
    state,
    mutations,
    actions
}