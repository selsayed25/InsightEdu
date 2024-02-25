import React from "react";
import Link from "next/link";

export default function Nav() {
    return (
        <section className="pl-10 pr-10 pt-5">
            <div className="nav drop-shadow-lg">
                    <nav className=" flex justify-between items-center p-4 bg-nicebrown text-white rounded-lg">
                        <div>
                            <Link href="/">
                                InsightEdu
                            </Link>
                        </div>
                        <div>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="/forum" className="mr-12 transition ease-in-ease-out duration-300 hover:scale-110">
                                        Forum
                                    </Link>
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