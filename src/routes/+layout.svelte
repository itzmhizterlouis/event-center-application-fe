<script lang="ts">
	import '../app.css';
	import {navigating} from "$app/state";
	 import Navbar from "$lib/shared/Navbar.svelte"
	
	let { children } = $props();
</script>
{#if navigating.to}
<div class="loader"></div>
{/if}
<Navbar/>
{@render children()}

<style>
	.loader {
			position:fixed;
			width: 100%;
			height: .5rem;
			animation: gradientAnimation 2s infinite linear;
			background-size: 200% 100%; /* To make the gradient appear to move */
		}

		@keyframes gradientAnimation {
			0% {
				background-position: 0% 50%;
				background-color: #4f46e5; /* indigo-500 */
			}
			50% {
				background-position: 100% 50%;
				background-color: #bfdbfe; /* blue-200 */
			}
			100% {
				background-position: 0% 50%;
				background-color: #4f46e5; /* indigo-500 */
			}
		}
</style>
