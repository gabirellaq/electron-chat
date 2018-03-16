<template>
    <div class="grouppage people">
        <div class="search">            
            <div class="searchbox">
                <input type="text" placeholder="search">
            </div>
            <div class="addbutton">
                <i class="iconfont icon-add"></i>
            </div>
        </div>
        <div class="groupTab">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="好友" name="userlistTab">
                    <PeopleComponent name="group" :data="userData"></PeopleComponent>
                </el-tab-pane>
                <el-tab-pane label="群组" name="grouplistTab">
                    <PeopleComponent name="group2" :data="group2"></PeopleComponent>
                </el-tab-pane>
            </el-tabs>  
        </div>   
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
                activeName: 'userlistTab',
                group2: []
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