export default {
	name: 'task-component',
	template: `
		<li class="todo_task">
			<button class="button_status"
							v-bind:class="{ 'is-completed' : task.completed }"
							v-on:click="$emit('update-status')">
					完了
			</button>
				{{ task.title }}
			<button class="button_remove" v-on:click="$emit('remove-task')">
					削除
			</button>
		</li>
	`,
	props: ['task']
}
