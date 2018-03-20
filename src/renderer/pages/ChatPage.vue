<template>
    <div class="chatdetail">
        <ChatComponent :data="chatData" :id="this.$route.params.id"></ChatComponent>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import ChatComponent from '@/components/ChatComponent';
    export default {
        name: 'ele',
        components: {
            ChatComponent
        },
        data() {
            return {
                
            }
        },
        methods: {
            ...mapActions([
                'getChatList'
            ])
        },
        computed: {
            ...mapState({
                'chatData': state => state.ChatList.chatlist
            })
        },
        mounted() {
            this.getChatList();
        }
    }
</script>

<style lang="sass">
    @import "~@/assets/css/chat.scss";
</style>