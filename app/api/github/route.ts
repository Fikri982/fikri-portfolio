import { NextResponse } from "next/server";

export async function GET() {
  const username = "Fikri982";
  
  // Clean fallback data matching Fikri's public stats
  const fallbackData = {
    username,
    name: "Muhammad Fikri Hidayat",
    avatarUrl: `https://github.com/${username}.png`,
    followers: 2,
    publicRepos: 14,
    isFallback: true,
  };

  try {
    const profileRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }, // Cache on server for 1 hour
    });

    if (!profileRes.ok) {
      console.warn("GitHub Profile API failed, using fallback data.");
      return NextResponse.json(fallbackData);
    }

    const profile = await profileRes.json();

    return NextResponse.json({
      username: profile.login || username,
      name: profile.name || "Muhammad Fikri Hidayat",
      avatarUrl: profile.avatar_url || fallbackData.avatarUrl,
      followers: profile.followers ?? fallbackData.followers,
      publicRepos: profile.public_repos ?? fallbackData.publicRepos,
      isFallback: false,
    });
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return NextResponse.json(fallbackData);
  }
}
