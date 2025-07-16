"use client"

import React, { useState } from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Heart, ShoppingCart } from "lucide-react"

function cn(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

function navigationMenuTriggerStyle() {
    return cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "focus:outline-none focus:bg-gray-700 hover:bg-gray-900 px-4 py-2"
    )
}

const menuItems = [
    {
        label: "Anasayfa",
        href: "head",
        items: [],
    },
    {
        label: "PC Donanım",
        href: "/PC_hardware.tsx",
        items: [
            ["", "/products?alt_kategori_id=1", "depolama"],
            ["", "/products?alt_kategori_id=2", "Yazılım"],
            ["", "/products?alt_kategori_id=3", "aksesuar"],
            ["", "/products?alt_kategori_id=4", "network"],
            ["", "/products?alt_kategori_id=5", "ofis ürünleri"],
            ["", "/products?alt_kategori_id=6", "monitörler"],
            ["", "/products?alt_kategori_id=7", "oyuncu monitorleri"],
        ],
    },
    {
        label: "Headphone",
        href: "/headphone.tsx",
        items: [
            ["", "/products?alt_kategori_id=8", "bluetooth kulaklık"],
            ["", "/products?alt_kategori_id=9", "oyuncu kulakligi"],
            ["", "/products?alt_kategori_id=10", "kablolu kulaklık"],
            ["", "/products?alt_kategori_id=11", "kulak ici kulaklık"],
            ["", "/products?alt_kategori_id=12", "kulak ustu kulaklık"],
        ],
    },
    {
        label: "Telefon & Aksesuar",
        items: [
            ["", "/products?alt_kategori_id=13", "android telefon"],
            ["", "/products?alt_kategori_id=14", "ios telefon"],
            ["", "/products?alt_kategori_id=15", "yapay zeka telefon"],
            ["", "/products?alt_kategori_id=16", "kılıflar"],
            ["", "/products?alt_kategori_id=17", "sarj aletleri"],
            ["", "/products?alt_kategori_id=18", "ekran koruyucu"],
            ["", "/products?alt_kategori_id=19", "sar kablosu"],
            ["", "/products?alt_kategori_id=20", "telefon tutucu"],
        ],
    },
    {
        label: "Bilgisayar & Aksesuar",
        items: [
            ["", "/", "Masaüstü Bilgisayar"],
            ["", "/products?alt_kategori_id=21", "masaüstü bilgisayar"],
            ["", "/products?alt_kategori_id=22", "laptop"],
            ["", "/products?alt_kategori_id=23", "mac"],
            ["", "/products?alt_kategori_id=24", "gaming laptop"],
            ["", "/products?alt_kategori_id=25", "gaming masaüstü"],
            ["", "/products?alt_kategori_id=26", "gaming mouse"],
            ["", "/products?alt_kategori_id=27", "gaming keyboard"],
            ["", "/products?alt_kategori_id=28", "gaming kulaklık"],
            ["", "/products?alt_kategori_id=29", "gaming aksesuar"],

        ],
    },
    {
        label: "TV, Ses ve Monitör",
        items: [
            ["", "/products?alt_kategori_id=30", "tv"],
            ["", "/products?alt_kategori_id=31", "ses"],
            ["", "/products?alt_kategori_id=32", "monitör"],
        ],
    },
]

export default function Navbar() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <nav className="p-4 border-b border-gray-700 bg-gray-900 text-white">
            <ul className="flex items-center gap-6 w-full flex-wrap">

                {/* Sol Menü */}
                {menuItems.map((menu, i) => (
                    <li
                        className="relative"
                        key={i}
                        onMouseEnter={() => setActiveIndex(i)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <button className={navigationMenuTriggerStyle()}>{menu.label}</button>

                        {menu.items.length > 0 && activeIndex === i && (
                            <div className="absolute bg-white shadow-lg p-4 mt-2 z-10 w-[300px] text-black rounded-md">
                                <ul className="space-y-2">
                                    {menu.items.map(([title, href, child], idx) => (
                                        <ListItem key={idx} href={href} title={title}>
                                            {child}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}

                {/* Sağ Menü */}
                <div className="flex items-center gap-4 ml-auto">

                    <div>
                        <input
                            type="text"
                            placeholder="Ürün ara..."
                            className="bg-white text-black px-3 py-1 rounded-md w-48"
                        />
                    </div>

                    <div className="hover:text-red-500 cursor-pointer flex items-center gap-1">
                        <Heart size={20} /> <span className="text-sm">Favoriler</span>
                    </div>

                    <div className="hover:text-green-400 cursor-pointer flex items-center gap-1">
                        <ShoppingCart size={20} /> <span className="text-sm">Sepetim</span>
                    </div>

                    <div>
                        <select className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                            <option value="">Sırala</option>
                            <option value="fiyat_artan">Fiyat (Artan)</option>
                            <option value="fiyat_azalan">Fiyat (Azalan)</option>
                            <option value="en_yeni">En Yeni</option>
                            <option value="en_populer">En Popüler</option>
                        </select>
                    </div>

                    {/* Profil */}
                    <li className="relative group">
                        <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
                            Profilim
                        </button>
                        <div className="absolute right-0 hidden group-hover:block bg-white text-black shadow-lg mt-2 z-20 w-56 rounded-md p-2">
                            <p className="text-sm font-medium px-2 py-1">Hesabım</p>
                            <ul className="text-sm space-y-1">
                                <li className="hover:bg-gray-100 px-2 py-1 rounded">Profilim</li>
                                <li className="hover:bg-gray-100 px-2 py-1 rounded">Ayarlar</li>
                                <li className="hover:bg-gray-100 px-2 py-1 rounded">Destek</li>
                                <li className="hover:bg-gray-100 px-2 py-1 rounded text-red-600">Çıkış yap</li>
                            </ul>
                        </div>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

function ListItem({
    title,
    children,
    href,
}: {
    title: string
    href: string
    children: React.ReactNode
}) {
    return (
        <li>
            <Link href={href} className="block hover:bg-gray-100 p-2 rounded-md">
                <div className="text-sm font-medium">{title}</div>
                <p className="text-xs text-gray-500">{children}</p>
            </Link>
        </li>
    )
}
