<script lang="ts">
    import { IconMapPin, IconMessageCircleStar } from "@tabler/icons-svelte";
    import {bookEventCenter} from "$lib";	
    import {onMount} from "svelte";
    import {goto} from "$app/navigation";

    let { data } = $props();

    onMount(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            goto("/signup");
        }
    });


    let message: string = $state("");
    let date: string = $state("");

    $inspect(date).with(function (_, value){
        if (_ === "update")
            console.log("Date: ", new Date(value).toISOString());
    })

    function validate(){
        if (!date) {
            alert("Please select a date");
            return false;
        }
        if (!message) {
            alert("Please enter a message");
            return false;
        }
        return true;
    }

    function onclick(){
        if (validate()) {
            const token = localStorage.getItem("token");
            bookEventCenter(token!, data.id!, {bookingDate: new Date(date).toISOString(), message})
                .then((response) => {
                    alert("Booking successful");
                    goto(`/center/${data.id}`);
                })
                .catch((error) => {
                    console.error(error);
                    alert("An error occurred while booking");
                });
        }
    }
</script>


<div class="justify-items-center">
    <div
        class="px-4 py-8 space-y-6 w-full md:max-w-9/12 xl:max-w-6/12 xl:space-y-10"
    >
        <img
            src={data.medias[0] as string}
            alt="banner"
            class="shadow-sm aspect-video rounded-md lg:h-64 lg:w-full"
        />
        <div class="space-y-2">
            <h2
                class="text-xl font-bold tracking-wide text-slate-900 lg:text-2xl xl:text-3xl"
            >
                {data.name}
            </h2>
            <p class="flex gap-1 text-slate-600 lg:text-lg">
                <IconMapPin /> {data.address.state}
            </p>
        </div>
        <p class="text-lg text-slate-800 lg:text-xl">
            Are you sure you want to book this event center?
        </p>
        <div class="w-9/12 md:w-5/12 xl:w-3/12 space-y-2">
            <p class="text-slate-700">Date of booking</p>
            <input
                type="date"
                class="input field-sizing-content"
                placeholder="Select date"
                min={new Date().toISOString().split("T")[0]}
                bind:value={date}
            />
        </div>
        <div class="md:w-7/12 xl:w-6/12 space-y-2">
            <label for="message" class="block text-sm text-slate-700 mb-1">Additional Message (Optional)</label>
            <textarea name="message" id="message" class="input h-36 resize-none field-sizing-content" placeholder="Enter any extra messages or requests here..." bind:value={message}></textarea>
        </div>
        <div class="space-x-2">
            <button class="main-btn" {onclick}
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
