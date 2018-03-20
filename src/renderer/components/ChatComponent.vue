<template>
    <div class="chatbox">
        <div v-for="x in data" v-if="x.id == id">
            <div class="chattitle">
                <h1>{{x.name}}</h1>
                <span><i class="iconfont icon-iconfontwohover"></i></span>
            </div>
            <div class="chatcontent">
                <div class="chatmessage me">
                    <span>不聊了</span>
                    <img src="https://avatars3.githubusercontent.com/u/5259501?s=460&v=4">                    
                </div>
                <div class="chatmessage">
                    <img :src="x.images">
                    <span>聊工作啦啦啦</span>
                </div>
                <div v-for="y in getchatlist" v-if="y.friendId == id">
                    <div v-if="y.type === 'me'" class="chatmessage me">
                        <span>{{y.text}}</span>
                        <img src="https://avatars3.githubusercontent.com/u/5259501?s=460&v=4"> 
                    </div>
                    <div v-else class="chatmessage">
                        <img src="https://img.xiaohongshu.com/avatar/5a4384a9d1d3b90d42ab1d0d.jpg@80w_80h_90q_1e_1c_1x.jpg">
                        <span>{{y.text}}</span> 
                    </div>
                </div>
            </div>
            <div class="chattools">
                <div class="chattoolbar">
                    <i class="iconfont icon-picture"></i>
                    <i class="iconfont icon-folder_icon"></i>
                    <i class="iconfont icon-tailor"></i>
                    <span class="emojispan">
                        <i class="iconfont icon-emoji" @click="chooseEmoji"></i>
                        <span class="exprMain" :style="emojiDisplay ? 'display:block' : 'display:none'">
                            <a v-for="x in emoji" @click="choiceBq(x)">{{x}}</a>
                        </span>
                    </span>
                </div>
                <div class="chatMess">
                    <textarea ref="text" @keydown="send($event)">{{chatvalue}}</textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    props: ['data','id'],
    data () {
        return {
            emoji: [], //表情
            emojiDisplay: false,
            chatvalue: ''
        }
    },
    methods: {
        decodeUnicode() {
            for (let i = 0; i <= 255; i++) {
                let t = i.toString(16);
                if (t.length < 2) {
                    t = '0' + t;
                }
                let str = '\\ud83d\\ude' + t;
                str = str.replace(/\\/g, "%");
                str = unescape(str);
                this.emoji.push(str);
            }
            return this.emoji;
        },
        //选择表情
        choiceBq(va) {
            this.emojiDisplay = !this.emojiDisplay;
            this.$refs.text[0].value += va;
        },
        chooseEmoji() {
            this.emojiDisplay = !this.emojiDisplay;
        },
        send(e) {
            let code;
            if (!e) var e = window.event;
            if (e.keyCode) code = e.keyCode;
            else if (e.which) code = e.which;
            let text = this.$refs.text[0];
            if (code === 13 && window.event) {
                if (text.value.trim()) {
                    this.chatvalue += text.value.trim();
                    console.log(this.chatvalue);
                    this.$store.commit('GETCHATMYSELT', {
                        type: "me",
                        text: this.chatvalue,
                        time: new Date().getTime(),
                        friendId: this.id,
                    });
                    text.value = "";
                    this.chatvalue = '';
                }
                e.returnValue = false;
            } else if (code === 13) {
                e.preventDefault();
            }
        }
    },
    computed: {
        ...mapState({
            'getchatlist': state => state.ChatList.chatmyself,
        })
    },
    created() {
        this.decodeUnicode();
    }
}
</script>