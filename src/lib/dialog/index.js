import DDialog from './dialog.svelte';

function DialogService(config= {}) {
	let instance = new DDialog({
		target: document.body,
		props: {
      title: config.title,
			content: config.content,
			show: true
		}
	});
	instance.$set({
		instance,
		close() {
			instance.$set({ show: false });
      instance.$destroy();
		}
	});
	return instance;
}

export { DialogService, DDialog };
