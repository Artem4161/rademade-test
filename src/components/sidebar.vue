<template>
	<section class="sidebar">
        <h2 class="sidebar__title">Navigation</h2>
        <nav class="sidebar__nav">
            <ul class="sidebar__nav-list">
                <li v-for="(item, i) in menu"
                	:key="i">
                	<a :href="item.url" class="nav-list__item">{{ item.text }}</a>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		computed: {
			...mapGetters({
				menu: 'menu/items'
			})
		}
	};
</script>