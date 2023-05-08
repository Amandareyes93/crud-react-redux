import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

export function CreateNewUser() {
	const [result, setResult] = useState("");
	const { addUser } = useUserActions();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) return setResult("ko");
		addUser({ name, email, github });
		setResult("ok");
		form.reset();
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form className="" onSubmit={(e) => handleSubmit(e)}>
				<TextInput placeholder='Here the name' name="name" />
				<TextInput placeholder='Here the email' name="email" />
				<TextInput placeholder='Here the GitHub User' name="github" />

				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear usuario
					</Button>
					<span>
						{result === "ok" && <Badge color='green'>Saved</Badge>}
						{result === "ko" && <Badge color='red'>Error!</Badge>}
					</span>
				</div>
			</form>
		</Card>
	);
}
