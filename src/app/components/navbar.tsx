"use client"

import React from "react"
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
        items: [],
    },
    {
        label: "PC Donanım",
        items: [
            ["", "/", "Depolama"],
            ["", "/docs", "Yazılım"],
            ["", "/docs/installation", "Aksesuar"],
            ["", "/docs/installation", "Network"],
            ["", "/docs/installation", "Ofis Ürünler"],
            ["", "/docs/installation", "Monitörler"],
            ["", "/docs/installation", "Oyuncu Monitörleri"],
        ],
    },
    {
        label: "Kulaklık",
        items: [
            ["", "/", "Bluetooth Kulaklık"],
            ["", "/docs", "Oyuncu Kulaklığı"],
            ["", "/docs/installation", "Kablolu Kulaklık"],
            ["", "/docs/installation", "Kulak İçi Kulaklık"],
            ["", "/docs/installation", "Kulak Üstü Kulaklık"],
        ],
    },
    {
        label: "Telefon & Aksesuar",
        items: [
            ["", "/", "Android Telefonlar"],
            ["", "/docs", "iOS Telefonlar"],
            ["", "/docs/installation", "Yapay Zeka Telefon"],
            ["", "/docs/installation", "Kılıflar"],
            ["", "/docs/installation", "Şarj Aleti"],
            ["", "/docs/installation", "Ekran Koruyucu"],
            ["", "/docs/installation", "Şarj Kablosu"],
            ["", "/docs/installation", "Telefon Tutucu"],
        ],
    },
    {
        label: "Bilgisayar & Aksesuar",
        items: [
            ["", "/", "Masaüstü Bilgisayar"],
            ["", "/docs", "Laptop"],
            ["", "/docs/installation", "Mac"],
            ["", "/docs/installation", "Gaming Laptop"],
            ["", "/docs/installation", "Gaming Masaüstü"],
            ["", "/docs/installation", "Gaming Mouse"],
            ["", "/docs/installation", "Gaming Klavye"],
            ["", "/docs/installation", "Gaming Kulaklık"],
            ["", "/docs/installation", "Gaming Aksesuar"],
        ],
    },
    {
        label: "TV, Ses ve Monitör",
        items: [
            ["", "/", "TV"],
            ["", "/docs", "Monitörler"],
            ["", "/docs/installation", "Hoparlör"],
        ],
    },
]

export default function Navbar() {
    return (
        <nav className="p-4 border-b border-gray-700 bg-gray-900 text-white">
            <ul className="flex items-center gap-6 w-full flex-wrap">

                {/* Sol Menü */}
                {menuItems.map((menu, i) => (
                    <li className="relative group" key={i}>
                        <button className={navigationMenuTriggerStyle()}>{menu.label}</button>
                        {menu.items.length > 0 && (
                            <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 mt-2 z-10 w-[300px] text-black rounded-md">
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

                {/* Sağ Menü Öğeleri */}
                <div className="flex items-center gap-4 ml-auto">

                    {/* Arama Kutusu */}
                    <div>
                        <input
                            type="text"

                            placeholder="Ürün ara..."
                            className="bg-white text-black px-3 py-1 rounded-md w-48"
                        />
                    </div>

                    {/* Favoriler */}
                    <div className="hover:text-red-500 cursor-pointer flex items-center gap-1">
                        <Heart size={20} /> <span className="text-sm">Favoriler</span>
                    </div>

                    {/* Sepet */}
                    <div className="hover:text-green-400 cursor-pointer flex items-center gap-1">
                        <ShoppingCart size={20} /> <span className="text-sm">Sepetim</span>
                    </div>

                    {/* Sıralama Menüsü */}
                    <div>
                        <select className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
                            <option value="">Sırala</option>
                            <option value="fiyat_artan">Fiyat (Artan)</option>
                            <option value="fiyat_azalan">Fiyat (Azalan)</option>
                            <option value="en_yeni">En Yeni</option>
                            <option value="en_populer">En Popüler</option>
                        </select>
                    </div>

                    {/* Profil Menüsü */}
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
