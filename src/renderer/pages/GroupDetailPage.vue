<template>
    <div class="groupdetail">
        <UserComponent name="user" :data="userData" :id="this.$route.params.id"></UserComponent>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import UserComponent from '@/components/UserComponent';
    export default {
        name: 'ele',
        components: {
            UserComponent
        },
        data() {
            return {
                activeName: 'userlistTab'
            }
        },
        methods: {
            ...mapActions([
                'getUserList'
            ]),
            handleClick(tab, event) {

            }
        },
        computed: {
            ...mapState({
                'userData': state => state.UserList.userlist
            })
        },
        mounted() {
            this.getUserList();
        }
    }
</script>