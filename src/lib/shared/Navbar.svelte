<script lang="ts">
    import { IconMenu2 } from "@tabler/icons-svelte";
    import { fade } from "svelte/transition";

    let isExpanded: boolean = $state(false);
</script>

<nav class=" p-4 md:px-8 lg:px-20 xl:px-40 xl:py-6">
    <div class="flex justify-between items-center">
        <div>
            <button class="md:hidden"
                onclick={() => {
                    isExpanded = !isExpanded;
                }}
            >
                <IconMenu2 class="stroke-indigo-700 size-8" />
            </button>
            <ul
                in:fade
                class="md:flex gap-2 hidden xl:gap-8"
            >
                <li class="nav-link"><a href="/dashboard">Dashboard</a></li>
                <li class="nav-link"><a href="/browse">Browse</a></li>
            </ul>
        </div>
        <div class="flex gap-2">
            <a href="/signup" class="btn">Signup</a>
            <a href="/setup" class="outline">Be a vendor</a>
        </div>
    </div>
    {#key isExpanded}
        {#if isExpanded}
            <ul
                in:fade
                class="space-y-6 shadow-indigo-800 shadow-sm mt-2 p-4 fixed bg-slate-50 border-1 border-slate-100 rounded-md w-[91%]"
            >
                <li class="nav-link"><a href="/center">User profile</a></li>
                <li class="nav-link"><a href="/dashboard">Dashboard</a></li>
                <li class="nav-link"><a href="/browse">Browse</a></li>
                <li class="nav-link"><a href="/center/book">Book</a></li>
                <li class="nav-link"><a href="/setup">Setup</a></li>
            </ul>
        {/if}
    {/key}
</nav>

<style>
    @reference "tailwindcss";

    .nav-link {
        @apply rounded-md px-4 py-2 hover:bg-slate-200 transition;
    }
</style>
