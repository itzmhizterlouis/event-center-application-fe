<script lang="ts">
   import googleImg from "../../assets/images/google.svg";
   import {enhance} from "$app/forms";
</script>

<main
    class="flex items-center justify-center min-h-screen bg-gray-100 p-4 w-full "
    id="bg"
>
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-12">
        <h2 class="text-2xl font-bold text-center text-gray-800">
            Create your Account
        </h2>

        <form action="" method="POST" use:enhance>
            <div class=" space-y-4">
                <div class="mt-6">
                    <button
                        type="submit"
                        class="w-full inline-flex justify-center items-center py-4 px-8 border border-gray-300 rounded-md shadow-sm bg-slate-800 text-lg font-medium text-indigo-50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:cursor-pointer transition gap-1"
                    >
                        <img
                            src={googleImg}
                            alt="Google Logo"
                            class="mr-2 size-8"
                        />
                        Sign up with Google
                    </button>
                </div>
            </div>
        </form>

        <p class=" text-center text-sm text-gray-600">
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
