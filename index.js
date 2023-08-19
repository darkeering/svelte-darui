export function myPlugin() {
	return {
		name: 'vite-plugin-my',
		enforce: 'pre',
		transform(code, id, ss) {
			if (id.indexOf('node_modules') > -1) return code;
			const test = /<DemoExample>(.*)<\/DemoExample>/gmis;
			let newCode = code;
			if (test.test(newCode)) {
        newCode = newCode.replace(/\t/gmis, "  ");
        // newCode = newCode.replace(/    /gmsi, '  ')
				newCode = newCode.replace(test, "<DemoExample code={`$1`}>$1</DemoExample>");
			}
			return newCode;
		}
	};
}
