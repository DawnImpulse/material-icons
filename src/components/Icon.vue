<template>
  <v-tooltip bottom color="black">
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-bind="attrs"
        v-on="on"
        :color="color"
        :style="
          icon.meta.author !== 'Google'
            ? 'border-radius: 4px; border-style: solid; border-color: coral; border-width: 1px'
            : ''
        "
        class="pa-2"
        >{{ icon.icon }}
      </v-icon>
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
