/**
 * @info utility on icons
 */
import meta from "@/lib/meta.json";

export default class Icons {
  private mdi;

  async init() {
    this.mdi = await import("@mdi/js");
  }

  /**
   * size of the last list
   * @param size
   */
  getIcons(size = 0) {
    let icons = [{}];
    icons = [];
    const values = Object.values(this.mdi);
    if (values.length >= size) {
      values.splice(size, 150).forEach((item: any, i) => {
        icons.push({
          icon: item.toString(),
          meta: meta[i]
        });
      });
    }

    return icons;
  }
}
