import axios from 'axios';

const state = {
    chatlist: [], //聊天列表
    chatmyself: [], //临时保存本地聊天记录
}

const mutations = {
    GETCHATLIST (state, res) {
        state.chatlist = res;
    },
    GETCHATMYSELT (state, res) {
        state.chatmyself.push(res)
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