<script>
	const menu_show = '/src/lib/assets/menu.svg';
	const menu_close = '/src/lib/assets/close.svg';
	let status = 'none';
	function show() {
		status = 'block';
	}
	function close() {
		status = 'none';
	}
</script>

<a href="/">
	<h1 class="brand">MOG</h1>
</a>
<header>
	<nav>
		<ul>
			<li class="hideOnMobile">
				<a href="/">Home</a>
			</li>
			<li class="hideOnMobile">
				<a href="/products">Explore</a>
			</li>
			<li class="hideOnMobile">
				<a href="/about">About Us</a>
			</li>
			<li class="nav-show">
				<a href="#" on:click={show}>
					<img src={menu_show} alt="sidebarOpen" />
				</a>
			</li>
		</ul>
		<ul class="sidebar" style="display: {status};">
			<li class="nav-close">
				<a href="#" on:click={close}>
					<img src={menu_close} alt="close" />
				</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/products">Explore</a>
			</li>
			<li>
				<a href="/about">About Us</a>
			</li>
		</ul>
	</nav>
</header>
<slot />

<style>
	* {
		margin: 0;
		padding: 0;
	}
	header {
		border: 1px solid black;
		border-width: 1px 0px 1px 0px;
		margin-top: 2.5rem;
	}
	nav {
		width: 100%;
		background-color: white;
	}
	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		list-style: none;
	}
	li {
		height: 50px;
	}

	a {
		height: 100%;
		padding: 0 30px;
		text-decoration: none;
		display: flex;
		align-items: center;
		color: black;
	}

	a:hover {
		background-color: aliceblue;
	}

	.brand {
		position: absolute;
		margin: auto;
		top: 2.5rem;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 3.5em;
	}
	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: calc(50% - 1.25rem);
		z-index: 999;
		background-color: white;
		display: none;
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-start;
		border: black solid;
		border-width: 0px 1px 0px 1px;
	}
	.sidebar li,
	.sidebar a {
		width: 100%;
		margin: 0;
	}
	.nav-close a {
		padding: 0;
	}
	.nav-close a img {
		position: relative;
		margin-left: auto;
		padding: 20px;
	}
	.nav-close a:hover {
		background-color: inherit;
	}
	.nav-show {
		display: none;
	}

	@media (max-width: 792px) {
		.hideOnMobile {
			display: none;
		}
		.nav-show {
			display: block;
		}
		.brand {
			font-size: 1em;
			position: relative;
		}
	}
</style>
