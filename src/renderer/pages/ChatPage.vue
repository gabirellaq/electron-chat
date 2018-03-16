<template>
    <div class="chatdetail">
        <ChatComponent></ChatComponent>
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

        },
        computed: {

        },
        mounted() {
            
        }
    }
</script>

<style lang="sass">
    @import "~@/assets/css/chat.scss";
</style>