<template>
    <div class="chatpage people">
        <div class="search">            
            <div class="searchbox">
                <input type="text" placeholder="search">
            </div>
            <div class="addbutton">
                <i class="iconfont icon-add"></i>
            </div>
        </div>
        <PeopleComponent name="chat" :data="chatData"></PeopleComponent>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import PeopleComponent from '@/components/PeopleComponent';
  export default {
    name: 'ele',
    components: {
      PeopleComponent
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