<script lang="ts">
    import {IconMapPin, IconCurrencyNaira, IconStar, IconEye} from "@tabler/icons-svelte";
</script>

<div class="px-4 py-8 lg:py-12 justify-items-center">
    <div class="w-full md:w-7/12 space-y-16 lg:w-9/12 xl:w-8/12 xl:space-y-32">
        <div class="w-full lg:w-9/12 justify-self-center xl:text-xl xl:w-7/12 xl:px-6"><input type="text" class="input" placeholder="Search by location" /></div>
        <div class="space-y-16 lg:grid lg:grid-cols-2 gap-x-4 xl:grid-cols-3 items-start xl:gap-x-8">
            {#each { length: 6 }}
                <div class="p-6 space-y-8 bg-slate-50 border-1 border-slate-200 rounded-lg shadow-md">
                    <img src="" alt="" class=" shadow-sm aspect-video" />
                    <div class="space-y-4">
                        <p class="text-lg font-semibold text-slate-900">Crimson Event Center</p>
                        <p class='text-slate-700 flex gap-1 items-center'><IconMapPin/> Lagos</p>
                        <p class="text-slate-700 flex gap-1 items-center"><IconCurrencyNaira/> 1.5 Million</p>
                    </div>
                    <div class="flex gap-4">
                        <a href="/center" class="btn"><IconEye/> Visit</a>
                        <button class="outline"><IconStar/> Star</button>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
