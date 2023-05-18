<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('ダッシュボード')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/icons" :name="$t('アイコン')" icon="tim-icons icon-atom"/>
        <sidebar-link to="/maps" :name="$t('マップ')" icon="tim-icons icon-pin"/>
        <sidebar-link to="/notifications" :name="$t('通知')" icon="tim-icons icon-bell-55"/>
        <sidebar-link to="/profile" :name="$t('プロファイル')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/table-list" :name="$t('テーブルリスト')" icon="tim-icons icon-puzzle-10"/>
        <sidebar-link to="/typography" :name="$t('活版印刷')" icon="tim-icons icon-align-center"/>
        <sidebar-link to="/dashboard?enableRTL=true" :name="$t('rtlサポート')" icon="tim-icons icon-world"/>
        <sidebar-link to="/AI" :name="$t('AI')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/Chat" :name="$t('Chat')" icon="tim-icons icon-chat-33"/>
        <sidebar-link to="/Geo" :name="$t('Geo')" icon="tim-icons icon-square-pin"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
