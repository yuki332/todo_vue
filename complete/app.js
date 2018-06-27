const taskItem = {
	template:`
		<li class="todo_task">
			<button class="button_status" :class="{ 'is-completed' : task.completed }" @click="$emit('update')">{{ toggleCompletion }}</button>
			<label :class="{'is-completed' : task.completed }">{{task.title}}</label>
			<button class="button_remove" @click="$emit('remove')">削除</button>
		</li>
	`,
	props: ['task'],
	data() {
		return {
			isActive: false
		}
	},
	computed: {
		toggleCompletion: function(){
			return this.task.completed ? '完了' : '未完了';
		}
	}
}

const app = new Vue({
	el: '#app',
	components: {
		'task-item': taskItem
	},
	data: {
		newTask: '',
		tasks: [
			{title: 'my task', completed: false},
			{title: 'my task 2', completed: true},
			{title: 'my task 3', completed: false},
			{title: 'my task 4', completed: true},
			{title: 'my task 5', completed: false},
		],
		activeTab: 'all'
	},
	methods: {
		addTask: function() {
			if(this.newTask !== ''){
				this.tasks.push({title: this.newTask, completed: false});
				this.newTask = '';
			}
		},
		removeTask: function(item){
			this.tasks.splice(this.tasks.indexOf(item), 1);
		},
		toggleStatus: function(item){
			item.completed = !item.completed;
		},
		selectTab: function(tab){
			this.activeTab = tab;
		},
		selectedTab: function(tab){
			return tab == this.activeTab;
		}
	},
	computed: {
		completed: function(){
			const completed = [];
			this.tasks.forEach(task => {
				if(task.completed) completed.push(task);
			});
			return completed;
		},
		incomplete: function(){
			const incomplete = [];
			this.tasks.forEach(task => {
				if(!task.completed) incomplete.push(task);
			});
			return incomplete;
		}
	}
})
