<script lang="ts">
    import type {Snippet} from "svelte"
    import DashboardSidebar from "$lib/shared/DashboardSidebar.svelte";
    let {children}: {children: Snippet} = $props();
</script>

<div class="min-h-screen justify-items-center lg:flex ">

    <DashboardSidebar/>
{@render children()}

</div>