<template>
  <div>
    <header class="border-y">
      <nav>
        <nuxt-link to=""
          ><span class="desktop-brand hideOnMobile">MOG</span></nuxt-link
        >

        <ul class="desktop-ul">
          <li class="mobile-brand showOnMobile">
            <nuxt-link to="">MOG</nuxt-link>
          </li>
          <li class="hideOnMobile"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="hideOnMobile">
            <nuxt-link to="/products">Explore</nuxt-link>
          </li>
          <li class="hideOnMobile ml-auto">
            <nuxt-link to="/about">About Us</nuxt-link>
          </li>
          <li class="showOnMobile">
            <nuxt-link
              to=""
              @click="open = true"
              ><img
                src="/assets/images/menu.svg"
                alt="open sidebar"
            /></nuxt-link>
          </li>
        </ul>
        <ul
          class="sidebar divide-y flex gap-4"
          v-if="open"
        >
          <li class="nav-close">
            <nuxt-link
              to=""
              @click="open = false"
              ><img
                src="/assets/images/close.svg"
                alt="close sidebar"
            /></nuxt-link>
          </li>
          <li class="p-4"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="p-4"><nuxt-link to="/products">Explore</nuxt-link></li>
          <li class="p-4"><nuxt-link to="/about">About Us</nuxt-link></li>
        </ul>
      </nav>
    </header>

    <div>
      <slot />
    </div>

    <foot></foot>
  </div>
</template>

<script setup>
const open = ref(false);
</script>

<style scoped>
.router-link-active {
  border-bottom: 1px black;
  text-shadow: 0 0px 15px rgb(255, 255, 255);
  font-weight: 500;
  border-bottom: 1px solid black;
}

.desktop-brand {
  position: absolute;
  margin: auto;
  top: 2.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.5em;
  font-weight: 500;
  letter-spacing: 1.8rem;
  font-family: 'Times New Roman', Times, serif;
}

header {
  margin-top: 2.5rem;
}

.showOnMobile {
  display: none;
}

.desktop-ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
}

.desktop-ul > li {
  height: 50px;
}

.desktop-ul > li > a {
  height: 100%;
  padding: 0 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
}

.desktop-ul > li > a:hover {
  background-color: var(--select-color);
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: calc(50% - 2.25rem);
  z-index: 999;
  background-color: var(--background-color);
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
  header {
    margin-top: 0rem;
  }

  .mobile-brand {
    font-size: 2rem;
    font-family: custom, 'Times New Roman', Times, serif;
  }

  .desktop-ul {
    justify-content: space-between;
  }

  .showOnMobile {
    display: block;
  }

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
