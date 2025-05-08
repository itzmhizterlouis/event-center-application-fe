<script lang="ts">
    import { IconMapPin, IconMessageCircleStar } from "@tabler/icons-svelte";
</script>

<div class="justify-items-center">
    <div
        class="px-4 py-8 space-y-6 w-full md:max-w-9/12 xl:max-w-6/12 xl:space-y-10"
    >
        <img
            src=""
            alt="banner"
            class="shadow-sm aspect-video rounded-md lg:h-64 lg:w-full"
        />
        <div class="space-y-2">
            <h2
                class="text-xl font-bold tracking-wide text-slate-900 lg:text-2xl xl:text-3xl"
            >
                Crimson Events
            </h2>
            <p class="flex gap-1 text-slate-600 lg:text-lg">
                <IconMapPin /> Lagos
            </p>
        </div>
        <p class="text-lg text-slate-800 lg:text-xl">
            Are you sure you want to book this event center?
        </p>
        <div class="md:w-7/12 xl:w-6/12"><textarea name="" id="message" class="input h-36 resize-none field-sizing-content" placeholder="Extra messages to send"></textarea></div>
        <div class="space-x-2">
            <button class="main-btn"
                ><IconMessageCircleStar />
                <span class="lg:text-lg xl:text-xl">Book</span></button
            >
        </div>
    </div>
</div>

<style>
    @reference "tailwindcss";

    .main-btn {
        @apply inline-flex gap-2 bg-indigo-600 px-4 py-2 text-white rounded-sm shadow-sm items-center focus:outline-0 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 hover:cursor-pointer transition hover:bg-indigo-500 lg:px-6 lg:py-2.5 xl:gap-3;
    }
</style>
