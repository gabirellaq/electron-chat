<template>
    <div class="slide">
        <div class="slideleft">
            <div class="closeButton">
                <span class="redbtn" @click="closeWindow()">
                    <i class="iconfont icon-guanbi1"></i>
                </span>
                <span class="yellowbtn" @click="resizeWindow()">
                    <i class="iconfont icon-xinyongqia"></i>
                </span>
                <span class="greenbtn" @click="minimizeWindow()">
                    <i class="iconfont icon-jianhao"></i>
                </span>
            </div>
            <div class="avatar">
                <img src="https://avatars3.githubusercontent.com/u/5259501?s=460&v=4">
            </div>
            <div class="slide-button">
                <el-tabs :tab-position="tabPosition">
                    <el-tab-pane>
                        <span slot="label"><i class="iconfont icon-xiaoxi"></i></span>
                        <ChatListPage></ChatListPage>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="iconfont icon-user-msg"></i></span>
                        <GroupListPage></GroupListPage>
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="iconfont icon-hezi201"></i></span>
                        
                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="slide-set">
                <i class="iconfont icon-ico-menucommand-sOx" @click="openDialog"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { remote } from 'electron'
const { Menu, dialog, BrowserWindow } = remote
import ChatListPage from '@/pages/ChatListPage'
import GroupListPage from '@/pages/GroupListPage'
export default {
    components: {
        ChatListPage,
        GroupListPage
    },
    data () {
        return {
            tabPosition: 'left',
            menu: null
        }
    },
    methods: {
        minimizeWindow () {
            const window = BrowserWindow.getFocusedWindow();
            window.minimize()
        },
        resizeWindow () {
            const window = BrowserWindow.getFocusedWindow();
            if(window.isMaximized()){
                window.restore();
            }else {
                window.maximize();
            }
        },
        closeWindow () {
            const window = BrowserWindow.getFocusedWindow()
            window.close()
        },
        buildMenu() {
            const _this = this
            const template = [
                {
                    label: '关于',
                    click () {
                        dialog.showMessageBox({
                            title: 'Chat',
                            message: 'Chat',
                            detail: `Version: 1.0.0 \nAuthor: Gabirellaq \nGithub: https://github.com/gabirellaq`
                        })
                    }
                },
                {
                    label: '设置',
                }
            ]
            this.menu = Menu.buildFromTemplate(template)
        },
        openDialog () {
            this.menu.popup(remote.getCurrentWindow)
        },
    },
    created() {
        this.buildMenu()
    }
}
</script>

<style lang="sass">
    @import "~@/assets/css/slide.scss";
</style>