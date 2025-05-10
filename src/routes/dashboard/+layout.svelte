<script lang="ts">
    import type {Snippet} from "svelte"
    import DashboardSidebar from "$lib/shared/DashboardSidebar.svelte";
    import {goto} from "$app/navigation"
    import {onMount} from "svelte"
    let {children}: {children: Snippet} = $props();


    onMount(function (){
        const token = localStorage.getItem("token")
    
        if (!token){
            goto('/signup')
        }        
    })

</script>

<div class="min-h-screen justify-items-center lg:flex ">

    <DashboardSidebar/>
{@render children()}

</div>