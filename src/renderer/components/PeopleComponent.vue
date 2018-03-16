<template>
    <div class="list">
        <div class="listnull" v-if="data.length === 0">
            <i class="iconfont icon-activity"></i>
            <span>列表还是空的，快去添加吧</span>
        </div>
        <ul v-if="name === 'chat' && data.length > 0">
            <li v-for="(item,index) in data" :key="index">
                <router-link :to="`/chat/${item.id}`">
                    <img :src="item.images">
                    <span class="content">
                        <span class="t">
                            <span class="title">{{item.name}}</span>
                            <span class="time">{{item.time}}</span>
                        </span>
                        <span class="des">{{item.des}}</span>
                    </span>
                </router-link>
            </li>
        </ul>
        <ul v-if="name === 'group' && data.length > 0">
            <li v-for="(item,index) in data" :key="index">
                <router-link :to="`/username/${item.id}`">
                    <img :src="item.images">
                    <span class="content">
                        <span class="title">{{item.name}}</span>
                    </span>
                </router-link>
            </li>
        </ul>
        <ul v-if="name === 'group2' && data.length > 0">
            <li v-for="(item,index) in data" :key="index">
                <router-link :to="`/username/${item.id}`">
                    <img :src="item.images">
                    <span class="content">
                        <span class="title">{{item.name}}</span>
                    </span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['name', 'data']
}
</script>

<style lang="sass">
    @import "~@/assets/css/people.scss";
</style>