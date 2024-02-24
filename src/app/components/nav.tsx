import React from "react";
import Link from "next/link";

export default function Nav() {
    return (
        <section className="pl-10 pr-10 pt-5">
            <div className="nav">
                    <nav className=" flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg">
                        <div>
                            <Link href="/">
                                InsightEdu
                            </Link>
                        </div>
                        <div>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
            </div>
        </section>
    );
}