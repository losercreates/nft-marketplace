import { ConnectButton } from "web3uikit"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <Image src="/logo.svg" height={70} width={70} />
            <h1 className="py-4 px-4 font-bold text-3xl">Ethket</h1>
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="mr-4 p-6">Home</a>
                </Link>
                <Link href="/sell-nft">
                    <a className="mr-4 p-6">Sell NFT</a>
                </Link>
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
