import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

//import ManualHeader from '../components/ManualHeader'
import Header from "../components/Header"
import LotteryEnterance from "../components/LotteryEnterance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart contract lottery</title>
                <meta name="description" content="our smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <ManualHeader /> */}
            <Header />
            <LotteryEnterance />
        </div>
    )
}
