<script lang="ts">
    import { IconSearch, IconBuilding } from "@tabler/icons-svelte";
    import { onMount } from "svelte";
    import { fetchUserInformation, updatePhoneNumber } from "$lib";
    import {goto} from "$app/navigation";
    import Loader from "$lib/shared/Loader.svelte";

    let { data } = $props();
    let phoneNumber: string = $state("");
    $inspect(phoneNumber).with(function (_, values){
        console.table(values)
    })
    
    let userInformation: Promise<any> = $state() as Promise<any>;
        $inspect(userInformation).with(function (_, values){
            console.table(values)
        })

    onMount(function () {
        if (data.token) localStorage.setItem("token", data.token);
        else goto("/signup");
        
        userInformation = fetchUserInformation(localStorage.getItem("token")!);
    });


    async function reload(){  
        userInformation = fetchUserInformation(localStorage.getItem("token")!);
    }

    async function submitPhoneNumber() {
        if (phoneNumber.length < 10) {
            alert("Phone number must be at least 10 digits");
            return;
        }
        const response = await updatePhoneNumber(localStorage.getItem('token')!, phoneNumber);
        console.log(data.token!)
        console.log(response)
        reload();
    }
</script>

<div class="min-h-screen justify-items-center content-center">
    <div
        class="p-6 lg:p-12 space-y-8 bg-slate-100 border-1 border-slate-200 rounded-md shadow-md m-2"
    >
        {#if userInformation}
        {#await userInformation }
        <div class="justify-items-center"><Loader/></div>
        {:then user}
            <div class="space-y-4">
                <p>Welcome {user.firstName}</p>

                {#if true}
                    <div class="space-y-2">
                        <p
                            class="text-lg text-indigo-500 hover:text-indigo-700"
                            >Please enter your phone number</p
                        >
                        <div class="flex gap-1">
                            <input
                                type="text"
                                class="input"
                                placeholder="Phone Number"
                                bind:value={phoneNumber}
                            />
                            <button class="btn" onclick={submitPhoneNumber}>Submit</button>
                        </div>
                    </div>
                {:else}
                    <a href="/browse" class="btn"><IconSearch /> Browse</a>
                    <a href="/setup" class="outline"
                        ><IconBuilding /> Become a vendor</a
                    >
                {/if}
            </div>
        {/await}
        {/if}
    </div>
</div>
