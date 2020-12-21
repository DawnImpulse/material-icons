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
    let icons = [{ icon: "", meta: {} }];
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

  /**
   * perform a query within json meta
   * @param query
   */
  search(query: string) {
    const mdi: any = Object.values(this.mdi);
    let icons = [{ icon: "", meta: {} }];
    icons = [];

    // inner function to map values
    function map(v, i) {
      icons.push({
        icon: mdi[i].toString(),
        meta: v
      });
    }

    meta.forEach((v, i) => {
      if (v.name.includes(query)) map(v, i);
      else {
        for (const j in v.aliases) {
          if (v.aliases[j].includes(query)) {
            map(v, i);
            break;
          }
        }
      }
    });

    console.log(icons);
    return icons;
  }
}
