<script>
    import {
        IconCalendarEvent,
        IconPhone,
        IconBookmarksFilled,
    } from "@tabler/icons-svelte";
    import { fetchUserEventCenter, fetchUserbyId } from "$lib";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let eventCenterInformation = $state();
    let usersInfo = $state();
    $inspect(eventCenterInformation);
    $inspect(usersInfo);

    //* Fetching in onMount
    onMount(async function () {
        const token = localStorage.getItem("token") ?? "";

        if (!token) {
            goto("/signup");
        }

        eventCenterInformation = await fetchUserEventCenter(token);
        // @ts-ignore
        eventCenterInformation[0].bookings.forEach(async (booking) => {
            const user = await fetchUserbyId(token, booking.userId);
            usersInfo.push(user);
        });
    });
</script>

<main
    class="py-6 px-4 lg:py-12 justify-items-center overflow-y-auto lg:h-screen xl:py-20"
>
    <div class="w-full md:w-9/12 md:space-y-20 xl:w-6/12 space-y-8">
        <h1
            class="w-full text-xl flex text-slate-900 gap-1 font-semibold md:text-2xl xl:text-3xl"
        >
            <IconBookmarksFilled class="stroke-slate-900" /> Bookings
        </h1>
        <div class="space-y-16">
            {#if eventCenterInformation}
                {#each eventCenterInformation[0].bookings as eventCenter}
                    <div
                        class="space-y-8 shadow-sm bg-slate-50 border-1 border-slate-100 p-6 rounded-md lg:p-10"
                    >
                        <div class="space-y-4">
                            <p class="font-bold text-lg xl:text-xl">
                                User booked a spot
                            </p>
                            <p
                                class="text-slate-700 lg:w-10/12 lg:leading-8 xl:text-lg"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nihil eos explicabo, fugiat
                                reprehenderit voluptatem dolore laboriosam enim
                                aliquid eligendi? Voluptatem porro odio ipsam
                                impedit ex commodi ab placeat omnis at! Quos
                                odit, cum sed alias consectetur illum totam quas
                                incidunt, iure eveniet necessitatibus quia
                                possimus eligendi commodi at, quasi praesentium.
                            </p>
                            <time
                                datetime="12-07-2004"
                                class="flex text-slate-700 gap-2"
                                ><IconCalendarEvent /> 12th July 2004</time
                            >
                        </div>
                        <button class="btn"><IconPhone /> Contact User</button>
                    </div>
                {/each}
            {/if}
        </div>
    </div>
</main>
