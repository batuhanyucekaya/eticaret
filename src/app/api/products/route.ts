import { NextResponse } from "next/server";
import pool from "../../../lib/db";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const kategoriId = searchParams.get("kategori_id");
    const altKategoriId = searchParams.get("alt_kategori_id");

    try {
        let query = "SELECT * FROM urunler";
        const conditions: string[] = [];
        const values: any[] = [];

        if (kategoriId) {
            values.push(kategoriId);
            conditions.push(`kategori_id = $${values.length}`);
        }

        if (altKategoriId) {
            values.push(altKategoriId);
            conditions.push(`alt_kategori_id = $${values.length}`);
        }

        if (conditions.length > 0) {
            query += " WHERE " + conditions.join(" AND ");
        }

        const result = await pool.query(query, values);
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error("Veri çekme hatası:", error);
        return NextResponse.json({ error: "Veri alınamadı" }, { status: 500 });
    }
}
