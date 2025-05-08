<script lang="ts">
    import {fade} from "svelte/transition";
    import {IconPencil, IconPhotoSquareRounded, IconLibraryPhoto} from "@tabler/icons-svelte";
</script>

<main class="space-y-12 px-4 py-12  w-full md:w-9/12 lg:h-screen lg:overflow-y-auto lg:w-full" in:fade>
    <div class="space-y-16 px-2 mb-14 w-full lg:justify-items-center xl:space-y-24">
        <div class="bg-slate-100 border-1 border-slate-200 px-4 py-6 rounded-md space-y-4 lg:w-142 lg:space-y-12 xl:w-192 xl:px-8 xl:py-12">
            <p class="text-slate-900 text-lg font-semibold xl:text-2xl flex items-center gap-2"><IconPhotoSquareRounded/> Banner Image</p>
            <img src="" alt="banner" class="aspect-video shadow-sm">
            <button class="btn"><IconPencil/> Change</button>
        </div>
        <div class="space-y-6 xl:space-y-10">
            <p class="text-slate-900 text-lg font-semibold xl:text-2xl flex items-center gap-2"><IconLibraryPhoto/> Gallery</p>
            <button class="btn"><IconPencil/> Edit</button>
            <div class="space-y-4 grid md:grid-cols-2 gap-x-2 lg:gap-x-6 xl:grid-cols-3">
                {#each {length: 8}}
                        <img src="" class="size-72 xl:size-84 shadow-sm rounded-md" alt="Gallery">
                {/each}
            </div>
        </div>
    </div>
</main>