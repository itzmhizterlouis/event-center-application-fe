<script lang="ts">
    import { IconArrowRight, IconArrowLeft } from "@tabler/icons-svelte";
    import { fly } from "svelte/transition";
    import { createEventCenter } from "$lib";
    import { onMount } from "svelte";
    import { fetchUserInformation } from "$lib";
    import { goto } from "$app/navigation";

    let currentStep: number = $state(1);

    // //* All form bindings
    let name: string = $state("");
    let description: string = $state("");
    let street: string = $state("");
    let eventState: string = $state("");
    let country: string = $state("");
    let amount: number = $state(0);
    let files: FileList | null = $state(null);

    let isSubmitting: boolean = $state(false);

    const MAX_STEP: number = 4;
    const MIN_STEP: number = 1;

    let token = "";
    function validateForm() {}

    onMount(function () {
        const _token = localStorage.getItem("token");
        if (!_token) {
            goto("/signup");
        } else {
            token = _token;
            fetchUserInformation(_token).then((res) => {
                if (!res.userId) {
                    localStorage.removeItem("token");
                    goto("/signup");
                }
                console.log(res.phoneNumber);
                if (!res.phoneNumber) {
                    goto(`/signin?continue=${token}`);
                }
            });
        }
    });

    async function submit() {
        isSubmitting = true;
        const data = {
            amount,
            name,
            description,
            address: { streetAddress: street, state: eventState, country },
            medias: files!,
        };

        createEventCenter(token, data).then(function (response) {
            goto(`/center/${response.id}`);
        });
    }

    onMount(() => {
        if (!localStorage.getItem("token")) {
            goto("/signup");
        } else {
            fetchUserInformation().then((res) => {
                if (res.status == 401) {
                    localStorage.removeItem("token");
                    goto("/signup");
                }
            });
        }
    });
</script>

<div class="h-screen justify-items-center px-4">
    <div
        class="mt-12 p-6 shadow-md bg-slate-50 border-1 border-slate-100 rounded-md w-full md:w-7/12 lg:mt-24 xl:mt-36 xl:w-4/12"
    >
        {#key currentStep}
            <div class="mt-8 space-y-4" in:fly={{ x: 20 }}>
                <!-- *Step 1 -->
                {#if currentStep == 1}
                    <div class="">
                        <h2
                            class="text-slate-700 font-semibold text-xl xl:text-2xl"
                        >
                            Profile
                        </h2>
                        <p class="mt-4 xl:text-lg text-slate-600">
                            Set up the basic profile of your event center
                            application
                        </p>
                    </div>
                    <div class="mt-8 space-y-2">
                        <h3 class="text-slate-700 font-semibold">Name</h3>
                        <input
                            type="text"
                            placeholder="Name"
                            class="input"
                            name="name"
                            bind:value={name}
                        />
                    </div>
                    <div class="mt-8 space-y-2">
                        <h3 class="text-slate-700 font-semibold">
                            Description
                        </h3>
                        <textarea
                            placeholder="Description"
                            class="input h-24"
                            name="description"
                            bind:value={description}
                        ></textarea>
                    </div>
                {:else if currentStep == 2}
                    <div class="">
                        <h2
                            class="text-slate-700 font-semibold text-xl xl:text-2xl"
                        >
                            Location
                        </h2>
                        <p class="mt-4 text-slate-600 xl:text-lg">
                            Set up the location of your event center
                        </p>
                    </div>
                    <div class="mt-8 space-y-2 xl:mt-10">
                        <h3 class="text-slate-700 font-semibold">Street</h3>
                        <input
                            type="text"
                            placeholder="Street"
                            class="input"
                            name="street"
                            bind:value={street}
                        />
                    </div>
                    <div class="mt-8 space-y-2 xl:mt-10">
                        <h3 class="text-slate-700 font-semibold">State</h3>
                        <input
                            type="text"
                            placeholder="State"
                            class="input"
                            name="state"
                            bind:value={eventState}
                        />
                    </div>
                    <div class="mt-8 space-y-2 xl:mt-10">
                        <h3 class="text-slate-700 font-semibold">Country</h3>
                        <input
                            type="text"
                            placeholder="Country"
                            class="input"
                            name="country"
                            bind:value={country}
                        />
                    </div>
                {:else if currentStep == 3}
                    <div class="space-y-4">
                        <h2
                            class="text-slate-700 font-semibold text-xl xl:text-2xl"
                        >
                            Amount
                        </h2>
                        <p class="mt-4 text-slate-600 xl:text-lg">
                            How much do you want to charge for your event
                            center?
                        </p>
                        <input
                            type="number"
                            name="amount"
                            id=""
                            class="input"
                            placeholder="Amount"
                            bind:value={amount}
                        />
                    </div>
                {:else if currentStep == 4}
                    <div class="space-y-4">
                        <h2
                            class="text-slate-700 font-semibold text-xl xl:text-2xl"
                        >
                            Banner Image
                        </h2>
                        <p>Insert the banner image for your event center</p>
                        <input type="file" class="file-input" bind:files />
                    </div>
                {/if}

                <!--*Navigation buttons  -->
                <div class="mt-8 flex items-center justify-between xl:mt-10">
                    {#if currentStep != MAX_STEP}
                        <button
                            class="btn"
                            type="button"
                            onclick={() => {
                                currentStep++;
                            }}>Next <IconArrowRight /></button
                        >
                    {:else}
                        <button
                            class="btn"
                            onclick={submit}
                            disabled={isSubmitting}>Submit</button
                        >
                    {/if}

                    {#if currentStep != MIN_STEP}
                        <button
                            class="outline"
                            type="button"
                            onclick={() => {
                                currentStep--;
                            }}
                            ><IconArrowLeft /> Back
                        </button>
                    {/if}
                </div>
            </div>
        {/key}
    </div>
</div>

<style>
    @reference "tailwindcss";
    .file-input {
        @apply file:bg-indigo-200 file:border-1 file:border-slate-200 file:rounded-md file:px-4 file:py-2 file:cursor-pointer file:mr-4 hover:file:bg-indigo-100 file:transition file:shadow-sm focus:file:outline-none focus:file:ring-2 focus:file:ring-indigo-500 focus:file:border-transparent;
    }
</style>
