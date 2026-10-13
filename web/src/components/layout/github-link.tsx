import livelyLogo from "@/assets/lively-logo.png";
import livelyLogoDark from "@/assets/lively-logo-dark.png";

import { cn } from "@/lib/utils";

type GitHubLinkProps = {
    className?: string;
    style?: React.CSSProperties;
};

export function GitHubLink({ className, style }: GitHubLinkProps) {
    return (
        <a
            className={cn("inline-flex h-7 shrink-0 items-center justify-center rounded-md px-2 leading-none transition hover:bg-black/5 dark:hover:bg-white/10", className)}
            style={style}
            href="https://github.com/peanut2001/infinite-canvas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LIVELY 项目仓库"
            title="LIVELY 项目仓库"
        >
            <img src={livelyLogo} alt="LIVELY" width={96} height={16} className="h-auto w-24 dark:hidden" />
            <img src={livelyLogoDark} alt="LIVELY" width={96} height={16} className="hidden h-auto w-24 dark:block" />
        </a>
    );
}
