import {Button, Card, Container, Input, Spacer} from "@nextui-org/react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../../app/firebaseApp";
import {useRouter} from "next/router";


export default function Login() {

    const router = useRouter();
    const user = getAuth().currentUser;

    if (user) {
        router.push('/dashboard');
    }
    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const data = {
            email: event.target[0].value,
            password: event.target[1].value,
        }
        const credential = await signInWithEmailAndPassword(auth, data.email, data.password)

        await router.push('/dashboard/dashboard')
    }

    return (

        <Container xs display="flex" alignItems="center" css={
            {minHeight: '100vh'}
        }>
            <Card>
                <Card.Header>
                    Login...
                </Card.Header>
                <Card.Divider/>
                <Card.Body>
                    <form onSubmit={handleSubmit}>

                        <Input label="Email" name="email" placeholder="Your Email Here" fullWidth/>
                        <Spacer/>
                        <Input.Password label="Password" name="password" type="password" fullWidth
                                        placeholder="Your password here"/>
                        <Spacer/>
                        <Button type="submit" auto>
                            Submit
                        </Button>
                    </form>
                </Card.Body>
            </Card>

        </Container>
    );
}
