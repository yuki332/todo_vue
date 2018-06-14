const tab = {
	template: `
		<div v-show="isActive"><slot></slot></div>
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
			<ul>
				<li v-for="tab in tabs"
					:class="{ 'is-active' : tab.isActive }"
					@click="selectTab(tab)"
					>
					<a href="#">{{ tab.name }}</a>
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
	template: '<h1>Task List</h1>'
}

const task = {
	template: `
		<div>
			<input type="checkbox" v-model="task.completed">
			<span>{{ task.title }}</span>
			<button @click="$emit('remove', task)">remove</button>
		</div>
	`,
	props: ['task']
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
