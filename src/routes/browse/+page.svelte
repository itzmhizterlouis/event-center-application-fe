<script lang="ts">
    import {
        IconMapPin,
        IconCurrencyNaira,
        IconStar,
        IconEye,
    } from "@tabler/icons-svelte";
    import Loader from "$lib/shared/Loader.svelte";
    import { fetchEventCenters, type EventCenterData, formatNumber, fetchEventCenterByName } from "$lib";

    let centers: Promise<EventCenterData[]> = $state(fetchEventCenters( 20, 0));
    $inspect(centers).with(function (_, value) {
        console.table(value);
    });

    let name: string = $state("");
</script>

<div class="px-4 py-8 lg:py-12 justify-items-center">
    <div class="w-full md:w-7/12 space-y-16 lg:w-9/12 xl:w-8/12 xl:space-y-32">
        <div
            class="w-full lg:w-9/12 justify-self-center xl:text-xl xl:w-7/12 xl:px-6 flex gap-1"
        >
            <input type="text" class="input" placeholder="Search by name" bind:value={name}/>
            <button
                class="btn"
                onclick={() => {
                    centers = fetchEventCenterByName(name, 20, 0);
                }}
            >
                <IconEye />
                Search
            </button>
        </div>
        <div
            class="space-y-16 lg:grid lg:grid-cols-2 gap-x-4 xl:grid-cols-3 items-start xl:gap-x-8"
        >
            {#await centers}
                <div class="w-full justify-items-center lg:col-span-2 xl:col-span-3">
                        <Loader/>
                </div>
            {:then data}
                {#each data as center}
                    <div
                        class="p-6 space-y-8 bg-slate-50 border-1 border-slate-200 rounded-lg shadow-md"
                    >
                        <img
                            src={center.medias[0] as string}
                            alt=""
                            class="shadow-sm aspect-video"
                            loading="lazy"
                            width="1280"
                            height="720"
                        />
                        <div class="space-y-4">
                            <p class="text-lg font-semibold text-slate-900">
                                {center.name}
                            </p>
                            <p class="text-slate-700 flex gap-1 items-center">
                                <IconMapPin /> {center.address.state}
                            </p>
                            <p class="text-slate-700 flex gap-1 items-center">
                                <IconCurrencyNaira /> {formatNumber(center.amount)}
                            </p>
                        </div>
                        <div class="flex gap-4">
                            <a href="/center/{center.id}" class="btn"><IconEye /> Visit</a>
                        </div>
                    </div>
                {/each}
            {/await}
        </div>
    </div>
</div>


