<template>
  <v-app style="background-color: #EEEEEE">
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
        <v-col cols="8">
          <v-card class="pt-8 pb-8  ">
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
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/Icon.vue";
import meta from "@/lib/meta.json";

export default Vue.extend({
  name: "App",
  components: { Icon },
  data: () => ({
    icons: [{}],
    meta
  }),
  async created() {
    //const files = await icons();
    //console.log(icons);
    const yes = await import("@mdi/js");
    const nono = Object.values(yes);
    this.icons = [];
    nono.forEach((item, i) => {
      this.icons.push({
        icon: item.toString(),
        meta: meta[i]
      });
    });
    //delete this.icons[0];
    //this.icons = [this.icons[0]];
    //console.log(this.icons);
    /*this.icons[0] = nono[0].toString();
    console.log(this.icons);*/
  }
});
</script>
