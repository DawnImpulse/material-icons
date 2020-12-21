<template>
  <v-app style="background-color: #EEEEEE">
    <div v-infinite-scroll="loadMore">
      <v-container fluid class="pa-0" style="width: 100vw">
        <!--heading-->
        <v-row
          justify="center"
          class="pt-8 pb-16"
          style="background-color: deepskyblue"
        >
          <span class="text-h3 font-weight-bold">Material Design Icons</span>
        </v-row>

        <!--icons-->
        <!--list-->
        <v-row justify="center" class="mt-6">
          <v-col cols="6">
            <v-card class="pt-8 pb-8">
              <!--search-->
              <v-row class="mx-12">
                <v-text-field
                  v-model="search"
                  prepend-icon="mdi-magnify"
                  append-icon="mdi-arrow-right-thick"
                  append-outer-icon="mdi-close"
                  label="Search"
                  @keyup.enter="searchIcons"
                  @click:append="searchIcons"
                  @click:append-outer="clearSearch"
                ></v-text-field>
              </v-row>
              <!--icons-->
              <v-row>
                <v-col
                  align="center"
                  cols="2"
                  v-for="(icon, index) in icons"
                  v-bind:icon="icon"
                  v-bind:key="index"
                >
                  <Icon :icon="icon"></Icon>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/Icon.vue";

import Icons from "@/icons";

export default Vue.extend({
  name: "App",
  components: { Icon },
  data: () => ({
    icons: [{ icon: "", meta: {} }],
    mdiIcons: new Icons(),
    search: ""
  }),
  methods: {
    // load more icons
    loadMore() {
      if (this.search === "" && this.icons.length !== 1) {
        const icons = this.mdiIcons.getIcons(this.icons.length);
        icons.forEach(item => this.icons.push(item));
      }
    },

    // search icons
    searchIcons() {
      this.icons = this.mdiIcons.search(this.search.toLowerCase());
    },

    // clear search
    clearSearch() {
      if (this.search !== "") {
        this.search = "";
        this.icons = this.mdiIcons.getIcons();
      }
    }
  },
  async created() {
    await this.mdiIcons.init();
    this.icons = this.mdiIcons.getIcons();
  }
});
</script>
