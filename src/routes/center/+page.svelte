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
        IconRosetteDiscountCheck
    } from "@tabler/icons-svelte";
    import {fade} from "svelte/transition"
</script>

{#snippet ratings(rating: number)}
    <!-- Renders a star rating component based on the provided rating value (out of 5). -->
     <div class="flex gap-2">
         {#each {length: rating} as _, index}
            <IconStar
                class="text-indigo-500 fill-indigo-500"
            />
             {/each}

            {#each {length: 5 - rating} as _, index}
                <IconStar
                    class="text-indigo-500"
                />
            {/each}
     </div>
{/snippet}
<main class="flex justify-center min-h-screen" in:fade>
    <div class="space-y-16 py-8 md:w-10/12 md:space-y-22 lg:w-9/12  xl:w-7/12 xl:space-y-32">
        <div class="px-4 text-slate-700 space-y-8 lg:text-lg">
            <div class="">
                <img src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg" alt="" class="rounded-lg md:h-64 w-full object-cover shadow-md">
            </div>
            <div class="xl:mt-16">
                <h1 class="text-3xl font-bold flex items-center gap-0.5">Diamond Center <IconRosetteDiscountCheck class="text-indigo-600 size-8"/></h1>
            </div>
            <div class="leading-7 md:w-11/12 md:leading-8 lg:w-10/12 lg:leading-10 xl:mt-12">
                Located in the heart of Lagos, Diamond Event Center offers a
                sophisticated and versatile setting for a wide range of events, from
                glamorous weddings and grand galas to corporate conferences and
                intimate celebrations. With our state-of-the-art facilities,
                impeccable service, and attention to detail, we ensure that every
                event is a resounding success.
            </div>
            <p class="flex gap-2 font-semibold"><IconCurrencyNaira /> 2,500,500</p>
            <p class="flex gap-2 font-semibold"><IconUsersGroup /> 500 Guests</p>
            {@render ratings(3)}
            <div class="flex gap-3">
                <a
                    class="btn"
                    href="/center/book"
                    ><IconBookmark/> Book Center</a
                >
                <button
                    class="outline"
                    ><IconPhone/> Contact</button
                >
            </div>
        </div>
    
        <div class="px-3 space-y-4 text-indigo-800 text-lg md:max-w-9/12 lg:max-w-7/12 xl:text-lg">
            <div class="bg-indigo-50 px-4 py-8 rounded-lg space-y-6 md:px-6 md:py-12 lg:px-10 lg:py-12">
                <p class="flex gap-2 items-center"><IconMapPin /> Lagos</p>
                <p class="flex gap-2 items-center"><IconWifi /> No Wi-Fi</p>
                <p class="flex gap-2 items-center underline">
                    <IconWorldWww />
                    <span class="flex items-center"
                        >Website <IconArrowUpRight class="size-4" /></span
                    >
                </p>
            </div>
        </div>
    
        <div class="space-y-8">
            <h2 class="text-2xl font-bold px-4 mb-12">Gallery</h2>
            <div class="space-y-4 px-4 md:grid md:grid-cols-2 md:gap-1.5 xl:grid-cols-3 xl:gap-4">
                {#each [1, 2, 3, 4, 5, 6, 7, 8] as _, index}
                    <img
                        src="https://picsum.photos/seed/{index}/512/288"
                        alt=""
                        class="rounded-lg object-cover aspect-video"
                    />
                {/each}
            </div>
        </div>
    </div> 
</main>
