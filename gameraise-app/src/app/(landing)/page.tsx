"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import arbitrumLogo from "@/assets/arbitrum.svg"
import avaxLogo from "@/assets/avalanche.svg"
import baseLogo from "@/assets/base.svg"
import starknetLogo from "@/assets/starknet.svg"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Landing() {
  const router = useRouter()

  return (
    <main>
      <>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="mt-20 w-full">
            <Hero
              onGetGamingPressed={() => router.push("/get-gaming")}
              onGetFundedPressed={() => router.push("/get-funded")}
            />
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center justify-center bg-black">
          <div className="my-4 mb-10 text-4xl text-white">
            Explore games across ecosystems
          </div>
          <div className="flex space-x-8">
            <Image
              src={arbitrumLogo}
              alt="Arbitrum Logo"
              width={100}
              height={100}
            />
            <Image
              src={avaxLogo}
              alt="Avalanche Logo"
              width={100}
              height={100}
            />
            <Image src={baseLogo} alt="Base Logo" width={100} height={100} />
            <Image
              src={starknetLogo}
              alt="StarkNet Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center justify-center bg-black">
          <div className="my-4 mb-10 text-center text-4xl text-white">
            Get early access and excusive in-game perks for on-chain game
            communities
          </div>
        </div>
        <div className="mt-24 flex flex-col items-center justify-center bg-black">
          <div className="my-4 mb-10 text-center text-4xl text-white">
            Sync acheivements across games
          </div>
        </div>
      </>
    </main>
  )
}

function Hero(props: {
  onGetGamingPressed: () => void
  onGetFundedPressed: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-between">
        <Button
          variant="link"
          onClick={props.onGetFundedPressed}
          className="text-5xl font-bold text-white"
        >
          GET FUNDED
        </Button>
        <div className="text-6xl font-bold text-white">/</div>
        <Button
          variant="link"
          onClick={props.onGetGamingPressed}
          className="text-5xl font-bold text-white"
        >
          GET GAMING
        </Button>
      </div>
    </div>
  )
}
