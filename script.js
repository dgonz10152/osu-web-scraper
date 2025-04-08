const nameList = [].slice
	.call(
		document.getElementsByClassName("bux-link omc-people-results__title_OZTEy")
	)
	.map((element) => element.textContent);

const emailList = [
	...new Set(
		[].slice
			.call(
				document.getElementsByClassName("bux-link omc-people-results__email_axqw7")
			)
			.map((element) => element.textContent.trim())
	),
];

const people = [];

for (let i = 0; i < Math.min(nameList.length, emailList.length); i++) {
	people.push({ name: nameList[i], email: emailList[i] });
}

return JSON.stringify(people);
