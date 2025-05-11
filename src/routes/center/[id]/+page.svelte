<script lang="ts">
    import {
        IconCurrencyNaira,
        IconUsersGroup,
        IconMapPin,
        IconWorldWww,
        IconWifi,
        IconArrowUpRight,
        IconStar,
        IconBookmark,
        IconPhone,
        IconRosetteDiscountCheck,
    } from "@tabler/icons-svelte";
    import { fade } from "svelte/transition";
    import {formatNumber} from "$lib";

    let { data } = $props();
</script>

{#snippet ratings(rating: number)}
    <!-- Renders a star rating component based on the provided rating value (out of 5). -->
    <!-- <div class="flex gap-2">
        {#each { length: rating } as _, index}
            <IconStar class="text-indigo-500 fill-indigo-500" />
        {/each}

        {#each { length: 5 - rating } as _, index}
            <IconStar class="text-indigo-500" />
        {/each}
    </div> -->
{/snippet}
{#await data then center}
{@const gallery = center.medias as string[]}
{console.table(center)}
    <main class="flex justify-center min-h-screen" in:fade>
        <div
            class="space-y-16 py-8 md:w-10/12 md:space-y-22 lg:w-9/12 xl:w-7/12 xl:space-y-32"
        >
            <div class="px-4 text-slate-700 space-y-8 lg:text-lg">
                <div class="">
                    <img
                        src={center.medias[0] as string}
                        loading="lazy"

                        alt=""
                        class="rounded-lg md:h-64 w-full object-cover shadow-md"
                    />
                </div>
                <div class="xl:mt-16">
                    <h1 class="text-3xl font-bold flex items-center gap-0.5">
                        {center.name} <IconRosetteDiscountCheck
                            class="text-indigo-600 size-8"
                        />
                    </h1>
                </div>
                <div
                    class="leading-7 md:w-11/12 md:leading-8 lg:w-10/12 lg:leading-10 xl:mt-12"
                >
                    {center.description}
                </div>
                <p class="flex gap-2 font-semibold">
                    <IconCurrencyNaira /> {formatNumber(center.amount)}
                </p>
                <!-- <p class="flex gap-2 font-semibold">
                    <IconUsersGroup /> 500 guests
                </p> -->
                {@render ratings(3)}
                <div class="flex gap-3">
                    <a class="btn" href="/center/{center.id}/book"
                        ><IconBookmark /> Book Center</a
                    >
                    <a href="tel:{center.phoneNumber}" class="underline text-indigo-800">{center.phoneNumber}</a>
                </div>
            </div>


            <div class="space-y-8">
                <h2 class="text-2xl font-bold px-4 mb-12">Gallery</h2>
                <div
                    class="space-y-4 px-4 md:grid md:grid-cols-2 md:gap-1.5 xl:grid-cols-3 xl:gap-4"
                >
                    {#each gallery as image, index}
                        <img
                            src={image}
                            alt=""
                            class="rounded-lg object-cover aspect-video bg-red-500"
                        />
                    {/each}
                </div>
            </div>
        </div>
    </main>
{/await}
