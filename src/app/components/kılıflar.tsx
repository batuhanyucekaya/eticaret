"use client"


import { useEffect, useState } from "react"

import { Heart, ShoppingCart } from "lucide-react";

export default function Kategori1() {
    const [urunler, setUrunler] = useState([])

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setUrunler(data))
            .catch((err) => console.error("API Hatası:", err))
    }, [])

    return (
        <div className="p-6">

            <h1 className="text-2xl font-bold mb-4">Software</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {urunler
                    .filter((item: any) => item.alt_kategori_id === 7)
                    .map((item: any) => (
                        <div
                            key={item.id}
                            className="border p-4 rounded shadow bg-white text-black relative"
                        >
                            <h2 className="text-lg font-semibold">{item.isim}</h2>
                            <p className="text-sm text-gray-600">{item.aciklama}</p>
                            <p className="font-bold mt-2">{item.fiyat} ₺</p>
                            <img
                                src={item.resim_url}
                                alt={item.isim}
                                className="w-full h-40 object-contain mt-2"
                            />


                            <div className="flex justify-end gap-3 mt-3">
                                <button
                                    className="text-gray-500 hover:text-red-500"
                                    onClick={() => console.log("Favoriye eklendi:", item.id)}
                                >
                                    <Heart />
                                </button>
                                <button
                                    className="text-gray-500 hover:text-green-500"
                                    onClick={() => console.log("Sepete eklendi:", item.id)}
                                >
                                    <ShoppingCart />
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )

}

