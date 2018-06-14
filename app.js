const tab = {
	template: `
		<ul class="todo_list" v-show="isActive"><slot></slot></ul>
	`,
	props: {
		name: { required: true },
		selected: { default: false }
	},
	data(){
		return {
			isActive: false
		}
	},
	mounted() {
		this.isActive = this.selected;
	}
}
const tabs = {
	template:`
		<div>
			<ul class="todo_tabs">
				<li v-for="tab in tabs"
					:class="{ 'is-active' : tab.isActive }"
					@click="selectTab(tab)"
					>
					<button>{{ tab.name }}</button>
				</li>
			</ul>
			<slot></slot>
		</div>
	`,
	props: ['tasks'],
	data() {
		return {
			tabs: []
		}
	},
	mounted() {
		this.tabs = this.$children;
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.name == selectedTab.name);
			})
		}
	}
}

const header = {
	template: '<h1 class="todo_header">Task List</h1>'
}

const task = {
	template: `
		<li class="todo_task">
			<input type="checkbox" v-model="task.completed">
			<label>{{ task.title }}</label>
			<button @click="$emit('remove', task)">Remove</button>
		</li>
	`,
	props: ['task'],
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		mousePosition() {
			this.isActive = this.isActive ? false : true;
		}
	}
}

const app = new Vue({
	el: '#app',
	components: {
		'task': task,
		'app-header': header,
		'tabs': tabs,
		'tab': tab,
	},
	data: {
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
		}
	}
})
