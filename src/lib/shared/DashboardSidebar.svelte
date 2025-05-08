<script lang="ts">
    import {
        IconUserEdit,
        IconPhotoEdit,
        IconMessage2,
        IconMenu2,
        IconSettings,
    } from "@tabler/icons-svelte";

    let isExpanded = $state(false);

    let toggleSidebar = () => {
        isExpanded = !isExpanded;
    };
</script>

{#if isExpanded}
    <aside
        class="sticky w-full flex flex-col py-6 top-[90vh] bg-slate-100 shadow-[0px_-4px_10px_#21212123] lg:w-44 lg:h-screen lg:shadow-none lg:py-12 lg:justify-between"
    >
        <div
            class="justify-evenly flex lg:flex-col lg:justify-start lg:gap-14 px-8"
        >
            <button
                class="hidden lg:block text-indigo-800 focus-visible:outline-none focus-visible:ring-indigo-500 focus-visible:ring-offset-8 focus-visible:ring-2 transition rounded-sm"
                onclick={toggleSidebar}><IconMenu2 /></button
            >
            <a href="/dashboard/bookings">
                <div class="link-icon expanded">
                    <div class="relative">
                        <IconMessage2 />
                        <span class="badge">234</span>
                    </div>
                    <p class="select-none">Bookings</p>
                </div>
            </a>
            <a href="/dashboard/profile" class="link">
                <div class="link-icon expanded">
                    <IconUserEdit />
                    <p class="select-none">Profile</p>
                </div>
            </a>
            <a href="/dashboard/gallery" class="link">
                <div class="link-icon expanded">
                    <IconPhotoEdit />
                    <p class="select-none">Gallery</p>
                </div>
            </a>
        </div>
        <div class="px-8">
            <a
                href="/dashboard"
                class="hidden:lg-block focus-visible:outline-none focus-visible:ring-indigo-500 focus-visible:ring-offset-8 focus-visible:ring-2 transition rounded-sm block"
            >
                <div
                    class="flex lg:justify-start lg:gap-4 items-center text-indigo-800"
                >
                    <IconSettings class="size-8" />
                    <p class="select-none text-lg">Settings</p>
                </div>
            </a>
        </div>
    </aside>
{:else}
    <aside
        class="sticky w-full flex flex-col py-6 top-[90vh] bg-slate-100 shadow-[0px_-4px_10px_#21212123] lg:w-18 lg:h-screen lg:shadow-none lg:py-12 lg:justify-between"
    >
        <div
            class="justify-evenly flex lg:flex-col lg:justify-start lg:gap-14 items-center px-8"
        >
            <button
                class="hidden lg:block text-indigo-800 focus-visible:outline-none focus-visible:ring-indigo-500 focus-visible:ring-offset-8 focus-visible:ring-2 transition rounded-sm"
                onclick={toggleSidebar}><IconMenu2 /></button
            >
            <a href="/dashboard/bookings">
                <div class="link-icon">
                    <div class="relative">
                        <IconMessage2 />
                        <span class="badge">234</span>
                    </div>
                </div>
            </a>
            <a href="/dashboard/profile" class="link">
                <div class="link-icon">
                    <IconUserEdit />
                </div>
            </a>
            <a href="/dashboard/gallery" class="link">
                <div class="link-icon">
                    <IconPhotoEdit />
                </div>
            </a>
        </div>
        <a href="/dashboard" class="link hidden lg:block">
            <div
                class="justify-evenly flex lg:flex-col lg:justify-start items-center text-indigo-800"
            >
                <IconSettings class="size-8 fill-indigo-100" />
            </div>
        </a>
    </aside>
{/if}

<style>
    @reference "tailwindcss";

    .link {
        @apply focus-visible:outline-none focus-visible:ring-indigo-500 focus-visible:ring-offset-8 focus-visible:ring-2 transition rounded-sm;
    }

    .link-icon {
        @apply flex flex-col gap-2 items-center text-sm text-slate-600 transform hover:scale-120 transition focus-visible:scale-120;
    }

    .expanded {
        @apply flex-row;
    }
    /*TODO Style the badges for the bookings link */
</style>
