<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

	let productID = 1;
	const handClick = () => {
		console.log('Product Clicked');
		goto(`/products/${productID}`, { replaceState: true });
	};
</script>

<main>
	<h1>New In</h1>
	<a href="/products">Products</a>
	<a href="/about">About Us</a>
</main>

<style>
	@font-face {
		font-family: 'Croisan';
		src: url('fonts/Le Atallier Italic.otf');
		font-weight: normal;
		font-style: normal;
	}
	main {
		font-family: '', 'Times New Roman', Times, serif;
	}
	h1 {
		color: black;
	}
	.current {
		text-decoration: underline;
	}
</style>
