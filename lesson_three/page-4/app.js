const headerComponent = {
	template: `<h1 class="title">ヘッダーコンポーネント</h1>`
}

// this should be copy and paste
const app = new Vue({
	el: '#app',
	components: {
		'header-component': headerComponent
	},
	data: {
		newTask: '',
		tasks:[
			{ title: '買い物', completed: false },
			{ title: '洗濯', completed: true },
			{ title: '食器洗い', completed: false },
			{ title: '宿題をする', completed: true },
			{ title: '塾の課題をする', completed: false }
		],
		activeTab: 'all'
	},
	methods: {
		toggleCompletion: function(item){
			item.completed = !item.completed
		},
		remove: function(item){
			const index = this.tasks.indexOf(item);
			this.tasks.splice(index, 1);
		},
		addTask: function(){
			this.tasks.push({title: this.newTask, completed: false});
			this.newTask = '';
		},
		selectTab: function(tab){
			this.activeTab = tab;
		}
	},
	computed: {
		// completedを加える
		completed: function(){
			// const completedTasks = [];
			// this.tasks.forEach(task => {
			// 	if (task.completed) completedTasks.push(task);
			// });
			// return completedTasks;
			// もしくは
			return this.tasks.filter(task => task.completed);
		},
		// incompleteを加える
		incomplete: function(){
			// const incompleteTasks = [];
			// this.tasks.forEach(task => {
			// 	if (!task.completed) incompleteTasks.push(task);
			// });
			// return incompleteTasks;
			// もしくは
			return this.tasks.filter(task => !task.completed);
		}
	}
});
