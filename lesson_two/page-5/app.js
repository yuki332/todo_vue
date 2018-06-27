// this should be copy and paste
const app = new Vue({
	el: '#app',
	data: {
		tasks:[
			{ title: '買い物', completed: false },
			{ title: '洗濯', completed: false },
			{ title: '食器洗い', completed: false },
			{ title: '宿題をする', completed: false },
			{ title: '塾の課題をする', completed: false }
		]
	},
	methods: {
		toggleCompletion: function(item){
			item.completed = !item.completed
		}
	}
});
