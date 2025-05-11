<script lang="ts">
    import {IconSearch} from "@tabler/icons-svelte";
   
</script>

<!--!This is meant to be the landing page  -->
<div class="px-4 md:px-8 lg:px-20 xl:px-40 ">
    <!--* Navbar  -->

    <main>
        <section class="hero py-36 xl:py-44 space-y-8 w-full md:w-8/12 lg:w-6/12 xl:w-6/12 xl:space-y-14 ">
            <h1
                class="text-3xl lg:text-4xl xl:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r/oklch from-indigo-600 to-purple-600 leading-13"
            >
                Find the best event centers in Nigeria
            </h1>
            <div class="flex gap-2 w-full xl:w-8/12">
                <input type="text" class="input" placeholder="Find event center" /><button
                    class="btn"><IconSearch/></button
                >
            </div>
        </section>
    </main>
</div>
 