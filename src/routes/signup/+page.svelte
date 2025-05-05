<script lang="ts">
    import { IconBrandGoogle } from "@tabler/icons-svelte";
</script>

<main
    class="flex items-center justify-center min-h-screen bg-gray-100 p-4"
    id="bg"
>
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
            Create your Account
        </h2>

        <form class="space-y-4 lg:space-y-8 py-8">
            <div>
                <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Email Address</label
                >
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
            </div>

            <div>
                <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Password</label
                >
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
            </div>

            <div>
                <label
                    for="confirm-password"
                    class="block text-sm font-medium text-gray-700 mb-1"
                    >Confirm Password</label
                >
                <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    placeholder="••••••••"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
            </div>

            <button
                type="submit"
                class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium hover:cursor-pointer transition"
            >
                Submit
            </button>
        </form>

        <div class="mt-6 space-y-4">
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500"
                        >Or continue with</span
                    >
                </div>
            </div>

            <div class="mt-6">
                <button
                    type="button"
                    class="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-slate-800 text-sm font-medium text-indigo-50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:cursor-pointer transition"
                >
                    <IconBrandGoogle class="w-5 h-5 mr-2" />
                    Sign up with Google
                </button>
            </div>
        </div>

        <p class="mt-8 text-center text-sm text-gray-600">
            Already have an account?
            <a
                href="/"
                class="font-medium text-indigo-600 hover:text-indigo-500 underline"
                >Log in</a
            >
        </p>
    </div>
</main>

<style>
    /* Optional: Add any additional global styles or overrides here if needed */
    #bg {
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23e5e1ff' fill-opacity='0.4'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
    }
</style>
