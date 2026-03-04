'use client'

import Link from "next/link";
import type { IMenuItem } from "./nav-menu.types";
import { cn } from "@/shared/utils";

interface Props {
    menuItem: IMenuItem;
    isActive: boolean;
}

export function NavMenuItem({ menuItem, isActive }: Props) {
    return (
        <Link
            href={menuItem.href}
            className={cn(
                'flex items-center gap-1.5 rounded-2xl px-4 py-2 text-sm font-medium transition-colors',
                isActive
                    ? 'bg-[#1f2023] text-white'
                    : 'bg-gray-300 text-[#696969] hover:bg-gray-400'
            )}
        >
            <menuItem.icon className="size-4" area-hidden="true" />
            <span>{menuItem.label}</span>
        </Link>
    );
}