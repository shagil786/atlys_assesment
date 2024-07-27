import { postsProps } from "@/components/interfaces/types/types";
import { NextResponse } from "next/server";
import profile1 from '../../../public/profile1.png';
import profile2 from '../../../public/profile2.png';

const data: Array<postsProps> = [
    {
        name: "Theresa Webb",
        user_image: profile1,
        created_at: "5mins ago",
        emoji: "👋",
        post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        comments: 24,
        isEdited: false,
    },
    {
        name: "Marvin McKinney",
        user_image: profile2,
        created_at: "8mins ago",
        emoji: "😞",
        post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        comments: 16,
        isEdited: true,
    }
];

export async function GET(request: Request) {
    return NextResponse.json(data, { status: 200 });
}