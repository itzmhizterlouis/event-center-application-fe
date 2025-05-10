import type { PageLoad } from "./$types";
import {fetchEventCenter} from "$lib";

export const load: PageLoad = async function ({ params }) {
      const id = params.id;

      const data = await fetchEventCenter(id)
      return data
}