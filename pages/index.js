import { useRouter } from "next/router";

function Home() {
    const router = useRouter();
    const pessoa = router.query.nome;

    return <h1>Oi {pessoa}! To aqui para fazer o desafio do curso.dev, e te dizer que vc é uma pessoa incrível.</h1>
}

export default Home;
