const header = {
	template: '<h1 class="todo_header">Task List</h1>'
}

const task = {
	template: `
		<li :class="{'is-active':task.completed}">
			<button @click="$emit('update')">Finish</button>
			<span>{{ task.title }}</span>
			<button @click="$emit('remove')">remove</button>
		</li>
	`,
	props: ['task']
}

const app = new Vue({
	el: '#app',
	components: {
		'task': task,
		'app-header': header
	},
	data: {
		activeTab: 'all',
		newTask: '',
		tasks: [
			{title: 'my task', completed: false},
			{title: 'my task 2', completed: true},
			{title: 'my task 3', completed: false},
			{title: 'my task 4', completed: true},
			{title: 'my task 5', completed: false},
		]
	},
	computed: {
		completed(){
			const completed = [];
			this.tasks.forEach(task => {
				if(task.completed) completed.push(task);
			});
			return completed;
		},
		incomplete(){
			const incomplete = [];
			this.tasks.forEach(task => {
				if(!task.completed) incomplete.push(task);
			});
			return incomplete;
		}
	},
	methods: {
		addTask(){
			this.tasks.push({title: this.newTask, completed: false});
			this.newTask = '';
		},
		remove(target){
			this.tasks.splice(this.tasks.indexOf(target), 1);
		},
		selectTab(selectedTab){
			this.activeTab = selectedTab;
		},
		updateComplete(item){
			item.completed = !item.completed;
		}
	}
})
