<template>
    <transition name="fade">
    	<article class="person">
            <div class="person__img">
                <img src="../img/person.jpg" alt="img">
            </div>
            <div class="person__body">
                <h3 class="person__name">{{ person.name }}</h3>
                <div class="person__options">
                    <div class="person-options__item">height: {{ person.height }}</div>
                    <div class="person-options__item">mass: {{ person.mass }}</div>
                    <div class="person-options__item">side: {{ person.side }}</div>
                </div>
            </div>
    	</article>
    </transition>
</template>

<script>

	export default {
		props: {
			person: {
				type: Object,
				required: true
			}
		}
	};
</script>