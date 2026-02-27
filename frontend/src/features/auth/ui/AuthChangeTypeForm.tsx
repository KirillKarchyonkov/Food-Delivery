import { PAGES } from "@/shared/config/page.config";
import Link from "next/link";

interface Props {
    isLogin: boolean;
}

export function AuthChangeTypeForm({isLogin}: Props) {
    return <div
        className="mt-3 text-center"
    >
        {isLogin ?
            (<div>
                Don`t have an account?{' '}
                <Link
                    href={PAGES.REGISTER}
                    className="underline"
                >
                    Register
                </Link>
            </div>)
            :
            (<div>
                Already have an account?{' '}
                <Link
                    href={PAGES.LOGIN}
                    className="underline"
                >
                    Login
                </Link>
            </div>)
        }
    </div>;
}

export default AuthChangeTypeForm;