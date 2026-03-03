import type { IMenuItem } from "@/shared/components/custom-ui/nav-menu/nav-menu.types";
import { PAGES } from "@/shared/config/page.config";
import { BookMarked, CalendarDays, ChartColumn, House, Store, Users, Utensils } from "lucide-react";

export const navMenuItems: IMenuItem[] = [
    {
        icon: House,
        label: 'Home',
        href: PAGES.DASHBOARD
    },
    {
        icon: CalendarDays,
        label: 'Meal Plans',
        href: PAGES.MEAL_PLANS
    },
    {
        icon: Utensils,
        label: 'Nutritions',
        href: PAGES.NUTRITIONS
    },
    {
        icon: ChartColumn,
        label: 'Analytics',
        href: PAGES.ANALYTICS
    },
    {
        icon: Store,
        label: 'Order Groceries',
        href: PAGES.ORDER_GROCERIES
    },
    {
        icon: BookMarked,
        label: 'Recipes',
        href: PAGES.RECIPES
    },
    {
        icon: Users,
        label: 'Forum',
        href: PAGES.FORUM
    },
]
