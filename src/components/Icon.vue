<template>
  <v-tooltip bottom color="black">
    <template v-slot:activator="{ on, attrs }">
      <v-icon :color="color" v-bind="attrs" v-on="on">{{ icon.icon }}</v-icon>
    </template>
    <span>{{ icon.meta.name }}</span>
  </v-tooltip>
</template>

<script>
import randomColor from "randomcolor";

export default {
  name: "Icon",
  props: ["icon"],
  data() {
    return {};
  },
  computed: {
    color() {
      return randomColor({
        luminosity: "dark"
      });
    }
  }
};
</script>
