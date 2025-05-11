<script lang="ts">
    import { IconMenu2 } from "@tabler/icons-svelte";
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import { fetchUserInformation } from "$lib";

    let isExpanded: boolean = $state(false);
    let token = $state("");
    let isValidated = $state(false);
    let userData = $state() as {
        userId: string;
        phoneNumber: string;
    };

    $inspect(userData).with(function (_, value){
        console.table(value)
    })
    onMount(async function () {
        token = localStorage.getItem("token")!;

        if (!token) {
            isValidated = false;
            return;
        }
        userData = await fetchUserInformation(token)
        isValidated = Boolean(userData.userId);
    });
</script>

<nav class=" p-4 md:px-8 lg:px-20 xl:px-40 xl:py-4">
    <div class="flex justify-between items-center">
        <div>
            <button
                class="md:hidden"
                onclick={() => {
                    isExpanded = !isExpanded;
                }}
            >
                <IconMenu2 class="stroke-indigo-700 size-8" />
            </button>
            <ul in:fade class="md:flex gap-2 hidden xl:gap-8">
                <!-- {#if isValidated}<li class="nav-link"><a href="/dashboard">Dashboard</a></li>{/if} -->
                <li class="nav-link"><a href="/browse">Browse</a></li>
            </ul>
        </div>
        {#if !isValidated}
            <div class="hidden md:flex gap-2">
                <a href="/signup" class="btn">Signup</a>
                <a href="/setup" class="outline">Add Event Center</a>
            </div>
        {:else}
            <div class="hidden md:flex gap-2">
                <!-- <a href="/dashboard" class="btn">Dashboard</a> -->
                <a href="/setup" class="outline">Add Event Center</a>
            </div>
        {/if}
    </div>
    {#key isExpanded}
        {#if isExpanded}
            <ul
                in:fade
                class="space-y-6 shadow-indigo-800 shadow-sm mt-2 p-4 fixed bg-slate-50 border-1 border-slate-100 rounded-md w-[91%]"
            >
                <!-- {#if isValidated}<li class="nav-link"><a href="/dashboard">Dashboard</a></li>{/if} -->
                <li class="nav-link"><a href="/browse">Browse</a></li>
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
