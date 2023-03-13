import { ethers } from 'ethers'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'
import { create as ipfsHttpClient } from 'ipfs-http-client'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0');

import {
    marketplaceAddress
} from '../config'

import NFTMarketplace from '../artifacts/contracts/NFTMarket.sol/NFTMarketplace.json'

export default function CreateItem() {
    const [fileUrl, setFileUrl] = useState(null)
    const [formInput, updateFormInput] = useState({ price: '', name: '', description: '' })
    const router = useRouter();

    async function onChange(e) {
        const file = e.target.files[0];
        try {
            const added = await client.add(file, {
                progress: (prog) => console.log(`received: ${prog}`)
            })
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url)

        } catch (error) {
            console.log(error)

        }

    }

    

}