import { sanityClient } from "@/lib/sanity/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    const existing = await sanityClient.fetch(
      `*[_type == "newsletter" && email == $email][0]`,
      { email }
    );

    if (existing) {
      return NextResponse.json(
        { success: false, error: "Email already subscribed" },
        { status: 409 }
      );
    }

    const doc = await sanityClient.create({
      _type: "newsletter",
      email,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, doc });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to subscribe" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const search = searchParams.get("search")?.trim() || "";

    const offset = (page - 1) * limit;
    const end = offset + limit;

    const searchFilter = search ? `&& email match $search` : "";
    const queryParams: Record<string, unknown> = { offset, end };
    
    if (search) queryParams.search = `*${search}*`;

    const query = `{
      "data": *[_type == "newsletter" ${searchFilter}] | order(subscribedAt desc) [$offset...$end] {
        _id, email, subscribedAt
      },
      "total": count(*[_type == "newsletter" ${searchFilter}])
    }`;

    const result = await sanityClient.fetch(query, queryParams);

    return NextResponse.json({
      success: true,
      data: result.data || [],
      total: result.total || 0,
      page,
      totalPages: Math.ceil((result.total || 0) / limit),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}