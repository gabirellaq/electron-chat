<template>
    <div class="userDetail">
        <div class="chatcontent userdetailcontent">
            <div class="avatar" v-if="name === 'user'">
                <span>
                    <img :src="data[id].images">
                </span>
            </div>
            <div class="avatar" v-if="name === 'group'">
                <span>
                    <img src="https://img.xiaohongshu.com/avatar/5978729bd1d3b94b2c302f7e.jpg@80w_80h_90q_1e_1c_1x.jpg">
                    <span>xx</span>
                </span>
            </div>
            <span>{{data[id].name}}</span>
            <el-button type="success">发消息</el-button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'data', 'id']
}
</script>

<style lang="sass">
    @import "~@/assets/css/people.scss";
</style>