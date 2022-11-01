import Link from "next/link"
import Head from "next/head";

export async function getStaticProps() {

    const urlAPI = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(urlAPI)
        .then((resp) => {
            return resp.json();
        }).then((json) => {
            return json
        })

    return {

        props: {
            faq
        }

    };
}

export default function FAQ(props) {

    return (
        <div>
            <Head><title>FAQ</title></Head>
            <h1>FAQ</h1>
            <Link href={"/"}>Voltar para Home</Link>
            <ul>
                {
                    props.faq.map((item) => <li key={item.question}>
                        <article>
                            <h2>{item.question}</h2>
                            <p>{item.answer}</p>
                        </article>
                    </li>)
                }
            </ul>

        </div>
    )

}