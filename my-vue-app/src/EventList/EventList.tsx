import React from "react";

const EventObjectJson = {
	id: 123456789,
	operation: "events",
	events: [
		{
			event: 4,
			card: "00B5009EC1A8",
			time: "2015-06-25 16:36:01",
			flag: 0,
		},
		{
			event: 16,
			card: "00BA00FE32A2",
			time: "2015-06-25 16:36:02",
			flag: 0,
		},
	],
};

const Employers = {
	Employers: [
		{
			fio: "Карпов Владимир Феликсович",
			card: "00B5009EC0A8",
		},
		{
			fio: "Максимов Евгений Георгиевич",
			card: "00BA00FE32A2",
		},
		{
			fio: "Беляев Аполлон Семёнович",
			card: "00B5009EC1A8",
		},
		{
			fio: "Галкин Ираклий Алексеевич",
			card: "00B5009EC012",
		},
	],
};

const Controller1 = {
	type: "Z5RWEB",
	sn: 50001,
	messages: [
		{
			cards: [
				{
					pos: 0,
					card: "00B5009EC1A8",
					flags: 0,
					tz: 255,
				},
				{
					pos: 1,
					card: "00BA00FE32A2",
					flags: 0,
					tz: 255,
				},
			],
		},
	],
};

const Controller2 = {
	type: "Z5RWEB",
	sn: 50001,
	messages: [
		{
			cards: [
				{
					pos: 0,
					card: "00B5009EC0A8",
					flags: 0,
					tz: 255,
				},
				{
					pos: 1,
					card: "00B5009EC012",
					flags: 0,
					tz: 255,
				},
			],
		},
	],
};

export function EventList() {
	return (
		<>
			<table border={5}>
				<tr>Какая то проходная.......... Номер 1</tr>
				<tr>
					<td>pos</td>
					<td>fio</td>
					<td>card</td>
					<td>flags</td>
					<td>tz</td>
				</tr>
				{Controller1["messages"].map((element) => {
					return element["cards"].map((cards) => {
						return Employers["Employers"].map((Employer) => {
							if (Employer.card == cards.card) {
								return (
									<tr>
										<td>{cards.pos}</td>
										<td>{Employer.fio}</td>
										<td>{cards.card}</td>
										<td>{cards.flags}</td>
										<td>{cards.tz}</td>
									</tr>
								);
							}
						});
					});
				})}
			</table>
			<br />
			<table border={5}>
				<tr>Какая то проходная.......... Номер 2</tr>
				<tr>
					<td>pos</td>
					<td>fio</td>
					<td>card</td>
					<td>flags</td>
					<td>tz</td>
				</tr>
				{Controller2["messages"].map((element) => {
					return element["cards"].map((cards) => {
						return Employers["Employers"].map((Employer) => {
							if (Employer.card == cards.card) {
								return (
									<tr>
										<td>{cards.pos}</td>
										<td>{Employer.fio}</td>
										<td>{cards.card}</td>
										<td>{cards.flags}</td>
										<td>{cards.tz}</td>
									</tr>
								);
							}
						});
					});
				})}
			</table>
		</>
	);
}
