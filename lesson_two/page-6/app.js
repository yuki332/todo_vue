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
		},
		// removeメソッドを作ってください
		// indexOfで該当タスクのインデックスを取得し
		// インデックスを使ってspliceで一つ要素を削除してください
		// remove: function(item){
		// 	const index = this.tasks.indexOf(item);
		// 	this.tasks.splice(index, 1);
		// }
	}
});
