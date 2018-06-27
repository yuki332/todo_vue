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
		// removeメソッドを追記
		// indexOfで該当タスクのインデックスを取得
		// インデックスを使ってspliceで一つ要素を削除
		// remove: function(item){
		// 	const index = this.tasks.indexOf(item);
		// 	this.tasks.splice(index, 1);
		// }
	}
});
