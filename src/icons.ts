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
        // search in aliases
        for (const j in v.aliases) {
          const alias = v.aliases[j].toLowerCase();
          if (alias.includes(query)) {
            map(v, i);
            break;
          }
        }

        // search in tags
        for (const k in v.tags) {
          const tag = v.tags[k].toLowerCase();
          if (tag.includes(query)) {
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
