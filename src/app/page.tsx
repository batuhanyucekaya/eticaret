"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductsPage() {
    const searchParams = useSearchParams()

    const altKategoriId = searchParams.get("alt_kategori_id")
    const kategoriId = searchParams.get("kategori_id")

    const [urunler, setUrunler] = useState([])

    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(data => {
                // Başlangıçta tüm ürünleri al
                let filtered = data

                // alt_kategori_id varsa onunla filtrele
                if (altKategoriId) {
                    filtered = data.filter(
                        (item: any) => item.alt_kategori_id == parseInt(altKategoriId)
                    )
                }

                // alt_kategori_id yoksa kategori_id ile filtrele
                else if (kategoriId) {
                    filtered = data.filter(
                        (item: any) => item.alt_kategori_id == parseInt(kategoriId)
                    )
                }

                // Filtrelenmiş veya tüm ürünleri set et
                setUrunler(filtered)
            })
            .catch(err => console.error("API Hatası:", err))
    }, [altKategoriId, kategoriId])

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Ürünler</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {urunler.map((item: any) => (
                    <div
                        key={item.id}
                        className="border p-4 rounded shadow bg-white text-black"
                    >
                        <h2 className="text-lg font-semibold">{item.isim}</h2>
                        <p className="text-sm text-gray-600">{item.aciklama}</p>
                        <p className="font-bold mt-2">{item.fiyat} ₺</p>
                        <img
                            src={item.resim_url}
                            alt={item.isim}
                            className="w-full h-40 object-contain mt-2"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
