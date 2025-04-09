let people = [];
const majors = [
	"econ",
	"business",
	"accounting",
	"marketing",
	"finance",
	"communication",
	"psychology",
];

do {
	const userPanels = [].slice
		.call(document.getElementsByClassName("bux-accordion__panel"))
		.map((element) => element);

	for (i in userPanels) {
		let user = {};
		//adds name
		try {
			user.name = document
				.getElementById("bux-accordion__trigger--" + i)
				.parentNode.getElementsByClassName(
					"omc-people-results__title_NOiuz"
				)[0].textContent;
		} catch {
			user.name = null;
		}

		try {
			user.major = userPanels[i]
				.getElementsByClassName("omc-people-results__info_x8zNx")[0]
				.textContent.trim();
		} catch {
			user.major = null;
		}
		//adds email
		try {
			user.email = userPanels[i]
				.getElementsByClassName("bux-link omc-people-results__email_axqw7")[0]
				.textContent.trim();
		} catch {
			user.email = null;
		}

		if (
			user.major &&
			majors.some((word) => user.major.toLowerCase().includes(word)) &&
			user.major.toLowerCase().includes("major") &&
			!user.major.toLowerCase().includes("job")
		) {
			people.push(user);
		}
	}
	if (document.getElementsByClassName("page-link next").length < 0) {
		break;
	}
	try {
		await document.getElementsByClassName("page-link next")[0].click();
	} catch {
		break;
	}
	console.log(people);
} while (true);

return people;
