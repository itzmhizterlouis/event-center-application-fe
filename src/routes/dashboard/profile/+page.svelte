<script lang="ts">
    import {
        IconPencil,
        IconUserSquareRounded,
        IconMapPin,
        IconWorldWww,
        IconBuilding,
        IconMap,
        IconFlag,
    } from "@tabler/icons-svelte";
    import {fade} from "svelte/transition"
    import {fetchUserInformation, fetchUserEventCenter} from "$lib";
    import {onMount} from "svelte";

    let token: string;

    let userInformation = $state() as Promise<any>
    $inspect(userInformation)

    onMount(function (){
        token = localStorage.getItem("token")!;
        userInformation = fetchUserInformation(token);
    })
    

    //* Form bindings
    let name: string = $state("");
    let email: string = $state("");
    let description: string = $state("");  
    let eventState: string = $state("");
    let city: string = $state("");
    let country: string = $state("");
    let website: string = $state("");


</script>

    {#await userInformation then data}
    <!--* Main Section  -->
    <main class="space-y-12 px-4 py-8 w-full md:w-9/12 lg:h-screen lg:overflow-y-auto lg:w-full lg:justify-items-center" in:fade>
        <div
            class="space-y-8 border-1 border-slate-200 bg-slate-50 px-4 py-6 rounded-md lg:px-8 lg:py-12 lg:flex lg:flex-col lg:w-8/12 xl:flex-row xl:gap-28"
        >
            <div class="space-y-8 xl:w-96">
                <h2
                    class="text-lg font-semibold flex items-center gap-2 text-slate-900 lg:text-2xl w-96"
                >
                    <IconUserSquareRounded /> Profile
                </h2>
                <p class="text-slate-500 leading-8 lg:text-lg lg:max-w-11/12">
                    This section allows you to provide essential details about your event center. Fill in your name, email, and a brief description to help users understand what you offer.
                </p>
            </div>
            <div class="space-y-8 xl:w-112">
                <div class="flex flex-col gap-2">
                    <label class="text-slate-600" for="name">Name</label>
                    <input
                        type="text"
                        placeholder=""
                        class="input"
                        id="name"
                        disabled
                        bind:value={name}
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-slate-600" for="email">Email</label>
                    <input
                        type="email"
                        placeholder=""
                        class="input"
                        id="email"
                        disabled
                        bind:value={email}
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-slate-600" for="description"
                        >Description</label
                    >
                    <textarea
                        placeholder=""
                        class="input block h-36"
                        id="Description"
                        disabled
                        bind:value={description}
                    ></textarea>
                </div>
                <div class="flex justify-end">
                    <button class="btn"><IconPencil /> Edit</button>
                </div>
            </div>
        </div>

        <div
            class="space-y-8 border-1 border-slate-200 bg-slate-50 px-4 py-6 rounded-md mb-24 lg:px-8 lg:py-12 lg:flex lg:flex-col lg:w-8/12 xl:flex-row xl:gap-28"
        >
            <div class="space-y-8 xl:w-96">
                <h2
                    class="text-lg font-semibold flex items-center lg:text-2xl gap-2 text-slate-900"
                >
                    <IconMapPin /> Address
                </h2>
                <p class="text-slate-500 leading-8 lg:text-lg lg:max-w-11/12">
                    Provide the physical address of your event center. Include details like street, city, and country. You can also add your website link if available.
                </p>
            </div>
            <div class="xl:w-112 space-y-8">
                <div class="flex flex-col gap-2">
                    <label class="text-slate-600 inline-flex gap-1 items-center" for="name"><IconMap class="size-4"/> Street</label>
                    <input
                        type="text"
                        placeholder=""
                        class="input"
                        id="name"
                        disabled
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-slate-600 inline-flex gap-1 items-center" for="name"
                        ><IconBuilding class="size-4" /> City</label
                    >
                    <input
                        type="text"
                        placeholder=""
                        class="input"
                        id="name"
                        disabled
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-slate-600 inline-flex gap-1 items-center" for="name"><IconFlag class="size-4"/> Country</label>
                    <input
                        type="text"
                        placeholder=""
                        class="input"
                        id="name"
                        disabled
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-slate-600 inline-flex gap-1 items-center" for="name"
                        ><IconWorldWww class="size-4" /> Website</label
                    >
                    <input
                        type="text"
                        placeholder=""
                        class="input"
                        id="name"
                        disabled
                    />
                </div>
                <div class="flex justify-end">
                    <button class="btn"><IconPencil /> Edit</button>
                </div>
            </div>
        </div>
    </main>
    {/await}
