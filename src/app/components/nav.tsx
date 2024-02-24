import React from "react";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div>
                <Link href="/">
                    InsightEdu
                </Link>
            </div>
            <div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}