<template>
	<main class="content">
		<div class="content-header">
			<form class="search" @submit.prevent="getfilteredData">
		        <input type="text" class="search__input" placeholder="Search" v-debounce="500" v-model.lazy="search" @change="getfilteredData">
		        <input type="submit" class="search__submit" value=""></p>
		    </form>
		    <div class="filter">
				<label class="filter__item" v-for="(stack, i) in stacks">
		            <input type="radio" class="filter-item__input" 
		            					name="filter" 
		            					:value="stack" 
		            					v-model="selectedFilter"
		            					@change="getfilteredData">
		            <span class="filter-item__text">{{ stack }}</span>
		        </label>
		    </div>
		</div>
		<div class="content-body">
			<template v-show="filteredPerson.length > 0">
				<app-person-card v-for="(person, i) in filteredPerson" :key="i" :person="person"></app-person-card>
			</template>
			<transition name="fade">
				<div class="plug" v-show="!filteredPerson.length > 0">
					<img src="../img/plug-img.svg" alt="plug" class="plug__img">
					<p class="plug__text">Sorry, no results. Try another search.</p>
				</div>
			</transition>
    	</div>
    </main>
</template>

<script>
import debounce from 'v-debounce';
import AppPersonCard from './personCard.vue';
import {mapGetters} from 'vuex';

export default {
	components: {
        AppPersonCard
    },
	data() {
		return {
			search: '',
			filteredPerson: [],
			selectedFilter: 'All',
			stacks: ['All', 'Dark', 'Light']
		}
	},
	computed: {
		...mapGetters({
			persons: 'persons/items'
		})
	},
	methods: {
		getfilteredData: function() {
			this.filteredPerson = this.persons;
			let selectedFilter = this.selectedFilter.toLowerCase();
			let search = this.search.toLowerCase();
			let filteredPersonByfilters = [];
			let filteredPersonBySearch = [];

			if (selectedFilter != 'all' && this.selectedFilter.length > 0) {
				filteredPersonByfilters = this.filteredPerson.filter(person => {
					return selectedFilter === person.side.toLowerCase();
				});
				this.filteredPerson = filteredPersonByfilters;
			}

			if (search != '') {
				filteredPersonBySearch = this.filteredPerson.filter(person => {
					return person.name.toLowerCase().indexOf(search) >= 0;
				});
				this.filteredPerson = filteredPersonBySearch;
			}
		}
	},
	directives: {
	   debounce
	},
	mounted() {
		this.getfilteredData();
	}
};
</script>