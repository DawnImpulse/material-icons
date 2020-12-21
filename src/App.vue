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
                  label="Search"
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
    search: "",
    waitingForSearch: false
  }),
  methods: {
    loadMore() {
      if (this.icons.length !== 1) {
        console.log("here");
        const icons = this.mdiIcons.getIcons(this.icons.length);
        icons.forEach(item => this.icons.push(item));
      }
    }
  },
  async created() {
    await this.mdiIcons.init();
    this.icons = this.mdiIcons.getIcons();
  },
  watch: {
    search() {
      if (!this.waitingForSearch) {
        setTimeout(() => {
          console.log(this.search);
          this.waitingForSearch = false;
        }, 2000); // 1 sec delay
      }
      this.waitingForSearch = true;
    }
  }
});
</script>
