<template>
  <v-tooltip bottom color="black">
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-bind="attrs"
        v-on="on"
        :style="
          icon.meta.author !== 'Google'
            ? 'border-radius: 4px; border-style: solid; border-color: coral; border-width: 1px'
            : ''
        "
        class="pa-2"
        :color="color"
        @click="downloadSvg"
        >{{ icon.icon }}
      </v-icon>
    </template>
    <span>{{ icon.meta.name }}</span>
  </v-tooltip>
</template>

<script>
import randomColor from "randomcolor";
import Icons from "../icons";

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
  },
  methods: {
    downloadSvg() {
      Icons.download(`${this.icon.meta.name}.svg`, this.icon.icon);
    }
  }
};
</script>
