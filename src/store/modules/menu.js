export default {
    namespaced: true,
    state: {
        items: [
            {
                text: 'Item 1',
                url: '#'
            },
            {
                text: 'Item 2',
                url: '#'
            },
            {
                text: 'Item 3',
                url: '#'
            },
            {
                text: 'Item 4',
                url: '#'
            },
            {
                text: 'Item 5',
                url: '#'
            },
            {
                text: 'Item 6',
                url: '#'
            }
        ]
    },
    getters: {
        items(state) {
            return state.items;
        }
    }
}
